import "../styles/Hero.css";
import { Link } from "react-scroll";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero section">
      <div className="hero-visual-bg"></div>

      <div className="section-inner hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="hero-eyebrow" variants={itemVariants}>
            Hi, I’m
          </motion.p>

          {/* This name will hide on mobile because it's already on the ID card */}
          <motion.h1 className="hero-title mobile-hide" variants={itemVariants}>
            <span>Santhosh Kumar V</span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            Full-Stack Developer focused on building
            <span className="text-highlight">
              {" "}
              clean, scalable, and user-centric
            </span>{" "}
            web applications.
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            I design and develop modern web experiences using React, JavaScript,
            and backend-friendly architectures — with a strong emphasis on
            performance and maintainability.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
              <Link
                to="projects"
                smooth={true}
                duration={600}
                offset={-80}
                className="hero-btn-primary"
              >
                View Projects
              </Link>

              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="hero-btn-secondary"
              >
                Get in Touch
              </Link>
          </motion.div>
        </motion.div>

        {/* The right side is kept empty for the ID card to hang into on Desktop */}
        <div className="hero-spacer"></div>
      </div>
    </section>
  );
}
