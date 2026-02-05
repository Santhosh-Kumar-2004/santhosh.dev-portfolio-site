import { useState } from "react"; // 1. Add useState
import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // 2. State for menu

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">
      <nav className={`navbar-floating ${isOpen ? "menu-open" : ""}`}>
        <div className="navbar-logo">
          Santhosh<span>.</span>
        </div>

        {/* 3. Hamburger Toggle Button */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>

        <div className={`navbar-menu-wrapper ${isOpen ? "active" : ""}`}>
          <div className="navbar-links">
            <Link 
              to="home" 
              smooth={true} 
              offset={-100} 
              className="nav-link" activeClass="active" 
              onClick={closeMenu}>
                Home
            </Link>
            <Link 
              to="projects" 
              smooth={true} 
              offset={-80} 
              className="nav-link" 
              activeClass="active" 
              onClick={closeMenu}>
                Projects
            </Link>
            <Link 
              to="about" 
              smooth={true} 
              offset={-80} 
              className="nav-link" 
              activeClass="active" 
              onClick={closeMenu}>
                About
            </Link>
          </div>
          
          <div className="v-divider"></div>
          <ThemeToggle />
        </div>

        <Link 
          to="contact" smooth={true} duration={600} spy={true} offset={-80} className="nav-cta" activeClass="cta-active" onClick={closeMenu}>
          Reach Me
        </Link>
      </nav>
    </header>
  );
}