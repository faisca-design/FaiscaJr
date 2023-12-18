import React from 'react';

var $ = require("jquery");
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";


<<<<<<< Updated upstream
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });

export default function Slider() {
    return (
        <OwlCarousel>
            <div className={styles.item}>
                <h1>1</h1>
            </div>
            <div className={styles.item2}>
                <h1>2</h1>
            </div>
            <div className={styles.item3}>
                <h1>3</h1>
            </div>
        </OwlCarousel>
    )
 }
=======
const Slider = (props) => {
  const PartnersConfig = {
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
        items: 1,
      },
      700: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    navContainerClass: `${styles.owlNav}`,
    navClass: [`${styles.owlPrev}`, `${styles.owlNext}`],
    navText: ['', ''],
  };

    return (
      <div className={styles.depoimentos}>
        <h2 className={styles.depoimentosTitle}>O QUE NOSSOS CLIENTES TEM A DIZER</h2>
        <OwlCarousel   className={styles.slider}
            {...PartnersConfig}   >
          <div className={styles.item}>
            <h2 className={styles.depoimentosText}>
              “Trabalhar com a faísca foi uma excelente experiência, o resultado superou
              toda e qualquer expectativa. Nos impactou de tal forma que buscamos estabelecer
              uma parceria e recomendamos o trabalho sempre que possível”
              <br></br><b>Equipe IECBiot</b>
            </h2>
          </div>
          <div className={styles.item}>
            <h2 className={styles.depoimentosText}>
              “Trabalhar com a faísca foi uma excelente experiência, o resultado superou
              toda e qualquer expectativa. Nos impactou de tal forma que buscamos estabelecer
              uma parceria e recomendamos o trabalho sempre que possível”
              <br></br><b>Equipe IECBiot</b>
            </h2>
          </div>
          <div className={styles.item}>
            <h2 className={styles.depoimentosText}>
              “Trabalhar com a faísca foi uma excelente experiência, o resultado superou
              toda e qualquer expectativa. Nos impactou de tal forma que buscamos estabelecer
              uma parceria e recomendamos o trabalho sempre que possível”
              <br></br><b>Equipe IECBiot</b>
            </h2>
          </div>
          <div className={styles.item}>
            <h2 className={styles.depoimentosText}>
              “Trabalhar com a faísca foi uma excelente experiência, o resultado superou
              toda e qualquer expectativa. Nos impactou de tal forma que buscamos estabelecer
              uma parceria e recomendamos o trabalho sempre que possível”
              <br></br><b>Equipe IECBiot</b>
            </h2>
          </div>
          <div className={styles.item}>
            <h2 className={styles.depoimentosText}>
              “Trabalhar com a faísca foi uma excelente experiência, o resultado superou
              toda e qualquer expectativa. Nos impactou de tal forma que buscamos estabelecer
              uma parceria e recomendamos o trabalho sempre que possível”
              <br></br><b>Equipe IECBiot</b>
            </h2>
          </div>
        </OwlCarousel>
      </div>
    );
  };

  export default Slider;
>>>>>>> Stashed changes
