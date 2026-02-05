// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function HeroCard() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.3}
      whileTap={{ scale: 1.05 }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="hero-card"
    >
      {/* Replace this with your card design */}
      <div className="card-content">
        <h3>Santhosh</h3>
        <p>Full-Stack Developer</p>
      </div>
    </motion.div>
  );
}
