// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from "framer-motion";
import "../styles/ScrollProgress.css";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // This makes the scroll movement smooth rather than robotic
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
      {/* A secondary faint glow layer for extra "pop" */}
      <motion.div className="scroll-progress-glow" style={{ scaleX }} />
    </>
  );
}