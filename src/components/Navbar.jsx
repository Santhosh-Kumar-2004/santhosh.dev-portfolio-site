import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar surface">
      <div className="navbar-inner">
        <div className="navbar-logo">
          Santhosh
        </div>

        <nav className="navbar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
