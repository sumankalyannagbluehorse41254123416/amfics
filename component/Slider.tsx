"use client";
import { useState, useEffect } from "react";

interface Slide {
  image: string;
  text: string;
  autotypeClass: string;
}

const Slider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(2); // Starting with slide 2 active to match original

  const slides: Slide[] = [
    {
      image: "https://amfics.io/images/main-slider/cyber.jpg",
      text: "Beyond Passwords: Exploring the Latest Authentica",
      autotypeClass: "autotype"
    },
    {
      image: "https://amfics.io/images/main-slider/cyber2.jpg",
      text: "Beyond Passwords: Exploring the Latest Authenti",
      autotypeClass: "autotype2"
    },
    {
      image: "https://amfics.io/images/main-slider/cyber3.jpg",
      text: "Beyond Passwords: Exploring the Latest Authenticatio",
      autotypeClass: "autotype3"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="slider-section">
      <div id="carousel" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ol className="carousel-indicators slider_dot">
          {slides.map((_, index) => (
            <li 
              key={index}
              data-target="#carousel" 
              data-slide-to={index}
              className={index === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(index)}
            ></li>
          ))}
        </ol>
        {/* End of Indicators */}

        {/* Carousel Content */}
        <div className="carousel-inner" role="listbox">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeSlide ? "active" : ""}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-caption d-md-block caption_text">
                <h2>
                  <span className={slide.autotypeClass}>{slide.text}</span>
                  <span className="typed-cursor" aria-hidden="true">|</span>
                  <span className="typed-cursor" aria-hidden="true"></span>
                </h2>
              </div>
            </div>
          ))}
        </div>
        {/* End of Carousel Content */}

        {/* Previous & Next */}
        <a 
          href="#carousel" 
          className="carousel-control-prev prev" 
          role="button" 
          data-slide="prev"
          onClick={(e) => {
            e.preventDefault();
            setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
          }}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
        <a 
          href="#carousel" 
          className="carousel-control-next next" 
          role="button" 
          data-slide="next"
          onClick={(e) => {
            e.preventDefault();
            setActiveSlide((prev) => (prev + 1) % slides.length);
          }}
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>
      {/* End of Carousel */}
    </section>
  );
};

export default Slider;