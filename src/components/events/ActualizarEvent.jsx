import React, { useEffect } from "react";
import { useActualizarEvento } from "../shared/hooks/useActualizarEvent";
import { Navbar } from "../navs/Navbar";
import { Sidebar } from "../navs/Sidebar";
import { useParams } from "react-router-dom";

const SERVICES = [
  "Servicio de Meseros",
  "Servicio de Bartender",
  "Servicio de Bouffett",
  "Servicio de Reuniones",
  "Servicio de Fiesta",
  "Servicio de Decoracion",
  "Servicio de Staff"
];

export const ActualizarEvent = () => {
  const { eid } = useParams();
  const { form, isLoading, error, success, handleChange, handleSubmit, fetchEvento } = useActualizarEvento(eid);

  useEffect(() => {
    fetchEvento();
    // eslint-disable-next-line
  }, [eid]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        className="d-flex justify-content-center align-items-start w-100"
        style={{
          paddingTop: "40px",
          paddingBottom: "4rem",
          minHeight: "50px",
          backgroundColor: "#f8f9fa",
        }}
      >
        <div
          style={{
            width: "130%",
            maxWidth: "2200px",
            minHeight: "30px",
            margin: "0 auto",
            boxShadow: "none",
          }}
        >
          <div className="card-body p-5">
            <h3 className="text-center mb-4">✏️ Actualizar Evento</h3>
            {error && <p className="text-danger text-center mt-2">{error}</p>}
            {success && <p className="text-success text-center mt-2">{success}</p>}
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: 600 }}>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">ID del Hotel</label>
                <input
                  type="text"
                  className="form-control"
                  name="hotel"
                  value={form.hotel}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Fecha</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Tipo</label>
                <select
                  className="form-control"
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="CONFERENCE">Conferencia</option>
                  <option value="MARRIAGE">Matrimonio</option>
                  <option value="MEETING">Reunión</option>
                  <option value="PARTY">Fiesta</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Recursos</label>
                <div className="d-flex flex-column">
                  {SERVICES.map((serv) => (
                    <label className="mb-2" key={serv}>
                      <input
                        type="checkbox"
                        name="resources"
                        value={serv}
                        checked={form.resources.includes(serv)}
                        onChange={handleChange}
                      />{" "}
                      {serv}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Estado</label>
                <select
                  className="form-control"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  required
                >
                  <option value="PROGRAMADO">Programado</option>
                  <option value="CANCELADO">Cancelado</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Actualizando..." : "Actualizar Evento"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};