import React from 'react';

var $ = require("jquery");
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";


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