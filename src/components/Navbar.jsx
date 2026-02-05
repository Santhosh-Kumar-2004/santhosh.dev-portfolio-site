import { useState } from "react";
import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-container">
      <nav className={`navbar-floating ${isOpen ? "menu-open" : ""}`}>
        <div className="navbar-logo">
          Santhosh<span>.</span>
        </div>

        {/* Hamburger Toggle */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>

        {/* Mobile / Responsive Menu */}
        <div className={`navbar-menu-wrapper ${isOpen ? "active" : ""}`}>
          <div className="navbar-links">
            <Link
              to="home"
              smooth
              offset={-100}
              className="nav-link"
              activeClass="active"
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="projects"
              smooth
              offset={-80}
              className="nav-link"
              activeClass="active"
              onClick={closeMenu}
            >
              Projects
            </Link>

            <Link
              to="about"
              smooth
              offset={-80}
              className="nav-link"
              activeClass="active"
              onClick={closeMenu}
            >
              About
            </Link>
          </div>

          <div className="v-divider" />

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* CTA — MOVED INSIDE MENU */}
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="nav-cta"
            onClick={closeMenu}
          >
            Reach Me
          </Link>
        </div>
      </nav>
    </header>
  );
}
