// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import idCardImage from "../assets/Santhosh.png";
import "../styles/DraggableID.css";

export default function DraggableID() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 1. CARD DYNAMICS: How the card tilts when moved
  const rotateZ = useTransform(x, [-200, 200], [-20, 20]);
  const rotateX = useTransform(y, [-150, 150], [20, -20]);
  const rotateY = useTransform(x, [-150, 150], [-20, 20]);

  // 2. LANYARD PHYSICS: String follows the card precisely
  // We calculate the rotation of the string based on horizontal displacement
  const stringRotate = useTransform(x, [-300, 300], [25, -25]);
  
  // String height adjusts to vertical drag to maintain the "attached" look
  const stringHeight = useTransform(y, (v) => Math.max(100, 100 + v));


  const handleDragEnd = () => {
    // Snap back with "High Mass" physics for a realistic heavy-object swing
    const springConfig = { type: "spring", stiffness: 120, damping: 15, mass: 1.5 };
    animate(x, 0, springConfig);
    animate(y, 0, springConfig);
  };

  return (
    <div className="id-fixed-wrapper">
      {/* THE ANCHOR: Fixed point at the top of the screen */}
      <div className="lanyard-anchor-point">
        <motion.div 
          className="lanyard-string-line" 
          style={{ 
            height: stringHeight, 
            rotate: stringRotate,
            transformOrigin: "top center" 
          }} 
        />
      </div>

      {/* THE CARD: The draggable physical object */}
      <motion.div
        className="id-card-outer"
        drag
        dragMomentum={false}
        dragElastic={0.2} // Low elastic makes the string tension feel real
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
        whileTap={{ cursor: "grabbing" }}
      >
        <div className="id-card-body surface">
          {/* Card Clip Hook */}
          <div className="id-card-hook">
            <div className="hook-ring"></div>
          </div>

          <div className="id-full-image">
            <img src={idCardImage} alt="Santhosh" draggable={false} />
            <div className="image-gradient-overlay" />
          </div>

          <div className="id-card-content">
            <div className="id-header-meta">
              <span className="id-serial">#2026-SR-01</span>
              <div className="hologram-seal" />
            </div>

            <div className="id-footer">
              <div className="status-container">
                <span className="status-dot"></span>
                <span className="status-text">SYSTEM ACTIVE</span>
              </div>
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