import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio built with React and Vite.js. Focused on clean UI and smooth scrolling. Showcases projects, skills, and contact info with a sleek design. Perfect for developers looking to create a standout online presence.",
      tech: ["React", "Vite", "Framer Motion", "react-scroll", "react-icons"],
      github: "https://github.com/Santhosh-Kumar-2004/santhosh.dev-portfolio-site/",
      live: "https://santhosh-kumar-2004.github.io/santhosh.dev-portfolio-site/",
    },
    {
      title: "Full-Stack Auction Platform Web App",
      description:
        "Scalable Auction web application with a React frontend and API-driven backend using FastAPI. SQLlite database for data management, featuring real-time bidding and user authentication.",
      tech: ["React", "FastAPI", "REST APIs", "SQLite", "multilingual support", "KYC verification", "TOTP-based 2FA"],
      github: "https://github.com/Santhosh-Kumar-2004/agriport-ai-full-stack-auction-platform",
      live: "",
    },
    {
      title: "Python Data Engineering Pipeline",
      description:
        "End-to-end data engineering pipelines using Python and YAML configuration. Covers ingestion, validation, transformation, and loading with clean architecture.",
      tech: ["Python", "Pandas", "Jupyter", "Airflow", "YAML", "PostgreSQL", "ETL", "Data Validation"],
      github: "https://github.com/Santhosh-Kumar-2004/python-yaml-data-pipelines",
      live: "",
    },
    {
      title: "Identity Management System with React & FastAPI",
      description:
        "A full-stack User Management System built with React, FastAPI, MySQL, and JWT authentication. Includes user registration, login, roles, and secure access control.",
      tech: ["React", "FastAPI", "MySQL", "JWT", "Authentication", "User Management"],
      github: "https://github.com/Santhosh-Kumar-2004/identity-management-system-full-stack",
      live: "",
    },
    {
      title: "AI Scam & Fake News Detection System",
      description:
        "Detect scams & fake news using AI, Groq, Llama ML model, React, fast API and more. An user friendly Interface where user can provide inputs as text, image, & even in an voice note, The AI will undersatnd and lets you know detailed information about the Scam.",
      tech: ["React", "FastAPI", "Ollama", "Best UI/UX Award Winner", "AI model Integration", "Multiple Fake Detection Modalities"],
      github: "https://github.com/Santhosh-Kumar-2004/FakeAlertAI",
      live: "",
    },
    {
      title: "Real-Time Face Recognition System",
      description:
        "This project features a face recognition system using Python and the DeepFace library. It captures real-time video from a webcam, compares detected faces against a set of known images, and identifies individuals using pre-trained models like VGG-Face.",
      tech: ["Python", "DeepFace", "VGG-Face", "Real-time Video Processing", "Face Recognition", "OpenCV", "Face Detection"],
      github: "https://github.com/Santhosh-Kumar-2004/RealTime-FaceRecognition-Project",
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
