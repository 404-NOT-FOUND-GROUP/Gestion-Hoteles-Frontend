import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Sidevar.css";
import { useAuth } from "../shared/hooks";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { isAdmin, isUser } = useAuth();

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
            <div
              className="sidebar-list-item"
              style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
              onClick={() => window.location.href = "/dashboard"}
            >
              <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🏠 Inicio</span>
            </div>
            
          <div className="accordion-item bg-transparent border-0">
            <h2 className="accordion-header" id="headingHoteles">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseHoteles"
                aria-expanded="false"
                aria-controls="collapseHoteles"
              >
                🏨 Hoteles
              </button>
            </h2>
            <div
              id="collapseHoteles"
              className="accordion-collapse collapse"
              aria-labelledby="headingHoteles"
              data-bs-parent="#sidebarAccordion"
            >
              <div className="accordion-body p-0">
                {isAdmin && (
                <div
                  className="sidebar-list-item"
                  style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
                  onClick={() => window.location.href = "/hotel/CreateHotel"}
                >
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>Agregar</span>
                </div>
                )}
                <div
                  className="sidebar-list-item"
                  style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
                  onClick={() => window.location.href = "/hotel/GetHotel"}
                >
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}> Listar</span>
                </div>
                {isAdmin && (
                <div
                  className="sidebar-list-item"
                  style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
                  onClick={() => window.location.href = "/hotel/Report"}>
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}> Reporte</span>
                </div>
                )}
              </div>
            </div>
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
                <div
                  className="sidebar-list-item"
                  style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
                  onClick={() => window.location.href = "/room/list"}
                >
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>
                    📋 Listar Habitaciones
                  </span>
                </div>
                {(isAdmin || isUser) && (
                <div
                  className="sidebar-list-item"
                  style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
                  onClick={() => window.location.href = "/reservation/roomVoice"}
                >
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>
                    🛋️ Factura Habitación
                  </span>
                </div>
                )}
              </div>
            </div>
          </div>

          {/* EVENTOS */}
          {(isAdmin || isUser) && (
          <div className="accordion-item bg-transparent border-0">
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
      <div
        className="sidebar-list-item"
        style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
        onClick={() => window.location.href = "/event/createEvent"}
      >
        <span className="sidebar-list-username" style={{ color: "#ffffff" }}>➕ Agregar</span>
      </div>
      <div
        className="sidebar-list-item"
        style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
        onClick={() => window.location.href = "/event/list"}
      >
        <span className="sidebar-list-username" style={{ color: "#ffffff" }}>📋 Listar Eventos</span>
      </div>
      <div
        className="sidebar-list-item"
        style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
        onClick={() => window.location.href = "/reservation/eventVoice"}
      >
        <span className="sidebar-list-username" style={{ color: "#ffffff" }}>🥂 Factura Evento</span>
      </div>
    </div>
  </div>
</div>

          )}
          {(isAdmin || isUser) && (
          <div className="accordion-item bg-transparent border-0">
            <h2 className="accordion-header" id="headingReservationEventos">
              <button
                className="accordion-button collapsed bg-dark text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseReservationEventos"
                aria-expanded="false"
                aria-controls="collapseReservationEventos"
              >
                🎉 Reservación de Eventos
              </button>
            </h2>
            <div
              id="collapseReservationEventos"
              className="accordion-collapse collapse"
              aria-labelledby="headingReservationEventos"
              data-bs-parent="#sidebarAccordion"
            >
              <div className="accordion-body p-0">
                <div
                  className="sidebar-list-item"
                  style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
                  onClick={() => window.location.href = "/reservationEvent/Create"}
                >
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>Crear Reservacion</span>
                </div>
                <div
                  className="sidebar-list-item"
                  style={{ cursor: "pointer", textAlign: "center", paddingRight: "1rem" }}
                  onClick={() => window.location.href = "/reservationEvent/List"}
                >
                  <span className="sidebar-list-username" style={{ color: "#ffffff" }}>Listar Reservaciones</span>
                </div>
              </div>
            </div>
          </div>
          )}

          {/* USUARIOS */}
        </div>
      </div>
    </>
  );
};
