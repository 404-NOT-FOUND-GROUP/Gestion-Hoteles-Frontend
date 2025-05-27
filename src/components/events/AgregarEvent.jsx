import React from "react";
import { useAgregarEvento } from "../shared/hooks/useAgregarEvent";
import { Navbar } from "../navs/Navbar";
import { Sidebar } from "../navs/Sidebar";

export const AgregarEvento = () => {
  const { form, isLoading, error, success, handleChange, handleSubmit } = useAgregarEvento();

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
            <h3 className="text-center mb-4">➕ Agregar Evento</h3>
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
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="resources"
                      value="Servicio de Meseros"
                      checked={form.resources.includes("Servicio de Meseros")}
                      onChange={handleChange}
                    />{" "}
                    Servicio de Meseros
                  </label>
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="resources"
                      value="Servicio de Bartender"
                      checked={form.resources.includes("Servicio de Bartender")}
                      onChange={handleChange}
                    />{" "}
                    Servicio de Bartender
                  </label>
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="resources"
                      value="Servicio de Bouffett"
                      checked={form.resources.includes("Servicio de Bouffett")}
                      onChange={handleChange}
                    />{" "}
                    Servicio de Bouffett
                  </label>
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="resources"
                      value="Servicio de Reuniones"
                      checked={form.resources.includes("Servicio de Reuniones")}
                      onChange={handleChange}
                    />{" "}
                    Servicio de Reuniones
                  </label>
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="resources"
                      value="Servicio de Fiesta"
                      checked={form.resources.includes("Servicio de Fiesta")}
                      onChange={handleChange}
                    />{" "}
                    Servicio de Fiesta
                  </label>
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="resources"
                      value="Servicio de Decoracion"
                      checked={form.resources.includes("Servicio de Decoracion")}
                      onChange={handleChange}
                    />{" "}
                    Servicio de Decoracion
                  </label>
                  <label className="mb-2">
                    <input
                      type="checkbox"
                      name="resources"
                      value="Servicio de Staff"
                      checked={form.resources.includes("Servicio de Staff")}
                      onChange={handleChange}
                    />{" "}
                    Servicio de Staff
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Agregando..." : "Agregar Evento"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};