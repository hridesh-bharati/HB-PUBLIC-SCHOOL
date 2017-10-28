import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FadeSlider.css";

export default function FadeSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  const baseUrl = "/img";
  const slides = ["slider1.webp", "slider2.jpg", "slider3.jpg"];

  return (
    <div className="fade-slider-container" style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((img, i) => (
          <div key={i}>
            <img
              src={`${baseUrl}/${img}`}
              alt={`slide-${i}`}
              className="fade-slider-img"
            />
          </div>
        ))}
      </Slider>
      <div className="container text-center fade-heroText ">
        <h4 className="fw-bolder">
          Best online education service In the world
        </h4>
        <h1 className="fw-bolder text-dark">One Step Ahead This Season</h1>
        <button
          type="button"
          className="btn btn-primary btn-lg m-3 rounded-0"
        >
          Learn More
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg m-3 rounded-0"
        >
          See Course
        </button>
      </div>
    </div>
  );
}
