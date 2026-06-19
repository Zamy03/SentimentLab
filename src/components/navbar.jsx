import React from 'react';
import './Navbar.scss';

const Navbar = ({ title, subtitle }) => {
  return (
    <header className="main-header">
      <div>
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
      <div className="system-status">
        <span className="status-dot"></span> Sistem aktif
      </div>
    </header>
  );
};

export default Navbar;