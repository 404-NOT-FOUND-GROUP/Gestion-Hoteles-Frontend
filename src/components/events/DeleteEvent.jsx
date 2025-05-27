import React, { useEffect, useState } from "react";
import { useDeleteEvent } from "../shared/hooks/useDeleteEvent";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../navs/Navbar";
import { Sidebar } from "../navs/Sidebar";
import { findEventById } from "../services";

export const DeleteEvent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const eid = location.state?.eid;

  const { isLoading, error, success, handleDelete } = useDeleteEvent();

  const [eventName, setEventName] = useState("");

  useEffect(() => {
    const fetchEventName = async () => {
      if (!eid) return;
      try {
        const response = await findEventById(eid);
        const event = response?.data?.event;
        if (event?.name) {
          setEventName(event.name);
        }
      } catch {
        setEventName("");
      }
    };
    fetchEventName();
  }, [eid]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate("/eventos");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  if (!eid) {
    return (
      <>
        <Navbar />
        <Sidebar />
        <div className="container mt-5 text-center">
          <h4 className="text-danger">No se proporcionó ID del evento.</h4>
          <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
            Volver
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        className="d-flex justify-content-center align-items-center w-100"
        style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
      >
        <div className="card p-5" style={{ maxWidth: 500 }}>
          <h3 className="text-center mb-4">❌ Eliminar Evento</h3>
          {error && <p className="text-danger text-center mt-2">{error}</p>}
          {success && <p className="text-success text-center mt-2">{success}</p>}
          <p className="text-center">
            ¿Estás seguro de que deseas eliminar el evento{" "}
            <strong>{eventName ? `"${eventName}"` : ""}</strong>?
          </p>
          <button
            className="btn btn-danger w-100 mb-2"
            onClick={() => handleDelete(eid)}
            disabled={isLoading}
          >
            {isLoading ? "Eliminando..." : "Eliminar Evento"}
          </button>
          <button
            className="btn btn-secondary w-100"
            onClick={() => navigate(-1)}
            disabled={isLoading}
          >
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};
