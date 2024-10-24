import React from "react";
import { Link } from "react-router-dom";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

import CitiesSlider from "../furn/furn.component";
import "./SideBySideImages.styles.scss";
import SlickSlider from "../slider/slider.component";// Assuming your SlickSlider component exists


const SideBySideImages = ({ img1, img2, alt1, alt2, description }) => {
  return (
    <div className="side-by-side-images">
      <div className="image-container">
        <img src={img1} alt={alt1} loading="lazy" />
      </div>
      
      <div className="description-container">
        <p className="title__sub">
          <span>Don't throw your used recliners or imported sofas away!</span>
          Let us transform them for you and make them more comfortable than when you bought them. Recliner repairs in Nairobi include:
        </p>
        <ul className="service-list">
          <li>🛋️ Washing and Refilling</li>
          <li>🛠️ Refurbishing</li>
          <li>🪑 Refilling Only</li>
          <li>🎨 Cover Changing and Refilling</li>
          <li>🔧 Sofa Servicing and Mechanism Maintenance</li>
        </ul>
      </div>

      <div className="image-container">
        <img src={img2} alt={alt2} loading="lazy" />
      </div>
    </div>
  );
};



export default SideBySideImages;

