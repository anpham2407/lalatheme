import React from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

export default function HomeSlider() {
  const [sliderRef, ] = useKeenSlider();

  return (
    <div className="keen-slider" ref={sliderRef}>
        <div className="keen-slider__slid">1</div>
        <div className="keen-slider__slide">2</div>
        <div className="keen-slider__slide">3</div>
    </div>
  );
}