'use client'

import { useRef, useEffect } from 'react';

const ContactBackground = () => {
    const containerRef = useRef(null);
  
    useEffect(() => {
      const container = containerRef.current;
      
      const drawGradients = () => {
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
  
        // Posicionamento específico para a página de contatos
        const padraoContatos = [
          { x: '60%', y: '-45%', r: '160vh', color: '#9e431e' },  // Topo direita
          { x: '-27%', y: '40%', r: '160vh', color: '#9e431e' },  // Base esquerda
        ];
  
        padraoContatos.forEach((bola) => {
          const gradient = document.createElement('div');
          gradient.style.position = 'absolute';
          gradient.style.left = bola.x;
          gradient.style.top = bola.y;
          gradient.style.width = bola.r;
          gradient.style.height = bola.r;
          gradient.style.borderRadius = '90%';
          gradient.style.background = `radial-gradient(circle, ${bola.color} 0%, transparent 70%)`;
          gradient.style.pointerEvents = 'none';
          container.appendChild(gradient);
        });
      };
  
      drawGradients();
      window.addEventListener('resize', drawGradients);
  
      return () => {
        window.removeEventListener('resize', drawGradients);
      };
    }, []);
  
    return (
      <div 
        ref={containerRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          zIndex: -1,
          overflow: 'hidden'
        }}
      />
    );
  };

export default ContactBackground;