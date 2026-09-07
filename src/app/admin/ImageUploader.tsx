"use client";

import { useState } from 'react';
import styles from './page.module.css';

export const CURATED_PHOTOS = [
  { label: "Rajasthan Palace", url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=72&w=720&auto=format&fit=crop" },
  { label: "Shimla Snow", url: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=72&w=720&auto=format&fit=crop" },
  { label: "Kerala Backwaters", url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=72&w=720&auto=format&fit=crop" },
  { label: "Andaman Beach", url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=72&w=720&auto=format&fit=crop" },
  { label: "Dubai Skyline", url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=72&w=720&auto=format&fit=crop" },
  { label: "Singapore Supertree", url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=72&w=720&auto=format&fit=crop" },
  { label: "Bali Pool Villa", url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=72&w=720&auto=format&fit=crop" },
  { label: "Maldives Overwater", url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=72&w=720&auto=format&fit=crop" },
  { label: "Kedarnath Temple", url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=72&w=720&auto=format&fit=crop" },
  { label: "Swiss Alps", url: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=72&w=720&auto=format&fit=crop" }
];

interface ImageUploaderProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  id: string;
  recommendedAspect?: string;
  required?: boolean;
}

export default function ImageUploader({
  label,
  value,
  onChange,
  id,
  recommendedAspect = "16:9 Landscape",
  required = false
}: ImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 20 * 1024 * 1024) {
      alert("Please choose an image file smaller than 20MB.");
      return;
    }

    setUploading(true);
    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        // High quality responsive canvas compression (max 1280px width/height)
        let width = img.width;
        let height = img.height;
        const MAX_DIM = 1280;

        if (width > height) {
          if (width > MAX_DIM) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          }
        } else {
          if (height > MAX_DIM) {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
          onChange(compressedDataUrl);
        } else {
          onChange(event.target?.result as string);
        }
        setUploading(false);
      };
      img.onerror = () => {
        alert("Could not load image file.");
        setUploading(false);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const isLocalUpload = value && value.startsWith('data:');

  return (
    <div className={styles.imageUploaderRoot}>
      <label className={styles.formLabel}>
        {label} {required && <span style={{ color: '#e11d48' }}>*</span>}{' '}
        <span style={{ opacity: 0.6, textTransform: 'none', fontWeight: 400, fontSize: '0.8rem' }}>
          ({recommendedAspect})
        </span>
      </label>

      <div className={styles.uploaderDualBox}>
        {/* OPTION 1: Upload from Laptop / Computer */}
        <div className={styles.uploadFileBox}>
          <input 
            type="file" 
            id={`file-input-${id}`}
            accept="image/*"
            onChange={handleFile}
            style={{ display: 'none' }}
          />
          <label htmlFor={`file-input-${id}`} className={styles.uploadFileBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
            {uploading ? 'Processing Image...' : '📁 Upload from Computer / Laptop'}
          </label>
          <span className={styles.uploadHint}>
            Select any JPG, PNG, or WebP photo directly from your device
          </span>
          {fileName && (
            <span className={styles.uploadSuccessBadge}>
              ✓ Uploaded from laptop: {fileName}
            </span>
          )}
        </div>

        {/* OR DIVIDER */}
        <div className={styles.uploadDivider}>
          <span>OR PASTE IMAGE URL</span>
        </div>

        {/* OPTION 2: Enter Web URL */}
        <div className={styles.uploadUrlBox}>
          <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
            <input 
              type="text" 
              placeholder="🌐 Or paste image link (e.g. https://images.unsplash.com/...)" 
              value={isLocalUpload ? '' : value}
              onChange={(e) => {
                setFileName(null);
                onChange(e.target.value);
              }}
              className={styles.formInput}
              style={{ fontSize: '0.88rem' }}
            />
            {value && (
              <button 
                type="button" 
                onClick={() => {
                  setFileName(null);
                  onChange('');
                }}
                className={styles.clearImgBtn}
                title="Clear image"
              >
                ✕ Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* OPTION 3: 1-Click Curated Presets */}
      <div className={styles.presetPickerTitle}>Or 1-Click to select a curated luxury photo:</div>
      <div className={styles.presetGrid}>
        {CURATED_PHOTOS.map((photo) => (
          <button 
            key={photo.label}
            type="button" 
            onClick={() => {
              setFileName(null);
              onChange(photo.url);
            }}
            className={styles.presetBtn}
          >
            {photo.label}
          </button>
        ))}
      </div>

      {/* LIVE IMAGE PREVIEW */}
      {value && (
        <div className={styles.imagePreviewWrapper}>
          <div 
            className={styles.imagePreviewThumb}
            style={{ backgroundImage: `url(${value})` }}
          />
          <div className={styles.previewInfoBar}>
            <span className={styles.previewStatus}>
              {isLocalUpload ? '✓ Photo uploaded from your laptop/system' : '✓ Photo loaded from web link'}
            </span>
            <button 
              type="button"
              onClick={() => {
                setFileName(null);
                onChange('');
              }}
              className={styles.previewRemoveBtn}
            >
              Remove Photo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
