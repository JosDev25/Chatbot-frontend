import React from 'react';
import './Navbar.css';

interface NavbarProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onLogoutClick: () => void;
  isLoggedIn: boolean;
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  onLoginClick,
  onRegisterClick,
  onLogoutClick,
  isLoggedIn,
  userName = "Usuario"
}) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        Freemiun-GPT 🤖
      </div>
      <div className="navbar-links">
        <a href="/" className="navbar-link">Home</a>

        {!isLoggedIn ? (
          <>
            <button className="navbar-button navbar-login" onClick={onLoginClick}>
              Login
            </button>
            <button className="navbar-button navbar-signup" onClick={onRegisterClick}>
              Signup
            </button>
          </>
        ) : (
          <>
            <span className="navbar-username">Hola, {userName}</span>
            <button className="navbar-button navbar-logout" onClick={onLogoutClick}>
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
