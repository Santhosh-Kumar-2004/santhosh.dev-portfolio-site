import { motion, useMotionValue, useTransform } from "framer-motion";
import idCardImage from "../assets/Santhosh.png";

export default function HeroCard() {
  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotate like a hanging pendulum
  const rotate = useTransform(x, [-120, 120], [-12, 12]);

  return (
    <div className="hero-id-wrapper">
      {/* Hanging string */}
      <div className="id-string" />

      {/* ID Card */}
      <motion.div
        className="hero-id-card"
        drag
        dragElastic={0.6}
        dragMomentum={false}
        style={{
          x,
          y,
          rotate,
        }}
        animate={{ x: 0, y: 0, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 18,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <img
          src={idCardImage}
          alt="ID Card"
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
