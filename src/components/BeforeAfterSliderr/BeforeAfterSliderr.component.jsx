import React, {useState, useRef } from "react";
import { InitPreviewAnimation } from "../../js/animations";

import "./BeforeAfterSliderr.styles.scss";
import { Link } from "react-router-dom";
import {
  imgChair,
  imgSofa,
  imgOtto,
} from "../../assets/assets";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySection } from "../../redux/directory/directory.selector";
 


const BeforeAfterSliderr = ({ beforeImage, afterImage, beforeAlt, afterAlt }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // start at the middle
  const sliderRef = useRef(null);

  const handleDrag = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="before-after-slider" ref={sliderRef} onMouseMove={handleDrag} onTouchMove={(e) => handleDrag(e.touches[0])}>
      <div className="image-container">
        <img src={beforeImage} alt={beforeAlt} />
        <div className="after-image" style={{ width: `${sliderPosition}%` }}>
          <img src={afterImage} alt={afterAlt} />
        </div>
        <div
          className="slider-handle"
          style={{ left: `${sliderPosition}%` }}
          onMouseDown={(e) => e.preventDefault()} // prevent image dragging
        >
          <div className="handle-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSliderr;


