import "../styles/Hero.css";
import { Link } from "react-scroll";
import MagneticButton from "./MagneticButton.jsx";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Hero section">
      <div className="hero-visual-bg"></div>
      
      <div className="section-inner hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">Hi, I’m</p>

          {/* This name will hide on mobile because it's already on the ID card */}
          <h1 className="hero-title mobile-hide">
            <span>Santhosh Kumar V</span>
          </h1>

          <h2 className="hero-subtitle">
            Full-Stack Developer focused on building
            <span className="text-highlight"> clean, scalable, and user-centric</span> web applications.
          </h2>

          <p className="hero-description">
            I design and develop modern web experiences using React,
            JavaScript, and backend-friendly architectures — with
            a strong emphasis on performance and maintainability.
          </p>

          <div className="hero-actions">
            <MagneticButton>
              <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="hero-btn-primary"
            >
              View Projects
            </Link>
            </MagneticButton>

            <MagneticButton>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="hero-btn-secondary"
            >
              Get in Touch
            </Link>
            </MagneticButton>
          </div>
        </div>
        
        {/* The right side is kept empty for the ID card to hang into on Desktop */}
        <div className="hero-spacer"></div>
      </div>
    </section>
  );
}