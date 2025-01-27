'use client';
// components/RefreshHandler.js
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function RefreshHandler() {
  const router = useRouter();
  const pathname = usePathname();

  const handleRefresh = () => {
    // Usar window.location para forçar refresh
    const timestamp = Date.now().toString().slice(-4);
    window.location.href = pathname + `?v=${timestamp}`;
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