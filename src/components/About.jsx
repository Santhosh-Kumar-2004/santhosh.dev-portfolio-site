import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import "../styles/About.css";

export default function About() {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    commits: 0,
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const targets = {
      experience: 1,
      projects: 20,
      commits: 4500, 
    };

    const duration = 1500;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounts({
        experience: Math.min(
          Math.floor(targets.experience * progress),
          targets.experience,
        ),
        projects: Math.min(
          Math.floor(targets.projects * progress),
          targets.projects,
        ),
        commits: Math.min(
          Math.floor(targets.commits * progress),
          targets.commits,
        ),
      });

      if (frame === totalFrames) clearInterval(timer);
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView]);

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

  const sideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-inner about-wrapper">
        {/* Left Side: Text & Content */}
        <motion.div
          className="about-main-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <header className="about-header">
            <motion.span className="section-subtitle" variants={itemVariants}>
              Discovery
            </motion.span>

            <motion.h2 className="section-title" variants={itemVariants}>
              A Bit About Me
            </motion.h2>
          </header>

          <div className="about-text">
            <motion.p variants={itemVariants}>
              I’m a Full-Stack Developer driven by the intersection of{" "}
              <strong>clean aesthetics</strong> and
              <strong> robust engineering</strong>. My journey started with a
              curiosity for how things work on the web, which evolved into a
              passion for building scalable applications that solve real-world
              problems.
            </motion.p>

            <motion.p variants={itemVariants}>
              I don’t just write code; I design systems. Whether it's crafting a
              pixel-perfect UI or structuring application logic, I focus on
              performance, maintainability, and user experience.
            </motion.p>
          </div>

          <motion.div className="about-info-box" variants={itemVariants}>
            <div className="info-item">
              <span className="info-label">Location</span>
              <span className="info-value">India</span>
            </div>

            <div className="info-item">
              <span className="info-label">Availability</span>
              <span className="info-value text-highlight">Open to Work</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Stats & Details */}
        <motion.div
          className="about-side-content"
          variants={sideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{counts.experience}+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>{counts.projects}+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="stat-card">
              <h3>{counts.commits}+</h3>
              <p>Code Commits on GitHub</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
