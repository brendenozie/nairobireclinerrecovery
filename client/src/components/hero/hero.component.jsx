import React from "react";
import { Link } from "react-router-dom";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import CitiesSlider from "../furn/furn.component";
import "./hero-section.styles.scss";
import SlickSlider from "../slider/slider.component";// Assuming your SlickSlider component exists

// Image Imports (Use paths relative to your assets)

import Banner1 from "../../assets/img/Banner1.jpeg";
import Banner2 from "../../assets/img/Banner2.jpeg";

const slides = [
  {
    city: 'RECLINER.REPAIR.NAIROBI',
    country: 'Before',
    img: Banner1,
  },
  {
    city: 'RECLINER.REPAIR.NAIROBI',
    country: 'After',
    img: Banner2,
  },
  {
    city: 'RECLINER.REPAIR.NAIROBI',
    country: 'Before',
    img: Banner1,
  },
  {
    city: 'RECLINER.REPAIR.NAIROBI',
    country: 'After',
    img: Banner2,
  },
];

const HeroBanner = () => {
  return (
    <>
    
      <CitiesSlider slides={slides}/>
    
      <div className="hero-wrapper">        
        <div className="hero">
          {/* Slick Slider */}
          <div className="hero__slider">
            <SlickSlider />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
