'use client';
import React from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from './carousel.module.css'
import Image from 'next/image';
import Link from 'next/link';

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = ({ projetos = [] }) => {
  const PartnersConfig2 = {
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  if (!projetos || projetos.length === 0) {
    return null;
  }

  return (
    <div className={styles.projetos}>
      <h2 className={styles.projetosTitle}>confira outros projetos</h2>
      <OwlCarousel className={styles.slider} {...PartnersConfig2}>
        {projetos.map((projeto, index) => (
          <div key={index} className={styles.item}>
            <Link href={`/portfolio/${projeto.nome.toLowerCase().replace(/\s+/g, '')}`}>
              <Image 
                className={styles.img} 
                src={projeto.imagem} 
                alt={projeto.nome}
                width={300}
                height={200}
              />
            </Link>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Slider;