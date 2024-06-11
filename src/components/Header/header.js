import React from 'react';
import './header.css';
import logo from './img/logo-kinova-sin-fondo.png'; // Asegúrate de que la ruta sea correcta

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Kinova Logo" />
      </div>
      <nav className="header-nav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;