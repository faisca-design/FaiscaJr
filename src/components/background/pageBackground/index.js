"use client";

import React, { useEffect, useRef, useState } from 'react';

const PageBackground = () => {
  const containerRef = useRef(null);
  const [numBolas, setNumBolas] = useState(5);

  useEffect(() => {
    const container = containerRef.current;
    
    const drawGradients = () => {
      // Limpar gradientes existentes
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      // Definir o padrão completo de bolas (funciona em partes)
      const padraoCompleto = [
        { x: '60%', y: '-8%', r: '160vh', color: '#9e431e' },
        { x: '-27%', y: '11%', r: '160vh', color: '#9e431e' },
        { x: '50%', y: '26%', r: '170vh', color: '#9e431e' },
        { x: '-27%', y: '57%', r: '180vh', color: '#9e431e' },
        { x: '45%', y: '86%', r: '180vh', color: '#9e431e' },
      ];

      // Determinar o número de bolas com base na altura da tela
      const screenHeight = window.innerHeight;
      let newNumBolas;
      if (screenHeight < 600) {
        newNumBolas = 2;
    } else if (screenHeight >= 600) {
      newNumBolas = 6;
      } else if (screenHeight >= 1500) {
        newNumBolas = 4;
      } else if (screenHeight >= 1000) {
        newNumBolas = 3;
      } else {
        newNumBolas = 1;
      }
      setNumBolas(newNumBolas);

      // Criar e posicionar os gradientes
      padraoCompleto.slice(0, newNumBolas).forEach((bola, index) => {
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
        zIndex: -1,
        overflow: 'hidden'
      }}
    />
  );
};

export default PageBackground;