import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio built with React. Focused on clean UI, smooth scrolling, dark/light themes, and clear content hierarchy.",
      tech: ["React", "Vite", "CSS", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourdomain.com",
    },
    {
      title: "Full-Stack Web Application",
      description:
        "A scalable web application with a React frontend and API-driven backend. Designed with maintainability, performance, and clean architecture in mind.",
      tech: ["React", "FastAPI", "REST APIs"],
      github: "https://github.com/yourusername/fullstack-app",
      live: "",
    },
    {
      title: "Data Analysis Project",
      description:
        "Exploratory data analysis and visualization project focused on extracting insights from real-world datasets using Python-based tools.",
      tech: ["Python", "Pandas", "NumPy", "Jupyter"],
      github: "https://github.com/yourusername/data-analysis",
      live: "",
    },
  ];

  return (
    <section id="projects" aria-label="Projects section">
      <div className="section-inner projects-wrapper">
        {/* Header */}
        <header className="projects-header">
          <span className="section-subtitle">Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="projects-intro">
            A selection of projects that reflect my approach to problem-solving,
            system design, and user-focused development.
          </p>
        </header>

        {/* Projects List */}
        <div className="projects-list">
          {projects.map((project, index) => (
            <article key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <ul className="project-tech">
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
