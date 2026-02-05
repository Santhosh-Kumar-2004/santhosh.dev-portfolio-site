import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio built with React. Focused on clean UI and smooth scrolling.",
      tech: ["React", "Vite", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://yourdomain.com",
    },
    {
      title: "Full-Stack Web App",
      description:
        "Scalable web application with a React frontend and API-driven backend using FastAPI.",
      tech: ["React", "FastAPI", "REST APIs"],
      github: "https://github.com/yourusername/fullstack-app",
      live: "",
    },
    {
      title: "Data Analysis",
      description:
        "Exploratory data analysis project focused on insights from real-world datasets using Python.",
      tech: ["Python", "Pandas", "Jupyter"],
      github: "https://github.com/yourusername/data-analysis",
      live: "",
    },
  ];

  // Double the projects to create the infinite loop effect
  const infiniteProjects = [...projects, ...projects];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const carouselVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.15 },
    },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-inner">
        <motion.header
          className="projects-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Work</span>
          <h2 className="section-title">Projects</h2>
          <div className="header-line"></div>
        </motion.header>

        <motion.div
  className="carousel-container"
  variants={carouselVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
          <div className="carousel-track">
            {infiniteProjects.map((project, index) => (
              <article key={index} className="project-card">
                <div className="project-card-inner">
                  <div className="project-top">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <ul className="project-tech">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
