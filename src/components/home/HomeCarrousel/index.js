'use client'

import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import styles from './carousel.module.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const HomeCarousel = ({ depoimentos }) => {
    const PartnersConfig = {
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        responsive: {
            0: { items: 1 },
            1000: { items: 1 },
        },
    };

    return (
        <div className={styles.depoimentos}>
            <h2 className={styles.depoimentosTitle}>O QUE NOSSOS CLIENTES TEM A DIZER</h2>
            <OwlCarousel className={styles.slider} {...PartnersConfig}>
                {depoimentos.map((depoimento, index) => (
                    <div key={index} className={styles.item}>
                        <h2 className={styles.depoimentosText}>
                            {depoimento.texto}
                            <h2 className={styles.clientName}>{depoimento.cliente}</h2>
                        </h2>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default HomeCarousel;
