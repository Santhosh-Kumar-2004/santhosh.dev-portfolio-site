// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import idCardImage from "../assets/Santhosh.webp";
import "../styles/DraggableID.css";

export default function DraggableID() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 1. CARD DYNAMICS: Physics logic untouched
  const rotateZ = useTransform(x, [-200, 200], [-20, 20]);
  const rotateX = useTransform(y, [-150, 150], [20, -20]);
  const rotateY = useTransform(x, [-150, 150], [-20, 20]);

  // 2. LANYARD PHYSICS: Physics logic untouched
  const stringRotate = useTransform(x, [-300, 300], [25, -25]);
  const stringHeight = useTransform(y, (v) => Math.max(250, 250 + v));
  const attachedX = useTransform(x, (v) => v);

  const handleDragEnd = () => {
    const springConfig = { type: "spring", stiffness: 120, damping: 15, mass: 1.5 };
    animate(x, 0, springConfig);
    animate(y, 0, springConfig);
  };

  return (
    <div className="id-fixed-wrapper">
      <div className="lanyard-anchor-point">
        <motion.div 
          className="lanyard-string-line" 
          style={{ 
            height: stringHeight, 
            x: attachedX,
            rotate: stringRotate,
            transformOrigin: "top center",
          }} 
        />
      </div>

      <motion.div
        className="id-card-outer"
        drag
        dragMomentum={false}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{
          x: attachedX,
          y,
          rotateZ,
          rotateX,
          rotateY,
          transformOrigin: "top center",
          perspective: 1200,
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="id-card-body surface">
          <div className="id-card-hook">
            <div className="hook-ring"></div>
          </div>

          <div className="id-full-image">
            <img src={idCardImage} alt="Santhosh" draggable={false} loading="lazy"/>
            <div className="image-gradient-overlay" />
          </div>

          <div className="id-card-content">
            <div className="id-header-meta">
              {/* <div className="hologram-seal" /> */}
            </div>

            <div className="id-footer">
              <h3 className="id-name">Santhosh</h3>
              <p className="id-role">Full Stack Developer</p>
            </div>
          </div>
          <div className="id-glass-glare" />
        </div>
      </motion.div>
    </div>
  );
}