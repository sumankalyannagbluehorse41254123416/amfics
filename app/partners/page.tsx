"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define testimonial interface
interface Testimonial {
  img: string;
  text: string;
  name: string;
}

// Partner images
const PARTNER_IMAGES = [
  "ADBERRY-Logo.png",
  "Logo.png",
  "auriseg.png",
  "alb.jpeg",
] as const;

// Sector ticker images
const SECTOR_IMAGES = [
  "partner_img.jpg",
  "partner_img2.jpg",
  "partner_img3.jpg",
  "partner_img4.jpg",
  "partner_img5.jpg",
  "partner_img6.jpg",
] as const;

// Testimonials data
const TESTIMONIALS: Testimonial[] = [
  {
    img: "team.jpg",
    text: `I had the pleasure of working with Amfics on a cyber security project for my business, and I was thoroughly impressed with their expertise and professionalism. Their team provided top-notch solutions and guidance throughout the entire process, and they were always available to answer any questions or concerns that I had. Thanks to Zeroiz, my business is now more secure and protected than ever before. I highly recommend their services to anyone looking for reliable and effective cyber security solutions.`,
    name: "John Smith",
  },
  {
    img: "team2.jpg",
    text: `I recently used Amfics's services for a cyber security audit, and I was blown away by their attention to detail and comprehensive approach. The team took the time to thoroughly assess my company's vulnerabilities and provided a detailed report with actionable steps to improve our security posture. The entire process was smooth and hassle-free, and the team was incredibly responsive and helpful throughout. I highly recommend Zeroiz to anyone looking for a reliable and effective cyber security partner.`,
    name: "Sarah Lee",
  },
  {
    img: "team3.jpg",
    text: `As a small business owner, I was concerned about the security of my company's data and assets. I reached out to Amfics for their cyber security services, and I couldn't be happier with the results. Their team was able to identify potential vulnerabilities and provided customized solutions that fit within my budget. I now have peace of mind knowing that my business is protected against cyber threats.`,
    name: "Andrew Nisbet",
  },
];

const PartnersPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = TESTIMONIALS.length;

  // Auto rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 3000);
    return () => clearInterval(interval);
  }, [total]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <>
      {/* Page Title */}
      <section
        className="page-title about_box"
        style={{
          backgroundImage:
            "url(https://amfics.io/images/background/about_us.jpg)",
        }}>
        <div className="auto-container about_title">
          <h1>Partners</h1>
          <span className="title_divider"></span>
        </div>
      </section>

      {/* Our Partners Section */}
      <section className="clients-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center client_text">
            <h3>Our Partners</h3>
            <div className="text"></div>
          </div>

          <div className="row client">
            {PARTNER_IMAGES.map((img, i) => (
              <div className="col-md-3" key={i}>
                <div className="client_img">
                  <Image
                    src={`https://amfics.io/images/clients/${img}`}
                    alt={`Partner ${i + 1}`}
                    width={300}
                    height={200}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Ticker Section */}
          <div className="ticker">
            <div className="news">
              <h3>Sectors we serve</h3>
              {React.createElement(
                "marquee",
                { behavior: "scroll", direction: "left" },
                SECTOR_IMAGES.map((img, i) => (
                  <Image
                    key={i}
                    src={`https://amfics.io/images/clients/${img}`}
                    alt={`Sector ${i + 1}`}
                    width={168}
                    height={115}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section — Pure React, no jQuery */}
      <section className="testimonial text-center">
        <div className="container">
          <div className="heading white-heading">Testimonial</div>

          {/* Carousel Inner */}
          <div className="carousel-inner" role="listbox">
            {TESTIMONIALS.map((testimonial, i) => (
              <div
                key={i}
                className={`carousel-item carousel_item_box ${
                  i === currentIndex ? "active" : ""
                }`}>
                <div className="testimonial4_slide">
                  <Image
                    src={`https://amfics.io/images/clients/${testimonial.img}`}
                    alt={testimonial.name}
                    width={150}
                    height={150}
                    className="img-circle img-responsive"
                  />
                  <p>{testimonial.text}</p>
                  <h4>{testimonial.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows — using your original classes */}
          <a
            className="carousel-control-prev pre_box"
            href="#testimonial4"
            onClick={(e) => {
              e.preventDefault();
              prev();
            }}
            role="button"
            aria-label="Previous testimonial">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a
            className="carousel-control-next pre_box"
            href="#testimonial4"
            onClick={(e) => {
              e.preventDefault();
              next();
            }}
            role="button"
            aria-label="Next testimonial">
            <i className="fas fa-chevron-right"></i>
          </a>

          {/* Indicator Dots — using your existing class */}
          <div className="testimonial4_indicators">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={i === currentIndex ? "active" : ""}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
