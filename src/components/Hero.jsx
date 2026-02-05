import "../styles/Hero.css";
import { Link } from "react-scroll";
import HeroCard from "./HeroCard";

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Hero section">
      {/* Decorative background element */}
      <div className="hero-visual-bg"></div>
      
      <div className="section-inner hero-container">
        <p className="hero-eyebrow">Hi, I’m</p>

        <h1 className="hero-title">
          <span>Santhosh</span>
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
          <HeroCard />
        </div>
      </div>
    </section>
  );
}