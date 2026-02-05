import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "framer-motion";
import "../styles/CustomCursor.css";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for that "fluid" following feel
  const springConfig = { stiffness: 450, damping: 35, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest("a, button, .hero-btn-primary, .hero-btn-secondary")) {
        setCursorType("pointer");
      } else if (target.closest(".id-card-outer")) {
        setCursorType("grab");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseDown = () => setCursorType("clicking");
    const handleMouseUp = () => setCursorType("default");

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={`custom-cursor-wrapper ${cursorType}`}
      style={{
        x: smoothX,
        y: smoothY,
      }}
    >
      <div className="cursor-symbol">
        {"</>"}
      </div>
      <div className="cursor-glow" />
    </motion.div>
  );
}