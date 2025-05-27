import React, { useEffect, useState } from "react";
import { useEliminarEvento } from "../shared/hooks/useEliminarEvent";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../navs/Navbar";
import { Sidebar } from "../navs/Sidebar";
import { findEventById } from "../services";

export const EliminarEvent = () => {
  const { eid } = useParams();
  const navigate = useNavigate();
  const { isLoading, error, success, handleDelete } = useEliminarEvento();

  const [eventName, setEventName] = useState("");

  useEffect(() => {
    const fetchEventName = async () => {
      try {
        const response = await findEventById(eid);
        if (response?.data?.event?.name) {
          setEventName(response.data.event.name);
        }
      } catch {
        setEventName("");
      }
    };
    fetchEventName();
  }, [eid]);

  const handleConfirmDelete = async () => {
    await handleDelete(eid);
    setTimeout(() => {
      if (success) navigate("/eventos");
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>
        <div className="card p-5" style={{ maxWidth: 500 }}>
          <h3 className="text-center mb-4">❌ Eliminar Evento</h3>
          {error && <p className="text-danger text-center mt-2">{error}</p>}
          {success && <p className="text-success text-center mt-2">{success}</p>}
          <p className="text-center">
            ¿Estás seguro de que deseas eliminar el evento
            <strong> {eventName ? `"${eventName}"` : ""}</strong>?
          </p>
          <button
            className="btn btn-danger w-100 mb-2"
            onClick={handleConfirmDelete}
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