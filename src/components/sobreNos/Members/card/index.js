'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from "./card.module.css"


const card = ({ members }) => {
  const memberArray = Array.isArray(members) ? members : [members].filter(Boolean);
  
  if (!memberArray.length) return null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (memberArray.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setIsVisible(false); // Inicia o fade out
      
      // Aguarda o fade out completar antes de trocar o índice
      setTimeout(() => {
        setCurrentIndex((current) => 
          current === memberArray.length - 1 ? 0 : current + 1
        );
        setIsVisible(true); // Inicia o fade in
      }, 400); // Metade da duração da transição CSS
      
    }, 6000);

    return () => clearInterval(interval);
  }, [memberArray.length, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (memberArray.length > 1) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((current) => 
          current === memberArray.length - 1 ? 0 : current + 1
        );
        setIsVisible(true);
      }, 400);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const currentMember = memberArray[currentIndex] || memberArray[0];

  if (!currentMember) return null;

  return (
    <div 
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.cardImg}>
        <div className={`${styles.cardText} ${isVisible ? styles.visible : styles.hidden}`}>
          <h2 className={styles.Nomes}>{currentMember.nome}</h2>
          <p className={styles.Ciclo}>{currentMember.ciclo}</p>
        </div>
        <div className={styles.imageContainer}>
          <div className={`${styles.imageWrapper} ${isVisible ? styles.visible : styles.hidden}`}>
            <Image 
              src={currentMember.imagem} 
              alt={currentMember.nome} 
              width={0} 
              height={0} 
              layout='responsive'
              className={styles.memberImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
  
  export default card;