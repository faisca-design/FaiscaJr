'use client';
// components/RefreshHandler.js
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function RefreshHandler() {
  const router = useRouter();
  const pathname = usePathname();

  const toggleUrlCase = (url) => {
    const parts = url.split('/');
    const projectName = parts[parts.length - 1];
    
    // Se tem alguma letra maiúscula, converte tudo para minúscula
    if (projectName !== projectName.toLowerCase()) {
      parts[parts.length - 1] = projectName.toLowerCase();
    } 
    // Se está tudo em minúsculo, capitaliza a primeira letra
    else {
      parts[parts.length - 1] = projectName.charAt(0).toUpperCase() + projectName.slice(1).toLowerCase();
    }
    
    return parts.join('/');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r')) {
        e.preventDefault();
        
        // Alterna entre as versões
        const newPath = toggleUrlCase(pathname);
        
        // Usa replace para não adicionar ao histórico
        router.replace(newPath);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [router, pathname]);

  return null;
}