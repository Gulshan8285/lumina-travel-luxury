"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname or searchParams change, finish the loading bar
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const timeout = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [pathname, searchParams]);

  // Intercept internal link clicks to start progress instantly
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || target.target === "_blank") {
        return;
      }

      // Check if internal link
      if (href.startsWith("/") || href.startsWith(window.location.origin)) {
        const url = new URL(href, window.location.origin);
        if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
          setLoading(true);
          setProgress(25);
          setTimeout(() => setProgress(75), 100);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick, { passive: true });
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  if (!loading && progress === 0) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        zIndex: 99999,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #d4af37 0%, #f3cf65 50%, #d4af37 100%)",
          boxShadow: "0 0 12px rgba(212, 175, 55, 0.9), 0 0 6px rgba(243, 207, 101, 0.7)",
          transition: progress === 100 ? "width 0.2s ease-out, opacity 0.25s ease-out" : "width 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
