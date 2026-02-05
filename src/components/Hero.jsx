import { Link } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" aria-label="Hero section">
      <div className="section-inner hero-container">
        {/* Intro line */}
        <p className="hero-eyebrow">
          Hi, I’m
        </p>

        {/* Name */}
        <h1 className="hero-title">
          Santhosh
        </h1>

        {/* Role / Value proposition */}
        <h2 className="hero-subtitle">
          Full-Stack Developer focused on building
          <br />
          clean, scalable, and user-centric web applications
        </h2>

        {/* Short description */}
        <p className="hero-description">
          I design and develop modern web experiences using React,
          JavaScript, and backend-friendly architectures — with
          a strong emphasis on performance, clarity, and maintainability.
        </p>

        {/* Call to actions */}
        <div className="hero-actions">
          <Link
            to="projects"
            smooth={true}
            duration={600}
            offset={-80}
            className="btn hero-primary"
          >
            View Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="hero-secondary"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
