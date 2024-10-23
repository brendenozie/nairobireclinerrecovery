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
        <img src={img1} alt={alt1} loading="lazy"/>
      </div>
      <div className="description-container">
        <p className="title__sub"><span>The image on the left shows the original state before the transformation, while the image on the right highlights the final result after the process.</span> Notice the improvements in clarity, color vibrance, and overall composition.</p>
      </div>
      <div className="image-container">
        <img src={img2} alt={alt2} loading="lazy"/>
      </div>
    </div>
  );
};

export default SideBySideImages;

