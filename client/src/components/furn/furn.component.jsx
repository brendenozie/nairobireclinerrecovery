
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./furn-section.styles.scss";

import WhatsAppCTA from "../whatsapp-call-action/WhatsAppCTA.component";


const CitiesSlider = ({ slides = [] }) => {
  const IMAGE_PARTS = 4;
  const AUTOCHANGE_TIME = 4000;
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);

  useEffect(() => {
    const runAutochangeTO = () => {
      const changeTO = setTimeout(() => {
        changeSlides(1);
      }, AUTOCHANGE_TIME);

      return () => clearTimeout(changeTO);
    };

    runAutochangeTO();
    setSliderReady(true);

    return () => {
      clearTimeout(runAutochangeTO);
    };
  }, [activeSlide]);

  const changeSlides = (change) => {
    const length = slides.length;
    const newPrevSlide = activeSlide;
    let newActiveSlide = activeSlide + change;
    if (newActiveSlide < 0) newActiveSlide = length - 1;
    if (newActiveSlide >= length) newActiveSlide = 0;
    setPrevSlide(newPrevSlide);
    setActiveSlide(newActiveSlide);
  };

  if (!slides || slides.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <div className={`slider ${sliderReady ? "s--ready" : ""}`}>
      <p className="slider__top-heading"></p>
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={`slider__slide ${activeSlide === index ? "s--active" : ""} ${prevSlide === index ? "s--prev" : ""}`}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
              <h2 className="slider__slide-heading">
                {slide.city.split("").map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              {/* <Link to="/collections" >
                Discover Our Collections
              </Link> */}
              <WhatsAppCTA  className="slider__slide-readmore"
                phoneNumber="+254799571567"
                message="Hello, I would like to inquire about your services."
              />
            </div>
            <div className="slider__slide-parts">
              {Array.from({ length: IMAGE_PARTS }).map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
    </div>
  );
};


export default CitiesSlider;