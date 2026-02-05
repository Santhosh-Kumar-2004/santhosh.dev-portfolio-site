// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker,
} from "react-icons/fa";
import {
  SiFastapi, SiMysql, SiMongodb, SiPostman, SiJupyter, SiVisualstudiocode, SiPandas, SiNumpy, SiScikitlearn, SiOpenai,
} from "react-icons/si";
import "../styles/Skills.css";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Vite", icon: <FaJs /> },
        { name: "Responsive UI", icon: <FaCss3Alt /> },
        { name: "Accessibility", icon: <FaHtml5 /> },
      ]
    },
    {
      title: "Backend & APIs",
      skills: [
        { name: "FastAPI", icon: <SiFastapi /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "REST APIs", icon: <FaDatabase /> },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "PostgreSQL", icon: <FaDatabase /> },
        { name: "DBeaver", icon: <FaDatabase /> },
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "Pandas", icon: <SiPandas /> },
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Jupyter", icon: <SiJupyter /> },
      ]
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "VS Code", icon: <SiVisualstudiocode /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AI Tools", icon: <SiOpenai /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-inner skills-wrapper">
        <motion.header 
          className="skills-header"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">My Tech Stack</h2>
          <div className="header-line"></div>
        </motion.header>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((cat, idx) => (
            <motion.div key={idx} className="skill-card" variants={cardVariants}>
              <div className="card-indicator"></div>
              <h3>{cat.title}</h3>
              <div className="skill-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx}>
                    <i className="skill-icon">{skill.icon}</i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Special Interest Card */}
          <motion.div className="skill-card highlight" variants={cardVariants}>
             <div className="card-indicator"></div>
             <h3>Future Focus</h3>
             <div className="skill-list">
                <span>Data Science</span>
                <span>Machine Learning</span>
                <span>Generative AI</span>
                <span>Neural Networks</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}