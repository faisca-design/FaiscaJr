'use client';
// components/RefreshHandler.js
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function RefreshHandler() {
  const router = useRouter();
  const pathname = usePathname();

  const normalizeUrl = (url) => {
    const parts = url.split('/');
    const projectName = parts[parts.length - 1];
    const normalizedName = projectName.toLowerCase();
    parts[parts.length - 1] = normalizedName;
    return parts.join('/');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
        
        // Apenas normaliza a URL sem refresh
        const normalizedPath = normalizeUrl(pathname);
        
        // Usa o router.replace para não adicionar nova entrada no histórico
        if (pathname !== normalizedPath) {
          router.replace(normalizedPath);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, pathname]);

  return null;
}