// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import idCardImage from "../assets/Santhosh.png";
import "../styles/DraggableID.css";

export default function DraggableID() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Enhanced 3D Tilt
  const rotateX = useTransform(y, [-150, 150], [20, -20]);
  const rotateY = useTransform(x, [-150, 150], [-20, 20]);
  const rotateZ = useTransform(x, [-150, 150], [-10, 10]);

  return (
    <div className="id-fixed-wrapper">
      <div className="lanyard-anchor">
        <div className="lanyard-string" />
        <div className="lanyard-clip" />
      </div>

      <motion.div
        className="id-card-outer"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.8}
        style={{ x, y, rotateX, rotateY, rotateZ, perspective: 1200 }}
        whileTap={{ cursor: "grabbing" }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <div className="id-card-body surface">
          {/* Edge-to-edge background image */}
          <div className="id-full-image">
            <img src={idCardImage} alt="Santhosh" draggable={false} />
            <div className="image-gradient-overlay"></div>
          </div>
          
          {/* Content layered on top of image */}
          <div className="id-card-content">
            <div className="id-header">
              <div className="clip-hole"></div>
              <span className="id-tag">DEV ACCESS</span>
            </div>

            <div className="id-footer">
              <h3 className="id-name">Santhosh</h3>
              <p className="id-role">Full Stack Developer</p>
            </div>
          </div>

          {/* Glossy Plastic Reflection */}
          <div className="id-glass-glare"></div>
        </div>
      </motion.div>
    </div>
  );
}