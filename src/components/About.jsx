import { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import "../styles/About.css";

export default function About() {
  const [counts, setCounts] = useState({ experience: 0, projects: 0, companies: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const targets = { experience: 2, projects: 10, companies: 3 };
    const duration = 1500;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCounts({
        experience: Math.min(Math.floor(targets.experience * progress), targets.experience),
        projects: Math.min(Math.floor(targets.projects * progress), targets.projects),
        companies: Math.min(Math.floor(targets.companies * progress), targets.companies),
      });

      if (frame === totalFrames) clearInterval(timer);
    }, frameRate);

    return () => clearInterval(timer);
  }, [isInView]);

  const skillCategories = [
    { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Framer Motion"] },
    { title: "Backend", skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { title: "Tools", skills: ["Git", "Docker", "AWS", "Figma"] }
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="section-inner about-wrapper">
        
        {/* Left Side: Text & Content */}
        <div className="about-main-content">
          <header className="about-header">
            <span className="section-subtitle">Discovery</span>
            <h2 className="section-title">A Bit About Me</h2>
          </header>

          <div className="about-text">
            <p>
              I’m a Full-Stack Developer driven by the intersection of <strong>clean aesthetics</strong> and 
              <strong> robust engineering</strong>. My journey started with a curiosity for how things work on the web, 
              which evolved into a passion for building scalable applications that solve real-world problems.
            </p>
            <p>
              I don’t just write code; I design systems. Whether it's crafting a pixel-perfect UI or 
              structuring a complex database, I focus on performance, maintainability, and user experience.
            </p>
          </div>

          <div className="skills-container">
            {skillCategories.map((cat, index) => (
              <div key={index} className="skill-category">
                <h4>{cat.title}</h4>
                <div className="skill-tags">
                  {cat.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Stats & Details */}
        <div className="about-side-content">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{counts.experience}+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>{counts.projects}+</h3>
              <p>Projects Done</p>
            </div>
            <div className="stat-card">
              <h3>{counts.companies}+</h3>
              <p>Collaborations</p>
            </div>
          </div>

          <div className="about-info-box">
             <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">India</span>
             </div>
             <div className="info-item">
                <span className="info-label">Availability</span>
                <span className="info-value text-highlight">Open to Work</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}