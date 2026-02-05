import { FaGithub, FaLinkedin, FaInstagram, FaMedium, FaBehance, FaArrowUp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>
      
      <div className="section-inner footer-wrapper">
        <div className="footer-grid">
          
          {/* 1. Brand & Availability */}
          <div className="footer-column brand-col">
            <h3 className="footer-logo">
              Santhosh<span>.</span>
            </h3>
            <p className="footer-bio">
              Crafting digital experiences where code meets creativity. 
              Based in India, working worldwide.
            </p>
            <div className="availability-tag">
              <span className="pulse-dot"></span>
              Available for new opportunities
            </div>
          </div>

          {/* 2. Navigation */}
          <div className="footer-column links-col">
            <h4>Sitemap</h4>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          {/* 3. Socials with Hover Effects */}
          <div className="footer-column social-col">
            <h4>Social Pulse</h4>
            <div className="social-grid">
              {[
                { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
                { icon: <FaGithub />, url: "#", label: "GitHub" },
                { icon: <FaMedium />, url: "#", label: "Medium" },
                { icon: <FaBehance />, url: "#", label: "Behance" },
                { icon: <FaInstagram />, url: "#", label: "Instagram" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.url}
                  whileHover={{ y: -5, color: "var(--accent-primary)" }}
                  className="social-icon-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="copyright">
            © {year} Built with React by <span>Santhosh Kumar</span>
          </p>
          
          <motion.button 
            onClick={scrollToTop} 
            className="back-to-top-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}