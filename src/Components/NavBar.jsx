import { useState } from "react";
import { Link } from "react-router-dom";
import "./Style/navbar.css"; // external styles

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo */}
        <div className="nav-logo">DonateNow</div>

        {/* Desktop Links */}
        <div className="nav-links hidden md:flex">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Donate Button (Desktop) */}
        <div className="hidden md:flex">
          <Link to="/donate" className="donate-btn">
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Simple hamburger icon */}
            <div className={`hamburger ${isOpen ? "open" : ""}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/projects" className="mobile-link" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/donate" className="donate-btn w-full text-center" onClick={() => setIsOpen(false)}>
            Donate
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
