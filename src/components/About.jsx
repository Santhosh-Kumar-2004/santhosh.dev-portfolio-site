export default function About() {
  return (
    <section id="about" aria-label="About me section">
      <div className="section-inner about-container">
        {/* Section heading */}
        <header className="about-header">
          <h2>About Me</h2>
          <p className="about-intro">
            A short glimpse into who I am and how I approach building software.
          </p>
        </header>

        {/* Content */}
        <div className="about-content">
          <p>
            I’m a developer who enjoys turning complex problems into
            clean, intuitive, and scalable solutions. My focus is not just
            on writing code that works, but on creating systems that are
            easy to understand, maintain, and evolve over time.
          </p>

          <p>
            I care deeply about structure, clarity, and user experience.
            Whether it’s designing a smooth interface or organizing code
            in a way that makes future changes effortless, I believe good
            software should feel natural both for users and developers.
          </p>

          <p>
            I primarily work with modern web technologies and enjoy
            building applications that balance performance, aesthetics,
            and real-world usability.
          </p>
        </div>
      </div>
    </section>
  );
}
