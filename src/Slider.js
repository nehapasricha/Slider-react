import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="style-slider">
      <FaChevronLeft className="left-arrow" onClick={prevSlide} />
      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && <img src={slide.image} alt="" />}
          </div>
        );
      })}
      <FaChevronRight className="right-arrow" onClick={nextSlide} />
    </div>
  );
};

export default Slider;
