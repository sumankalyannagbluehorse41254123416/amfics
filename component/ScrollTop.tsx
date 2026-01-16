"use client";

import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;
  return (
    <div
      className="scroll-to-top scroll-to-target"
      onClick={scrollToTop}
      style={{ display: "block", cursor: "pointer" }}>
      <FaChevronUp />
    </div>
  );
};

export default ScrollTop;
