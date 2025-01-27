'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RefreshHandler() {
  const pathname = usePathname();

  const normalizeUrl = (url) => {
    // Divide a URL em partes
    const parts = url.split('/');
    // Pega o último segmento (nome do projeto)
    const projectName = parts[parts.length - 1];
    // Normaliza apenas o nome do projeto
    const normalizedName = projectName.toLowerCase();
    // Reconstrói a URL substituindo apenas o nome do projeto
    parts[parts.length - 1] = normalizedName;
    return parts.join('/');
  };

  const handleRefresh = () => {
    // Normaliza a URL antes do refresh
    const normalizedPath = normalizeUrl(pathname);
    const timestamp = Date.now().toString().slice(-4);
    window.location.href = normalizedPath + `?v=${timestamp}`;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
        handleRefresh();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pathname]);

  return null;
}