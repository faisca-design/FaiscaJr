'use client'

import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';
import styles from './carousel.module.css';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const HomeCarousel = ({ tittleReviews }) => {
    const depoimentos = [
        {
          texto: "Além do excelente atendimento, cumprimento dos prazos e o resultado que superou minha expectativa, gostaria de pontuar que o mais impactante para mim foi que na apresentação dos primeiros materiais eu percebi o quão bem o pessoal captou a minha personalidade conseguindo transpor tudo o que eu tinha em mente através da identidade visual.",
          cliente: "Adriana Ilha",
        },
        {
          texto: "Trabalhar com a Faísca foi uma excelente experiência, o resultado superou toda e qualquer expectativa. Nos impactou de tal forma que buscamos estabelecer uma parceria e recomendamos o trabalho sempre que possível.",
          cliente: "Equipe IECBiot",
        },
        {
          texto: "O envolvimento e dedicação da equipe da Faísca fez toda diferença. Desde a primeira reunião fiquei impactado pelas contribuições. Recebi mais do que esperava. Foi muito bom.",
          cliente: "Edson Lima",
        },
        {
          texto: "A equipe abraçou o projeto como ninguém até hoje abraçou, sugerindo ideias e trabalhando no material que já existia. Posso tranquilamente dizer que foi a melhor equipe que já trabalhei! Um beijo no coração deles!",
          cliente: "Pedro Valente",
        },
        {
          texto: "Acredito que a nova identidade visual da MOVA com certeza transmite agora o que realmente queríamos que transmitisse! Vocês conseguiram captar tudo o que queríamos e transformaram em algo muito legal, que realmente representa a MOVA! Sempre fomos muito acolhidos ao longo do projeto, foi uma experiência completamente positiva.",
          cliente: "Camila Moreira, MOVA",
        },
    
    
      ];

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
            <h2 className={styles.depoimentosTitle}>{tittleReviews}</h2>
            <OwlCarousel className={styles.slider} {...PartnersConfig}>
                {depoimentos.map((depoimento, index) => (
                    <div key={index} className={styles.item}>
                        <p className={styles.depoimentosText}>{depoimento.texto}</p>
                        <p className={styles.clientName}>{depoimento.cliente}</p>
                    </div>
                ))}
            </OwlCarousel>
        </div>
    );
};

export default HomeCarousel;