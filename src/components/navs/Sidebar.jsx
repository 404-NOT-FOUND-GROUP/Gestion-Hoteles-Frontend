import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Sidevar.css";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <button
        className="btn btn-dark sidebar-button"
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
          zIndex: 1050,
          marginTop: "90px"
        }}
        onClick={() => setCollapsed(!collapsed)}
      >
        <span>☰</span>
      </button>

      <div
        className={`sidebar-container ${collapsed ? "d-none" : ""} d-md-block`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          marginTop: "80px",
          transition: "transform 0.3s ease-in-out",
          transform: collapsed ? "translateX(-100%)" : "translateX(0)"
        }}
      >
        <div className="accordion" id="sidebarAccordion">
          <div className="accordion-item bg-transparent border-0" >
            <h2 className="accordion-header" id="headingInicio">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseInicio"
                aria-expanded="false"
                aria-controls="collapseInicio"
                style={{ marginTop: "50px" }}
              >
                🏠 Inicio
              </button>
            </h2>
          </div>

          <div className="accordion-item bg-transparent border-0">
            <h2 className="accordion-header" id="headingClientes">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClientes"
                aria-expanded="false"
                aria-controls="collapseClientes"
              >
                🛏️ Habitaciones
              </button>
            </h2>
            <div
              id="collapseClientes"
              className="accordion-collapse collapse"
              aria-labelledby="headingClientes"
              data-bs-parent="#sidebarAccordion"
            >
              <div className="accordion-body p-0">
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>➕ Agregar</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}  onClick={() => navigate("/listar-rooms")}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>📋 Listar Habitaciones</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🔄 Actualizar</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>❌ Eliminar</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }} onClick={() => navigate("/factura-rooms")}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🛋️ Factura Habitación</span>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-0" >
            <h2 className="accordion-header" id="headingEventos">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEventos"
                aria-expanded="false"
                aria-controls="collapseEventos"
              >
                🎉 Eventos
              </button>
            </h2>
            <div
              id="collapseEventos"
              className="accordion-collapse collapse"
              aria-labelledby="headingEventos"
              data-bs-parent="#sidebarAccordion"
            >
              <div className="accordion-body p-0">
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }} onClick={() => navigate("/event/createEvent")}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>➕ Agregar</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }} onClick={() => navigate("/listar-eventos")}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>📋 Listar Eventos</span>
                </div>
                
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}  onClick={() => navigate("/factura-events")}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🥂 Factura Evento</span>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-0">
            <h2 className="accordion-header" id="headingCategorias">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseCategorias"
                aria-expanded="false"
                aria-controls="collapseCategorias"
              >
                🗂️ Categorías
              </button>
            </h2>
            <div
              id="collapseCategorias"
              className="accordion-collapse collapse"
              aria-labelledby="headingCategorias"
              data-bs-parent="#sidebarAccordion"
            >
              <div className="accordion-body p-0">
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🆕 Agregar categoría</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>📋 Listar categorías</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>✏️ Editar categorías</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🗑️ Eliminar categorías</span>
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-item bg-transparent border-0">
            <h2 className="accordion-header" id="headingProveedores">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseProveedores"
                aria-expanded="false"
                aria-controls="collapseProveedores"
              >
                📦 Proveedores
              </button>
            </h2>
            <div
              id="collapseProveedores"
              className="accordion-collapse collapse"
              aria-labelledby="headingProveedores"
              data-bs-parent="#sidebarAccordion"
            >
              <div className="accordion-body p-0">
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>➕ Agregar</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>📋 Listar</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🔄 Actualizar</span>
                </div>
                <div className="sidebar-list-item" style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>❌ Eliminar</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
