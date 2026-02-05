// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
// import { useState } from "react";

export default function HeroCard() {
  // Drag values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate based on drag
  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  // Shadow reacts to drag
  const boxShadow = useTransform(
    [x, y],
    ([latestX, latestY]) =>
      `${-latestX / 5}px ${-latestY / 5}px 40px rgba(220, 38, 38, 0.35)`
  );

  return (
    <Parallax speed={-10}>
      <motion.div
        drag
        dragElastic={0.4}
        dragMomentum={false}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          boxShadow,
        }}
        whileTap={{ cursor: "grabbing" }}
        animate={{ x: 0, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className="hero-id-card"
      >
        <div className="id-card-inner">
          <p className="id-eyebrow">Developer ID</p>
          <h3>Santhosh</h3>
          <span>Full-Stack Developer</span>
        </div>
      </motion.div>
    </Parallax>
  );
}
