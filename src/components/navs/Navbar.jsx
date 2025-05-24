import React from "react";
import "./navbar.css"

const NavLogo = () => {
  return (
    <>
      <img
        className="nav-logo"
        src="/Logo.png"
        alt="Logo Hoteles"
        style={{ width: "70px", height: "40px", marginBottom: "1rem", marginTop: "0.5rem",  borderRadius: "10px"}}
      />
      <h3 style={{ color: "white" }}>404-ROOM</h3>
      </>
  );
};

export const Navbar = () => {

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
<nav className="navbar navbar-dark custom-navbar fixed-top d-flex justify-content-between align-items-center px-4">
      <NavLogo />
      <button style={{ color: "black", backgroundColor: "white"}} onClick={handleLogout} className="btn btn-outline-dark">
        Cerrar sesión
      </button>
    </nav>
  );
};