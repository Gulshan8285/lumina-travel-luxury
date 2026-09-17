"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import styles from './SecretLiveEditor.module.css';

const DEFAULT_PIN = 'sobhavi2026';

// Helper to generate a stable, deterministic key for an element on the page
function getElementKey(el: HTMLElement): string {
  if (el.dataset.editorKey) return el.dataset.editorKey;
  if (el.id) return `id:${el.id}`;

  const parts: string[] = [];
  let curr: HTMLElement | null = el;
  let depth = 0;

  while (curr && curr !== document.body && depth < 4) {
    const tag = curr.tagName.toLowerCase();
    if (curr.id) {
      parts.unshift(`${tag}#${curr.id}`);
      break;
    }

    const firstClass = curr.className && typeof curr.className === 'string'
      ? curr.className.split(' ').filter(c => !c.startsWith('sobhavi-'))[0] || ''
      : '';
    const cleanClass = firstClass.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 20);

    let idx = 0;
    let sib = curr.previousElementSibling;
    while (sib) {
      if (sib.tagName === curr.tagName) idx++;
      sib = sib.previousElementSibling;
    }

    parts.unshift(`${tag}${cleanClass ? '.' + cleanClass : ''}:${idx}`);
    curr = curr.parentElement;
    depth++;
  }

  const generated = parts.join('>');
  el.dataset.editorKey = generated;
  return generated;
}

// Find element by stable key
function findElementByKey(key: string): HTMLElement | null {
  const existing = document.querySelector<HTMLElement>(`[data-editor-key="${CSS.escape(key)}"]`);
  if (existing) return existing;

  if (key.startsWith('id:')) {
    return document.getElementById(key.replace('id:', ''));
  }

  // Walk and match
  const elements = document.querySelectorAll<HTMLElement>('h1, h2, h3, h4, h5, h6, p, span, div, a, button, label');
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (getElementKey(el) === key) {
      return el;
    }
  }
  return null;
}

export default function SecretLiveEditor() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isEditing, setIsEditing] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [pendingChanges, setPendingChanges] = useState<Record<string, string>>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const initialContentsRef = useRef<Record<string, string>>({});
  const loadedOverridesRef = useRef<Record<string, Record<string, string>>>({});

  // 1. Fetch and apply saved text overrides on load
  const applyOverridesForPath = useCallback((path: string, overrides: Record<string, string>) => {
    if (!overrides || Object.keys(overrides).length === 0) return;
    Object.entries(overrides).forEach(([key, value]) => {
      const el = findElementByKey(key);
      if (el && !el.isContentEditable) {
        el.innerHTML = value;
      }
    });
  }, []);

  const fetchAndApplyOverrides = useCallback(async () => {
    try {
      // First apply from localStorage for zero-latency instant render
      const local = localStorage.getItem('sobhavi_content_overrides');
      if (local) {
        try {
          const parsed = JSON.parse(local);
          loadedOverridesRef.current = parsed;
          const currentPath = pathname?.toLowerCase() || '/';
          if (parsed[currentPath]) {
            applyOverridesForPath(currentPath, parsed[currentPath]);
          }
        } catch {}
      }

      // Then fetch latest from server API
      const res = await fetch('/api/content-overrides');
      if (res.ok) {
        const data = await res.json();
        if (data && data.overrides) {
          loadedOverridesRef.current = data.overrides;
          localStorage.setItem('sobhavi_content_overrides', JSON.stringify(data.overrides));
          const currentPath = pathname?.toLowerCase() || '/';
          if (data.overrides[currentPath]) {
            applyOverridesForPath(currentPath, data.overrides[currentPath]);
          }
        }
      }
    } catch (err) {
      console.warn('Could not load content overrides:', err);
    }
  }, [pathname, applyOverridesForPath]);

  useEffect(() => {
    fetchAndApplyOverrides();
    // Re-apply on dynamic page navigation
    const timer = setTimeout(() => {
      fetchAndApplyOverrides();
    }, 400);
    return () => clearTimeout(timer);
  }, [pathname, fetchAndApplyOverrides]);

  // 2. Secret Activation: Listen for Ctrl+Shift+E / Cmd+Shift+E or ?edit=sobhavi
  useEffect(() => {
    const checkQuery = () => {
      if (searchParams?.get('edit') === 'sobhavi') {
        const isAuth = sessionStorage.getItem('sobhavi_editor_auth') === 'true';
        if (isAuth) {
          setIsEditing(true);
        } else {
          setShowPinModal(true);
        }
      }
    };
    checkQuery();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret combo: Ctrl + Shift + E or Cmd + Shift + E
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
        e.preventDefault();
        const isAuth = sessionStorage.getItem('sobhavi_editor_auth') === 'true';
        if (isAuth) {
          setIsEditing(prev => !prev);
        } else {
          setShowPinModal(true);
        }
      }

      // Save shortcut inside edit mode: Ctrl + S or Cmd + S
      if (isEditing && (e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        handleSave();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEditing, searchParams]);

  // 3. Enable or Disable Inline ContentEditable on Page Elements
  useEffect(() => {
    const styleId = 'sobhavi-editor-styles';
    let styleTag = document.getElementById(styleId);

    if (isEditing) {
      if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        styleTag.innerHTML = `
          [data-sobhavi-editable="true"] {
            cursor: text !important;
            transition: outline 0.15s ease, box-shadow 0.15s ease !important;
          }
          [data-sobhavi-editable="true"]:hover {
            outline: 1.5px dashed rgba(212, 175, 55, 0.7) !important;
            outline-offset: 2px !important;
          }
          [data-sobhavi-editable="true"]:focus {
            outline: 2px solid #d4af37 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 12px rgba(212, 175, 55, 0.4) !important;
          }
          [data-sobhavi-modified="true"] {
            outline: 1.5px solid #22c55e !important;
            outline-offset: 2px !important;
          }
        `;
        document.head.appendChild(styleTag);
      }

      // Select editable text targets: headings, paragraphs, labels, spans, links
      const selectors = 'h1, h2, h3, h4, h5, h6, p, .editable-text, [data-editable="true"]';
      const elements = document.querySelectorAll<HTMLElement>(selectors);

      elements.forEach(el => {
        // Skip editor's own floating toolbar and modals
        if (el.closest(`.${styles.floatingToolbar}`) || el.closest(`.${styles.modalBackdrop}`)) return;
        if (['INPUT', 'TEXTAREA', 'SCRIPT', 'STYLE'].includes(el.tagName)) return;

        el.setAttribute('contenteditable', 'true');
        el.setAttribute('data-sobhavi-editable', 'true');
        el.setAttribute('spellcheck', 'false');

        const key = getElementKey(el);
        if (!initialContentsRef.current[key]) {
          initialContentsRef.current[key] = el.innerHTML;
        }

        const handleInput = () => {
          const currentHtml = el.innerHTML;
          if (currentHtml !== initialContentsRef.current[key]) {
            el.setAttribute('data-sobhavi-modified', 'true');
            setPendingChanges(prev => ({ ...prev, [key]: currentHtml }));
          } else {
            el.removeAttribute('data-sobhavi-modified');
            setPendingChanges(prev => {
              const updated = { ...prev };
              delete updated[key];
              return updated;
            });
          }
        };

        el.oninput = handleInput;
      });

      showToast("✏️ Edit Mode Active! Click any text to edit directly.");
    } else {
      // Clean up styles and contenteditable
      if (styleTag) styleTag.remove();
      const editableElements = document.querySelectorAll<HTMLElement>('[data-sobhavi-editable="true"]');
      editableElements.forEach(el => {
        el.removeAttribute('contenteditable');
        el.removeAttribute('data-sobhavi-editable');
        el.removeAttribute('data-sobhavi-modified');
        el.oninput = null;
      });
      setPendingChanges({});
    }

    return () => {
      if (styleTag) styleTag.remove();
    };
  }, [isEditing]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (enteredPin.trim() === DEFAULT_PIN) {
      sessionStorage.setItem('sobhavi_editor_auth', 'true');
      setShowPinModal(false);
      setPinError(false);
      setEnteredPin('');
      setIsEditing(true);
    } else {
      setPinError(true);
    }
  };

  const handleSave = async () => {
    if (Object.keys(pendingChanges).length === 0) {
      showToast("No changes to save.");
      return;
    }

    setIsSaving(true);
    const currentPath = pathname?.toLowerCase() || '/';

    try {
      const res = await fetch('/api/content-overrides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pin: DEFAULT_PIN,
          routePath: currentPath,
          updates: pendingChanges
        })
      });

      if (res.ok) {
        // Update local cache
        const updated = {
          ...loadedOverridesRef.current,
          [currentPath]: {
            ...(loadedOverridesRef.current[currentPath] || {}),
            ...pendingChanges
          }
        };
        loadedOverridesRef.current = updated;
        localStorage.setItem('sobhavi_content_overrides', JSON.stringify(updated));

        // Update initial contents ref
        Object.entries(pendingChanges).forEach(([k, v]) => {
          initialContentsRef.current[k] = v;
        });

        // Clear modified outlines
        document.querySelectorAll('[data-sobhavi-modified="true"]').forEach(el => {
          el.removeAttribute('data-sobhavi-modified');
        });

        const count = Object.keys(pendingChanges).length;
        setPendingChanges({});
        showToast(`✅ Saved ${count} text update${count > 1 ? 's' : ''} live to website!`);
      } else {
        alert("Failed to save changes. Please try again.");
      }
    } catch (err) {
      console.error('Save error:', err);
      alert("Network error while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleRevert = () => {
    if (confirm("Discard unsaved changes on this page?")) {
      Object.keys(pendingChanges).forEach(key => {
        const el = findElementByKey(key);
        if (el && initialContentsRef.current[key]) {
          el.innerHTML = initialContentsRef.current[key];
          el.removeAttribute('data-sobhavi-modified');
        }
      });
      setPendingChanges({});
      showToast("Unsaved changes discarded.");
    }
  };

  const pendingCount = Object.keys(pendingChanges).length;

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className={styles.toast}>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Secret PIN Modal */}
      {showPinModal && (
        <div className={styles.modalBackdrop} onClick={() => setShowPinModal(false)}>
          <div className={styles.modalCard} onClick={e => e.stopPropagation()}>
            <div className={styles.modalIcon}>🔐</div>
            <h3 className={styles.modalTitle}>Secret Live Edit Mode</h3>
            <p className={styles.modalDesc}>
              Enter admin passkey to edit text directly on this website.
            </p>

            <form onSubmit={handleUnlock}>
              <input
                type="password"
                placeholder="••••••••"
                value={enteredPin}
                onChange={e => {
                  setEnteredPin(e.target.value);
                  setPinError(false);
                }}
                className={styles.pinInput}
                autoFocus
              />

              {pinError && (
                <div style={{ color: '#ef4444', fontSize: '0.82rem', marginBottom: '12px' }}>
                  Incorrect PIN. Please try again.
                </div>
              )}

              <div className={styles.modalActions}>
                <button type="submit" className={styles.unlockBtn}>
                  Unlock Editor
                </button>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowPinModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Toolbar (Only visible when Edit Mode is active) */}
      {isEditing && (
        <div className={styles.floatingToolbar}>
          <div className={styles.modeBadge}>
            <span className={styles.pulseDot} />
            <span>Edit Mode</span>
          </div>

          <span className={styles.changesCount}>
            {pendingCount > 0 ? `${pendingCount} edited` : 'Click any text to edit'}
          </span>

          <button
            type="button"
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={pendingCount === 0 || isSaving}
          >
            {isSaving ? "Saving..." : "💾 Save Live"}
          </button>

          {pendingCount > 0 && (
            <button
              type="button"
              className={styles.resetBtn}
              onClick={handleRevert}
              title="Discard unsaved changes"
            >
              Revert
            </button>
          )}

          <button
            type="button"
            className={styles.exitBtn}
            onClick={() => setIsEditing(false)}
            title="Exit Edit Mode (Ctrl+Shift+E)"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}
