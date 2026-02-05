import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaBehance,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="section-inner footer-wrapper">
        
        {/* Top Area */}
        <div className="footer-top">
          {/* Brand / Identity */}
          <div className="footer-brand">
            <h3 className="footer-name">
              Santhosh<span>.</span>
            </h3>
            <p className="footer-tagline">
              Building thoughtful web experiences with clarity and purpose.
            </p>
          </div>

          {/* Navigation / Quick Links */}
          <div className="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://medium.com/@yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
              >
                <FaMedium />
              </a>

              <a
                href="https://www.behance.net/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Behance"
              >
                <FaBehance />
              </a>

              <a
                href="https://www.instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Area */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} <strong>Santhosh</strong>. All rights reserved.
          </p>

          <a href="#home" className="footer-back-to-top">
            Back to top <FaArrowUp />
          </a>
        </div>

      </div>
    </footer>
  );
}
