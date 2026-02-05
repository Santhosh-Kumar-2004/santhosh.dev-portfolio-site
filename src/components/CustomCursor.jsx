import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useSpring, useMotionValue } from "framer-motion";
import "../styles/CustomCursor.css";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default");

  // Motion values for smooth inertia
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for the outer ring (the "lag" effect)
  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check for links/buttons
      if (target.closest("a, button, .hero-btn-primary, .hero-btn-secondary")) {
        setCursorType("pointer");
      } 
      // Check for the Draggable ID card
      else if (target.closest(".id-card-outer")) {
        setCursorType("grab");
      } 
      else {
        setCursorType("default");
      }
    };

    const handleMouseDown = () => setCursorType((prev) => (prev === "grab" ? "grabbing" : "click"));
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
    <div className="cursor-container">
      {/* Small dot - follows mouse instantly */}
      <motion.div
        className={`cursor-dot ${cursorType}`}
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />
      {/* Large ring - follows with spring physics */}
      <motion.div
        className={`cursor-ring ${cursorType}`}
        style={{
          x: ringX,
          y: ringY,
        }}
      />
    </div>
  );
}