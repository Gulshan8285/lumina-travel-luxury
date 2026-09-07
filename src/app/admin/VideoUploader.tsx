"use client";

import { useState, useRef } from 'react';
import styles from './page.module.css';

export const PRESET_VIDEOS = [
  { label: "Rajasthan (Desert Dunes & Royal Forts)", url: "/videos/destinations/rajasthan.mp4", poster: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=72&w=720&auto=format&fit=crop" },
  { label: "Dubai (Burj Khalifa & Luxury Marina)", url: "/videos/destinations/dubai.mp4", poster: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=72&w=720&auto=format&fit=crop" },
  { label: "Shimla Manali (Himalayan Snow Peaks)", url: "/videos/destinations/shimla-manali.mp4", poster: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=72&w=720&auto=format&fit=crop" },
  { label: "Singapore (Supertree & Marina Bay)", url: "/videos/destinations/singapore.mp4", poster: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=72&w=720&auto=format&fit=crop" },
  { label: "Kerala (Backwaters & Tea Hills)", url: "/videos/destinations/kerala.mp4", poster: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=72&w=720&auto=format&fit=crop" },
  { label: "Bali (Ubud Rice Terraces & Cliffs)", url: "/videos/destinations/bali.mp4", poster: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=72&w=720&auto=format&fit=crop" },
  { label: "Andaman (Turquoise Radhanagar Beach)", url: "/videos/destinations/andaman.mp4", poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=72&w=720&auto=format&fit=crop" },
  { label: "Maldives (Overwater Villa & Reef)", url: "/videos/destinations/maldives.mp4", poster: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=72&w=720&auto=format&fit=crop" },
  { label: "Tropical Ocean (Azure Coastline)", url: "/videos/ocean.mp4", poster: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=72&w=720&auto=format&fit=crop" },
  { label: "Wildlife Safari (Nature & Animals)", url: "/videos/safari.mp4", poster: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=72&w=720&auto=format&fit=crop" },
  { label: "Mountain Adventure (Himalayan Valley)", url: "/videos/adventure.mp4", poster: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=72&w=720&auto=format&fit=crop" }
];

interface VideoUploaderProps {
  label: string;
  value: string;
  onChange: (url: string) => void;
  id: string;
  required?: boolean;
}

export default function VideoUploader({
  label,
  value,
  onChange,
  id,
  required = false
}: VideoUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const videoPreviewRef = useRef<HTMLVideoElement | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 80 * 1024 * 1024) {
      alert("Please select a video file smaller than 80MB.");
      return;
    }

    setUploading(true);
    setFileName(file.name);

    // Read as Data URL or Object URL
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      onChange(dataUrl);
      setUploading(false);
    };
    reader.onerror = () => {
      alert("Error reading video file.");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.imageUploaderRoot}>
      <label className={styles.formLabel}>
        {label} {required && <span style={{ color: '#e11d48' }}>*</span>}
      </label>

      {/* Live Video Preview Box */}
      {value && (
        <div style={{ marginBottom: '1rem', position: 'relative', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.15)', background: '#000', maxHeight: '220px' }}>
          <video
            ref={videoPreviewRef}
            src={value}
            controls
            playsInline
            muted
            style={{ width: '100%', maxHeight: '220px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ padding: '0.4rem 0.8rem', background: 'rgba(11, 15, 25, 0.85)', fontSize: '0.72rem', color: '#94a3b8', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>Active Video Source: {value.length > 50 ? `${value.substring(0, 48)}...` : value}</span>
            <button
              type="button"
              onClick={() => onChange('')}
              style={{ background: 'transparent', border: 'none', color: '#f43f5e', cursor: 'pointer', fontSize: '0.72rem', fontWeight: 600 }}
            >
              ✕ Remove Video
            </button>
          </div>
        </div>
      )}

      {/* Custom URL Input */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}>
        <input
          type="text"
          id={id}
          className={styles.formInput}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter video URL (/videos/... or https://...)"
          style={{ flex: 1 }}
        />
      </div>

      {/* Local File Upload Button */}
      <div style={{ marginBottom: '1rem' }}>
        <label
          htmlFor={`${id}-file-input`}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.6rem 1.1rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '6px',
            color: '#fff',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          {uploading ? "Processing Video..." : (fileName ? `Change File (${fileName})` : "📁 Upload Video from Phone / PC")}
        </label>
        <input
          type="file"
          id={`${id}-file-input`}
          accept="video/mp4,video/webm,video/quicktime,video/*"
          onChange={handleFile}
          style={{ display: 'none' }}
        />
      </div>

      {/* Curated Preset Travel Videos */}
      <div>
        <span style={{ display: 'block', fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          Or Choose from 11 Ultra-Fast Preset Destination Reels:
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '0.5rem' }}>
          {PRESET_VIDEOS.map((preset) => (
            <button
              key={preset.url}
              type="button"
              onClick={() => onChange(preset.url)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.65rem',
                background: value === preset.url ? 'rgba(225, 29, 72, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                border: value === preset.url ? '1px solid #e11d48' : '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '6px',
                color: value === preset.url ? '#fff' : '#cbd5e1',
                fontSize: '0.72rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease'
              }}
            >
              <span style={{ color: value === preset.url ? '#e11d48' : '#94a3b8' }}>▶</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{preset.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
