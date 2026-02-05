// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import idCardImage from "../assets/Santhosh.png";
import "../styles/DraggableID.css";

export default function DraggableID() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Card Tilt & Pendulum
  const rotateZ = useTransform(x, [-200, 200], [-15, 15]);
  const rotateX = useTransform(y, [-120, 120], [15, -15]);
  const rotateY = useTransform(x, [-120, 120], [-15, 15]);

  // Lanyard Physics
  const stringRotate = useTransform(x, [-200, 200], [-10, 10]);
  const stringHeight = useTransform(y, [-50, 200], [80, 200]);

  const handleDragEnd = () => {
    // Heavier snap-back with a slight bounce (mass: 1.2)
    animate(x, 0, { type: "spring", stiffness: 100, damping: 12, mass: 1.2 });
    animate(y, 0, { type: "spring", stiffness: 100, damping: 12, mass: 1.2 });
  };

  return (
    <div className="id-fixed-wrapper">
      <div className="lanyard-anchor">
        <motion.div 
          className="lanyard-string" 
          style={{ height: stringHeight, rotate: stringRotate, transformOrigin: "top center" }} 
        />
        {/* The metallic ring that connects string to card */}
        <motion.div 
          className="lanyard-ring"
          style={{ x, y, rotate: rotateZ }}
        />
      </div>

      <motion.div
        className="id-card-outer"
        drag
        dragMomentum={false}
        dragElastic={0.6}
        onDragEnd={handleDragEnd}
        style={{
          x,
          y,
          rotateZ,
          rotateX,
          rotateY,
          transformOrigin: "top center",
          perspective: 1200,
        }}
        whileTap={{ cursor: "grabbing", scale: 1.02 }}
      >
        <div className="id-card-body surface">
          <div className="id-full-image">
            <img src={idCardImage} alt="Santhosh" draggable={false} />
            <div className="image-gradient-overlay" />
          </div>

          <div className="id-card-content">
            <div className="id-header">
              <div className="clip-hole" />
              <div className="hologram-seal" /> {/* Realistic detail */}
            </div>

            <div className="id-footer">
              <span className="id-status-dot"></span>
              <h3 className="id-name">Santhosh</h3>
              <p className="id-role">Full Stack Developer</p>
            </div>
          </div>

          {/* This layer provides the plastic shine */}
          <div className="id-glass-glare" />
        </div>
      </motion.div>
    </div>
  );
}