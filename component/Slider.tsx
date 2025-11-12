// "use client";

// import { fetchAllBanners } from "@/lib/banner";
// import { useState, useEffect, useRef } from "react";

// interface BannerData {
//   id: number;
//   title: string;
//   description: string;
//   desktopImage: string;
// }

// const Slider: React.FC = () => {
//   const [slides, setSlides] = useState<BannerData[]>([]);
//   const [activeSlide, setActiveSlide] = useState<number>(0);
//   const [displayText, setDisplayText] = useState<string[]>([]);
//   const [isTyping, setIsTyping] = useState<boolean>(false);
//   const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     const getBanners = async () => {
//       try {
//         const res = await fetchAllBanners({ host: window.location.host });
//         console.log(
//           "Banner Data########################################: ",
//           res
//         );
//         if (res.status && Array.isArray(res.bannerData)) {
//           setSlides(res.bannerData);
//           setDisplayText(new Array(res.bannerData.length).fill(""));
//         } else {
//           console.warn("Unexpected banner response:", res);
//         }
//       } catch (err) {
//         console.error("Error fetching banners:", err);
//       }
//     };

//     getBanners();
//   }, []);

//   const clearTyping = () => {
//     if (typingTimeoutRef.current) {
//       clearTimeout(typingTimeoutRef.current);
//       typingTimeoutRef.current = null;
//     }
//   };

//   const startTyping = (slideIndex: number) => {
//     clearTyping();
//     setIsTyping(true);

//     const fullText =
//       slides[slideIndex]?.description?.replace(/<[^>]*>/g, "").trim() || "";
//     let currentIndex = 0;

//     const typeCharacter = () => {
//       if (currentIndex <= fullText.length) {
//         setDisplayText((prev) => {
//           const newTexts = [...prev];
//           newTexts[slideIndex] = fullText.substring(0, currentIndex);
//           return newTexts;
//         });
//         currentIndex++;
//         typingTimeoutRef.current = setTimeout(typeCharacter, 100);
//       } else {
//         setIsTyping(false);
//         typingTimeoutRef.current = null;
//       }
//     };

//     typeCharacter();
//   };

//   useEffect(() => {
//     if (slides.length === 0) return;
//     const interval = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 8000);
//     return () => clearInterval(interval);
//   }, [slides]);

//   useEffect(() => {
//     if (slides.length > 0) startTyping(activeSlide);
//   }, [activeSlide, slides]);

//   useEffect(() => {
//     return () => clearTyping();
//   }, []);

//   if (slides.length === 0) {
//     return (
//       <section className="slider-section text-center py-10">
//         <p>Loading banners...</p>
//       </section>
//     );
//   }

//   return (
//     <section className="slider-section">
//       <div id="carousel" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner" role="listbox">
//           {slides.map((slide, index) => (
//             <div
//               key={slide.id}
//               className={`carousel-item ${
//                 index === activeSlide ? "active" : ""
//               }`}
//               style={{
//                 backgroundImage: `url(${slide.desktopImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}>
//               <div className="carousel-caption d-md-block caption_text">
//                 <h2>
//                   <span style={{ display: "inline-block", minHeight: "1.2em" }}>
//                     {displayText[index]}
//                   </span>
//                   <span
//                     className="typed-cursor"
//                     aria-hidden="true"
//                     style={{
//                       opacity: index === activeSlide && isTyping ? 1 : 0,
//                       animation:
//                         index === activeSlide && isTyping
//                           ? "blink 1s infinite"
//                           : "none",
//                     }}></span>
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         <a
//           href="#carousel"
//           className="carousel-control-prev prev"
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
//           onClick={(e) => {
//             e.preventDefault();
//             setActiveSlide((prev) => (prev + 1) % slides.length);
//           }}>
//           <i className="fa fa-angle-right" aria-hidden="true"></i>
//         </a>
//       </div>

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
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

interface BannerData {
  id: number;
  title: string;
  description: string;
  desktopImage: string;
  collection?: string; // or
  banner?: boolean; // depends on your API response shape
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
        // console.log(
        //   "Banner Data########################################: ",
        //   res
        // );

        if (res.status && Array.isArray(res.bannerData)) {
          const filtered = res.bannerData.filter(
            (item: BannerData) =>
              item.collection === "banner" || item.banner === true
          );
          // console.log("Filtered Banners: ", filtered);
          const limited = filtered.slice(0, 3);
          // console.log("limited: ", limited);
          setSlides(limited);
          setDisplayText(new Array(limited.length).fill(""));
        } else {
          console.warn("Unexpected banner response:", res);
        }
      } catch (err) {
        console.error("Error fetching banners:", err);
      }
    };

    getBanners();
  }, []);

  const clearTyping = () => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
  };

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

  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides]);

  useEffect(() => {
    if (slides.length > 0) startTyping(activeSlide);
  }, [activeSlide, slides]);

  useEffect(() => {
    return () => clearTyping();
  }, []);

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
                    }}></span>
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <Link
          href="#carousel"
          className="carousel-control-prev prev"
          onClick={(e) => {
            e.preventDefault();
            setActiveSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            );
          }}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </Link>

        <Link
          href="#carousel"
          className="carousel-control-next next"
          onClick={(e) => {
            e.preventDefault();
            setActiveSlide((prev) => (prev + 1) % slides.length);
          }}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </Link>
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
