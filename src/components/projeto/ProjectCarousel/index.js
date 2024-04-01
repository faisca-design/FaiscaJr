'use client';
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from './carousel.module.css'
import Image from 'next/image';
import proj1 from './../../../../public/img/projeto/projeto1.png'
import proj2 from './../../../../public/img/projeto/projeto2.png'
import proj3 from './../../../../public/img/projeto/projeto3.png'


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = (props) => {
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
    navContainerClass: `${styles.owlNav}`,
    navClass: [`${styles.owlPrev}`, `${styles.owlNext}`],
    navText: ['', ''],
  };

    return (
      <div className={styles.projetos}>
        <h2 className={styles.projetosTitle}>confira outros projetos</h2>
        <OwlCarousel   className={styles.slider}
            {...PartnersConfig2}   >
          <div className={styles.item}>
            <Image className={styles.imgcarimbo} src={proj1} alt={'nome'} />
          </div>
          <div className={styles.item}>
            <Image className={styles.imgcarimbo} src={proj2} alt={'nome'} />
          </div>
          <div className={styles.item}>
            <Image className={styles.imgcarimbo} src={proj3} alt={'nome'} />
          </div>
        </OwlCarousel>
      </div>
    );
  };

  export default Slider;
