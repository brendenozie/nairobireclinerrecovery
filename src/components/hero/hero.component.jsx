import React from "react";
import { Link } from "react-router-dom";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import CitiesSlider from "../furn/furn.component";
import "./hero-section.styles.scss";
import SlickSlider from "../slider/slider.component";// Assuming your SlickSlider component exists

// Image Imports (Use paths relative to your assets)
import BeforeImage1 from "../../assets/img/1br.jpeg";
import AfterImage2 from "../../assets/img/2br.jpeg";
import BeforeImage5 from "../../assets/img/5br.jpeg";
import AfterImage6 from "../../assets/img/6br.jpeg";
import BeforeImage7 from "../../assets/img/7br.jpeg";
import AfterImage8 from "../../assets/img/8br.jpeg";
import BeforeImage9 from "../../assets/img/9br.jpeg";
import AfterImage10 from "../../assets/img/10br.jpeg";
import BeforeImage11 from "../../assets/img/11br.jpeg";
import AfterImage12 from "../../assets/img/12br.jpeg";
import BeforeImage13 from "../../assets/img/13br.jpeg";
import AfterImage14 from "../../assets/img/14br.jpeg";
import BeforeImage15 from "../../assets/img/15br.jpeg";
import AfterImage16 from "../../assets/img/16br.jpeg";

const slides = [
  {
    city: 'Nairobi Recliners and Recovery',
    country: 'Before',
    img: BeforeImage11,
  },
  {
    city: 'Nairobi Recliners and Recovery',
    country: 'After',
    img: AfterImage12,
  },
  {
    city: 'Nairobi Recliners and Recovery',
    country: 'Before',
    img: BeforeImage11,
  },
  {
    city: 'Nairobi Recliners and Recovery',
    country: 'After',
    img: AfterImage12,
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
