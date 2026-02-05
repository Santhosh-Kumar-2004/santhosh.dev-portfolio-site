import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-container">
      <nav className="navbar-floating">
        <div className="navbar-logo">
          Santhosh<span>.</span>
        </div>

        <div className="navbar-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About Me</a>
        </div>

        <a href="#contact" className="nav-cta">
          Reach Me
        </a>
      </nav>
    </header>
  );
}