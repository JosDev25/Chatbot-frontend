import React from 'react';
import './Navbar.css';

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onRegisterClick }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Freemiun-GPT 🤖
      </div>
      <div className="navbar-links">
        <a href="/" className="navbar-link">Home</a>
        <button className="navbar-button navbar-login" onClick={onLoginClick}>
          Login
        </button>
        <button className="navbar-button navbar-signup" onClick={onRegisterClick}>
          Signup
        </button>
      </div>
    </nav>
  );
};

export default Navbar;