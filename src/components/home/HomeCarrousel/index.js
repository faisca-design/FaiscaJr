'use client';
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./carousel.module.css";


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Slider = (props) => {
  return (
    <div>
      <OwlCarousel>
            <div className={styles.item}>
                <h1>1</h1>
            </div>
            <div className={styles.item}>
                <h1>2</h1>
            </div>
            <div className={styles.item}>
                <h1>3</h1>
            </div>
      </OwlCarousel>
    </div>
  );
};
export default Slider;
