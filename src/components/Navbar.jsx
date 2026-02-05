import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar-floating">
        <div className="navbar-logo">
          Santhosh<span>.</span>
        </div>

        <div className="navbar-menu-wrapper">
          <div className="navbar-links">
            <Link
              to="home"
              smooth={true}
              duration={600}
              spy={true}
              offset={-100}
              className="nav-link"
              activeClass="active"
            >
              Home
            </Link>

            <Link
              to="projects"
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              className="nav-link"
              activeClass="active"
            >
              Projects
            </Link>

            <Link
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              className="nav-link"
              activeClass="active"
            >
              About
            </Link>
          </div>
          
          <div className="v-divider"></div>
          <ThemeToggle />
        </div>

        <Link
          to="contact"
          smooth={true}
          duration={600}
          spy={true}
          offset={-80}
          className="nav-cta"
          activeClass="cta-active"
        >
          Reach Me
        </Link>
      </nav>
    </header>
  );
}