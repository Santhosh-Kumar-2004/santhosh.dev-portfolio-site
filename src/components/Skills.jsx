import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiJupyter,
  SiVisualstudiocode,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiOpenai,
} from "react-icons/si";

import "../styles/Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-inner skills-wrapper">
        {/* Header */}
        <header className="skills-header">
          <span className="section-subtitle">Expertise</span>
          <h2 className="section-title">My Tech Stack</h2>
          <p className="skills-description">
            Technologies and tools I actively use to design, build, and
            experiment with modern software solutions.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="skills-grid">
          {/* Languages */}
          <div className="skill-card">
            <h3>💻 Languages</h3>
            <div className="skill-list">
              <span><FaPython /> Python</span>
              <span><FaJs /> JavaScript</span>
              <span><FaDatabase /> SQL</span>
              <span><FaHtml5 /> HTML5</span>
              <span><FaCss3Alt /> CSS3</span>
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-card">
            <h3>🎨 Frontend</h3>
            <div className="skill-list">
              <span><FaReact /> React</span>
              <span><FaJs /> Vite</span>
              <span><FaCss3Alt /> Responsive UI</span>
              <span><FaHtml5 /> Accessibility</span>
            </div>
          </div>

          {/* Backend & APIs */}
          <div className="skill-card">
            <h3>⚙️ Backend & APIs</h3>
            <div className="skill-list">
              <span><SiFastapi /> FastAPI</span>
              <span><FaNodeJs /> Node.js</span>
              <span><SiPostman /> Postman</span>
              <span><FaDatabase /> REST APIs</span>
            </div>
          </div>

          {/* Databases */}
          <div className="skill-card">
            <h3>🗄️ Databases</h3>
            <div className="skill-list">
              <span><SiMysql /> MySQL</span>
              <span><SiMongodb /> MongoDB</span>
              <span><FaDatabase /> PostgreSQL</span>
              <span><FaDatabase /> DBeaver</span>
            </div>
          </div>

          {/* Data & Analytics */}
          <div className="skill-card">
            <h3>📊 Data & Analytics</h3>
            <div className="skill-list">
              <span><SiPandas /> Pandas</span>
              <span><SiNumpy /> NumPy</span>
              <span><SiScikitlearn /> Scikit-learn</span>
              <span><SiJupyter /> Jupyter</span>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="skill-card">
            <h3>🧰 Tools & Workflow</h3>
            <div className="skill-list">
              <span><SiVisualstudiocode /> VS Code</span>
              <span><FaGitAlt /> Git</span>
              <span><FaDocker /> Docker</span>
              <span><SiOpenai /> AI Tools</span>
            </div>
          </div>

          {/* Interests */}
          <div className="skill-card highlight">
            <h3>🧠 Areas of Interest</h3>
            <div className="skill-list">
              <span>Data Analytics</span>
              <span>Data Science</span>
              <span>Machine Learning</span>
              <span>Generative AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
