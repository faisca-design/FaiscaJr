'use client';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import styles from './carousel.module.css';

var $ = require('jquery');
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const Slider = (props) => {
    const PartnersConfig = {
        loop: true,
        nav: true, 
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
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
        navContainerClass: 'owl-nav',
        navClass: [`${styles.owlPrev}`, `${styles.owlNext}`],
        navText: ['<', '>'], // Textos das setas
    };

    return (
        <div className={styles.depoimentos}>
            <h2 className={styles.depoimentosTitle}>O QUE NOSSOS CLIENTES TEM A DIZER</h2>
            <OwlCarousel className={styles.slider} {...PartnersConfig}>
                <div className={styles.item}>
                    <h2 className={styles.depoimentosText}>
                        “Trabalhar com a faísca foi uma excelente experiência, o resultado superou
                        toda e qualquer expectativa. Nos impactou de tal forma que buscamos estabelecer
                        uma parceria e recomendamos o trabalho sempre que possível”
                        <h2 className={styles.clientName}>Equipe IECBiot</h2>
                    </h2>
                </div>
             </OwlCarousel>
        </div>
    );
};

export default Slider;
