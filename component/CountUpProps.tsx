
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ value, duration = 1500 }) => {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const numericValue = value.replace(/[^0-9.]/g, "");
    const endValue = parseFloat(numericValue);

    // 2️⃣ If not a number → show original text
    if (isNaN(endValue)) {
      ref.current.innerText = value;
      return;
    }

    const prefix = value.includes("$") ? "$ " : "";
    const suffix = value.includes("%")
      ? "%"
      : value.toUpperCase().includes("M")
      ? "M"
      : "";

    let start = 0;
    const steps = 60;
    const increment = endValue / steps;
    const intervalTime = duration / steps;

    const counter = setInterval(() => {
      start += increment;

      if (start >= endValue) {
        ref.current!.innerText = `${prefix}${endValue}${suffix}`;
        clearInterval(counter);
      } else {
        const display =
          suffix === "M" ? start.toFixed(2) : Math.floor(start);
        ref.current!.innerText = `${prefix}${display}${suffix}`;
      }
    }, intervalTime);

    return () => clearInterval(counter);
  }, [value, duration]);

  return (
    <span ref={ref} className="count-text">
      0
    </span>
  );
};

export default CountUp;
