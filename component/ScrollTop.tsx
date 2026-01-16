// "use client";

// import React from "react";
// import { FaChevronUp } from "react-icons/fa";

// const ScrollTop = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       className="scroll-to-top scroll-to-target"
//       onClick={scrollToTop}
//       style={{ display: "block", cursor: "pointer" }}>
//       {/* <span className="flaticon-arrow-up"></span> */}
//       <FaChevronUp />
//     </div>
//   );
// };

// export default ScrollTop;
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

  if (!show) return null; // 👈 top এ থাকলে hide

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
