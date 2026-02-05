import { useEffect, useState } from "react";
import "../styles/CustomCursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addActive = () => setIsActive(true);
    const removeActive = () => setIsActive(false);

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addActive);
      el.addEventListener("mouseleave", removeActive);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isActive ? "active" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
      <div
        className={`cursor-ring ${isActive ? "active" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}
