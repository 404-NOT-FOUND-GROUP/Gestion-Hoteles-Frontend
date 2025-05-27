import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../navs/Navbar";

import "../users/usersStyles/viewcouts.css"; // CSS separado

const VerCuenta = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="vercuenta-container">
        <div className="vercuenta-sidebar">
          <button onClick={() => (window.location.href = "/perfil")}>
            <i className="bi bi-card-list"></i>
            <span className="sidebar-text">Mis datos</span>
          </button>

          <button onClick={() => (window.location.href = "/auth/updateuser/GetHotel")}>
            <i className="bi bi-person"></i>
            <span className="sidebar-text">Actualizar Datos</span>
          </button>

          <button onClick={() => (window.location.href = "/cambiar-clave")}>
            <i className="bi bi-shield-lock"></i>
            <span className="sidebar-text">Cambiar contraseña</span>
          </button>

          <button onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i>
            <span className="sidebar-text">Cerrar Sesión</span>
          </button>
        </div>


      </div>
    </>
  );
};

export default VerCuenta;
