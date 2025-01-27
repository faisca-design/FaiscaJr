'use client';
// components/RefreshHandler.js
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function RefreshHandler() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
        
        // Pega só o caminho base, sem query params
        const basePath = pathname;
        // Adiciona só um timestamp pequeno (últimos 4 dígitos)
        const timestamp = Date.now().toString().slice(-4);
        
        router.push(basePath + `?v=${timestamp}`);
        router.refresh();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, pathname]);

  return null;
}