// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from "framer-motion";
import idCardImage from "../assets/Santhosh.png";
import "../styles/DraggableID.css";

export default function DraggableID() {
  // Motion values for tracking position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // 3D Tilt and Pendulum rotation based on movement
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const rotateZ = useTransform(x, [-120, 120], [-8, 8]);

  return (
    <div className="id-fixed-wrapper">
      {/* The "Anchor" point where the string is attached */}
      <div className="id-anchor">
        <div className="id-string" />
      </div>

      <motion.div
        className="id-card-container"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Returns to center
        dragElastic={0.7}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          rotateZ,
          perspective: 1000,
        }}
        whileTap={{ cursor: "grabbing", scale: 1.05 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 12,
        }}
      >
        <div className="id-card-content surface">
          <div className="id-photo-slot">
            <img src={idCardImage} alt="Santhosh" draggable={false} />
          </div>
          
          <div className="id-info">
            <h3 className="id-name">Santhosh</h3>
            <p className="id-role">Full Stack Developer</p>
          </div>

          <div className="id-barcode"></div>
        </div>
      </motion.div>
    </div>
  );
}