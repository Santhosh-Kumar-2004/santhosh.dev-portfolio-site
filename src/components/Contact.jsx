import { FaEnvelope, FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-inner contact-wrapper">
        
        {/* Left Side: Text & Links */}
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <header className="contact-header">
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Let’s Work <br /> Together</h2>
            <div className="header-line"></div>
          </header>

          <p className="contact-intro">
            Have a project, idea, or opportunity in mind? I’m always open to 
            discussing meaningful work and collaborations. 
          </p>

          <div className="contact-methods">
            <div className="method-item">
              <p>Prefer direct email?</p>
              <a href="mailto:your-email@example.com" className="email-card">
                <div className="email-icon">
                  <FaEnvelope />
                </div>
                <div className="email-text">
                  <span>your-email@example.com</span>
                </div>
                <FaArrowRight className="arrow" />
              </a>
            </div>

            <div className="social-mini-grid">
              <a href="#" className="social-pill"><FaGithub /> GitHub</a>
              <a href="#" className="social-pill"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Form Container */}
        <motion.div 
          className="contact-form-glass"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="form-glow"></div>
          <div className="iframe-wrapper">
            <iframe
              title="Contact Form"
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              height="650"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>

      </div>
    </section>
  );
}