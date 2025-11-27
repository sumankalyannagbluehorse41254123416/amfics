"use client";
import { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {
    function initScrollAnimations() {
      const textElements = document.querySelectorAll(".soc_fade_text");
      const imgElements = document.querySelectorAll(".soc_fade_img");

      function checkVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        textElements.forEach((el: any) => {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          const bottom = top + rect.height;

          if (bottom > scrollY && top < scrollY + windowHeight) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          } else {
            el.style.opacity = "0";
            el.style.transform = "translateX(-100px)";
          }
        });

        imgElements.forEach((el: any) => {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          const bottom = top + rect.height;

          if (bottom > scrollY && top < scrollY + windowHeight) {
            el.style.opacity = "1";
            el.style.transform = "translateX(0)";
          } else {
            el.style.opacity = "0";
            el.style.transform = "translateX(100px)";
          }
        });
      }

      textElements.forEach((el: any) => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "0";
        el.style.transform = "translateX(-100px)";
      });

      imgElements.forEach((el: any) => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "0";
        el.style.transform = "translateX(100px)";
      });

      checkVisibility();
      window.addEventListener("scroll", checkVisibility);
      window.addEventListener("resize", checkVisibility);

      return () => {
        window.removeEventListener("scroll", checkVisibility);
        window.removeEventListener("resize", checkVisibility);
      };
    }

    initScrollAnimations();
  }, []);

  return null;
}
