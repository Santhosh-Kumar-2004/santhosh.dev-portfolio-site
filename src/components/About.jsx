import { useEffect, useState } from "react";

export default function About() {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    companies: 0,
  });

  useEffect(() => {
    const targets = {
      experience: 2,   // change later if needed
      projects: 10,
      companies: 3,
    };

    const duration = 1200;
    const interval = 30;

    const increment = {
      experience: targets.experience / (duration / interval),
      projects: targets.projects / (duration / interval),
      companies: targets.companies / (duration / interval),
    };

    const timer = setInterval(() => {
      setCounts((prev) => ({
        experience:
          prev.experience < targets.experience
            ? Math.min(prev.experience + increment.experience, targets.experience)
            : prev.experience,

        projects:
          prev.projects < targets.projects
            ? Math.min(prev.projects + increment.projects, targets.projects)
            : prev.projects,

        companies:
          prev.companies < targets.companies
            ? Math.min(prev.companies + increment.companies, targets.companies)
            : prev.companies,
      }));
    }, interval);

    setTimeout(() => clearInterval(timer), duration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" aria-label="About me section">
      <div className="section-inner about-wrapper">
        {/* Heading */}
        <header className="about-header">
          <h2>A Bit About Me</h2>
        </header>

        {/* Story */}
        <div className="about-text">
          <p>
            I started my journey with a strong interest in building things
            that are both functional and visually clean. Over time, I moved
            deeper into full-stack development, where I enjoy designing
            scalable frontends and structuring codebases that are easy to
            maintain and evolve.
          </p>

          <p>
            I focus on creating modern web experiences with clarity,
            performance, and real-world usability in mind. I enjoy solving
            problems, refining user flows, and continuously improving how
            products feel and behave.
          </p>

          <p>
            Outside of development, I enjoy exploring tech tools, learning
            new concepts, and occasionally unwinding with movies or strategy
            games that challenge how I think.
          </p>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat-item">
            <h3>{Math.floor(counts.experience)}+</h3>
            <p>Years of Experience</p>
          </div>

          <div className="stat-item">
            <h3>{Math.floor(counts.projects)}+</h3>
            <p>Completed Projects</p>
          </div>

          <div className="stat-item">
            <h3>{Math.floor(counts.companies)}+</h3>
            <p>Companies Worked With</p>
          </div>
        </div>
      </div>
    </section>
  );
}
