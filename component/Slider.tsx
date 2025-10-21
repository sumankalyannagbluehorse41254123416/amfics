// "use client";
// import { useState, useEffect, useRef } from "react";

// interface Slide {
//   image: string;
//   text: string;
//   autotypeClass: string;
// }

// const Slider: React.FC = () => {
//   const [activeSlide, setActiveSlide] = useState<number>(2);
//   const [displayText, setDisplayText] = useState<string[]>(["", "", ""]);
//   const [isTyping, setIsTyping] = useState<boolean>(false);
//   const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const slides: Slide[] = [
//     {
//       image: "https://amfics.io/images/main-slider/cyber.jpg",
//       text: "Beyond Passwords: Exploring the Latest Authentication Methods and Best Practices 1",
//       autotypeClass: "autotype",
//     },
//     {
//       image: "https://amfics.io/images/main-slider/cyber2.jpg",
//       text: "Beyond Passwords: Exploring the Latest Authentication Methods and Best Practices 2",
//       autotypeClass: "autotype2",
//     },
//     {
//       image: "https://amfics.io/images/main-slider/cyber3.jpg",
//       text: "Beyond Passwords: Exploring the Latest Authentication Methods and Best Practices 3",
//       autotypeClass: "autotype3",
//     },
//   ];

//   // Clear typing timeout
//   const clearTyping = () => {
//     if (typingTimeoutRef.current) {
//       clearTimeout(typingTimeoutRef.current);
//       typingTimeoutRef.current = null;
//     }
//   };

//   // Start typing animation for active slide
//   const startTyping = (slideIndex: number) => {
//     clearTyping();
//     setIsTyping(true);

//     const fullText = slides[slideIndex].text;
//     let currentIndex = 0;

//     const typeCharacter = () => {
//       if (currentIndex <= fullText.length) {
//         const newDisplayText = [...displayText];
//         newDisplayText[slideIndex] = fullText.substring(0, currentIndex);
//         setDisplayText(newDisplayText);
//         currentIndex++;

//         // Reduced speed: 150ms per character instead of 50ms
//         typingTimeoutRef.current = setTimeout(typeCharacter, 150);
//       } else {
//         setIsTyping(false);
//         typingTimeoutRef.current = null;
//       }
//     };

//     // Start typing
//     typeCharacter();
//   };

//   // Auto slide change
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 10000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Trigger typing when active slide changes
//   useEffect(() => {
//     startTyping(activeSlide);
//   }, [activeSlide]);

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => clearTyping();
//   }, []);

//   return (
//     <section className="slider-section">
//       <div id="carousel" className="carousel slide" data-ride="carousel">
//         {/* Indicators */}
//         {/* <ol className="carousel-indicators slider_dot">
//           {slides.map((_, index) => (
//             <li
//               key={index}
//               data-target="#carousel"
//               data-slide-to={index}
//               className={index === activeSlide ? "active" : ""}
//               onClick={() => setActiveSlide(index)}
//             ></li>
//           ))}
//         </ol> */}

//         {/* Carousel Content */}
//         <div className="carousel-inner" role="listbox">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 index === activeSlide ? "active" : ""
//               }`}
//               style={{ backgroundImage: `url(${slide.image})` }}>
//               <div className="carousel-caption d-md-block caption_text">
//                 <h2>
//                   <span
//                     className={slide.autotypeClass}
//                     style={{
//                       // Ensure full width is available for text
//                       display: "inline-block",
//                       minHeight: "1.2em",
//                     }}>
//                     {displayText[index]}
//                   </span>
//                   <span
//                     className="typed-cursor"
//                     aria-hidden="true"
//                     style={{
//                       // Show cursor only when typing is in progress
//                       opacity: index === activeSlide && isTyping ? 1 : 0,
//                       animation:
//                         index === activeSlide && isTyping
//                           ? "blink 1s infinite"
//                           : "none",
//                     }}>
//                     |
//                   </span>
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Previous & Next */}
//         <a
//           href="#carousel"
//           className="carousel-control-prev prev"
//           role="button"
//           data-slide="prev"
//           onClick={(e) => {
//             e.preventDefault();
//             setActiveSlide(
//               (prev) => (prev - 1 + slides.length) % slides.length
//             );
//           }}>
//           <i className="fa fa-angle-left" aria-hidden="true"></i>
//         </a>
//         <a
//           href="#carousel"
//           className="carousel-control-next next"
//           role="button"
//           data-slide="next"
//           onClick={(e) => {
//             e.preventDefault();
//             setActiveSlide((prev) => (prev + 1) % slides.length);
//           }}>
//           <i className="fa fa-angle-right" aria-hidden="true"></i>
//         </a>
//       </div>

//       {/* Add blink animation for cursor */}
//       <style jsx>{`
//         @keyframes blink {
//           0%,
//           50% {
//             opacity: 1;
//           }
//           51%,
//           100% {
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Slider;

"use client";

import { fetchAllBanners } from "@/lib/banner";
import { useState, useEffect, useRef } from "react";

interface BannerData {
  id: number;
  title: string;
  description: string;
  desktopImage: string;
}

const Slider: React.FC = () => {
  const [slides, setSlides] = useState<BannerData[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const res = await fetchAllBanners({ host: window.location.host });
        if (res.status && Array.isArray(res.bannerData)) {
          setSlides(res.bannerData);
          setDisplayText(new Array(res.bannerData.length).fill(""));
        } else {
          console.warn("Unexpected banner response:", res);
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };

    getBanners();
  }, []);

  // ✅ Clear any ongoing typing animation
  const clearTyping = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
  };

  // ✅ Start typing animation for the current slide
  const startTyping = (slideIndex: number) => {
    clearTyping();
    setIsTyping(true);

    const fullText =
      slides[slideIndex]?.description?.replace(/<[^>]*>/g, "").trim() || "";
    let currentIndex = 0;

    const typeCharacter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText((prev) => {
          const newTexts = [...prev];
          newTexts[slideIndex] = fullText.substring(0, currentIndex);
          return newTexts;
        });
        currentIndex++;
        typingTimeoutRef.current = setTimeout(typeCharacter, 100);
      } else {
        setIsTyping(false);
        typingTimeoutRef.current = null;
      }
    };

    typeCharacter();
  };

  // ✅ Auto change slides every 8s
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides]);

  // ✅ Trigger typing when active slide changes
  useEffect(() => {
    if (slides.length > 0) startTyping(activeSlide);
  }, [activeSlide, slides]);

  // ✅ Cleanup when component unmounts
  useEffect(() => {
    return () => clearTyping();
  }, []);

  // 🌀 Loading state
  if (slides.length === 0) {
    return (
      <section className="slider-section text-center py-10">
        <p>Loading banners...</p>
      </section>
    );
  }

  return (
    <section className="slider-section">
      <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${
                index === activeSlide ? "active" : ""
              }`}
              style={{
                backgroundImage: `url(${slide.desktopImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="carousel-caption d-md-block caption_text">
                <h2>
                  <span style={{ display: "inline-block", minHeight: "1.2em" }}>
                    {displayText[index]}
                  </span>
                  <span
                    className="typed-cursor"
                    aria-hidden="true"
                    style={{
                      opacity: index === activeSlide && isTyping ? 1 : 0,
                      animation:
                        index === activeSlide && isTyping
                          ? "blink 1s infinite"
                          : "none",
                    }}>
                    |
                  </span>
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <a
          href="#carousel"
          className="carousel-control-prev prev"
          onClick={(e) => {
            e.preventDefault();
            setActiveSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            );
          }}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>

        <a
          href="#carousel"
          className="carousel-control-next next"
          onClick={(e) => {
            e.preventDefault();
            setActiveSlide((prev) => (prev + 1) % slides.length);
          }}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Slider;
