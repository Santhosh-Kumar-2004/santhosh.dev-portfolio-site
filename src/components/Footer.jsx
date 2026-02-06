/* eslint-disable react-hooks/static-components */
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaBehance,
  FaArrowUp,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "../styles/Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bottomVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const DevpostIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Devpost"
    >
      <path d="M64 96v320h224c88.366 0 160-71.634 160-160S376.366 96 288 96H64zm192 256H128V160h128c52.935 0 96 43.065 96 96s-43.065 96-96 96z" />
    </svg>
  );

  const HeartIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="#e63946"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Heart"
    >
      <path d="M12 21s-6.716-4.35-9.33-7.014C.507 11.823.37 8.42 2.757 6.036 5.144 3.65 8.55 3.787 10.713 5.95L12 7.236l1.287-1.286c2.163-2.163 5.57-2.3 7.956.086 2.387 2.384 2.25 5.787.087 7.95C18.716 16.65 12 21 12 21z" />
    </svg>
  );

  return (
    <footer className="footer-section">
      <div className="footer-glow"></div>

      <div className="section-inner footer-wrapper">
        <motion.div
          className="footer-grid"
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 1. Brand & Availability */}
          <div className="footer-column brand-col">
            <h3 className="footer-logo">
              Santhosh<span>.</span>
            </h3>
            <p className="footer-bio">
              Crafting digital experiences where code meets creativity. Based in
              India, working worldwide.
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
                {
                  icon: <FaLinkedin />,
                  url: "https://www.linkedin.com/in/santhoshkumarv12136/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  url: "https://github.com/Santhosh-Kumar-2004",
                  label: "GitHub",
                },
                {
                  icon: <DevpostIcon />,
                  url: "https://devpost.com/santhoshkumarv12136?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav",
                  label: "Devpost",
                },
                {
                  icon: <FaInstagram />,
                  url: "https://www.instagram.com/santhosh_kumar_.v?igsh=anNha2MzcHlraGM0",
                  label: "Instagram",
                },
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
        </motion.div>

        <div className="footer-divider"></div>

        <motion.div
          className="footer-bottom"
          variants={bottomVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="copyright">
            © {year} Built with   <HeartIcon />   by <span>Santhosh Kumar</span>
          </p>

          <motion.button
            onClick={scrollToTop}
            className="back-to-top-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
