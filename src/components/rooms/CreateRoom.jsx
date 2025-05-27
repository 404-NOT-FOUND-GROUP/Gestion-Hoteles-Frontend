import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateRoom } from "../shared/hooks/useCreateRoom.jsx";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";

export const CreateRoom = () => {
  const { form, isLoading, handleChange, handleSubmit } = useCreateRoom();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <Sidebar />

      <div
        className="table-responsive"
        style={{
          marginTop: "5px",
          paddingBottom: "2rem",
          minHeight: "calc(100vh - 75px)",
          overflowY: "auto",
        }}
      >
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ minHeight: "100%", paddingTop: "10px" }}
        >
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            method="post"
            className="w-100 p-5 rounded-4 shadow-lg border"
            style={{ maxWidth: "600px", backgroundColor: "#aeb6c0" }}
          >
            <h2 className="text-center mb-5" style={{ fontWeight: "900", color: "#164360" }}>
              Crear Nueva Habitación
            </h2>

            <div className="mb-3">
              <label htmlFor="hotel" className="form-label fw-semibold">
                Hotel (ID o Nombre)
              </label>
              <input
                id="hotel"
                name="hotel"
                className="form-control"
                placeholder="ID o nombre del hotel"
                value={form.hotel}
                onChange={handleChange}
                required
              />
              <div className="form-text">
                Puedes ingresar el <b>ID</b> o el <b>nombre</b> del hotel.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label fw-semibold">Número de Habitación</label>
              <input
                id="number"
                name="number"
                type="number"
                className="form-control"
                placeholder="Ej. 101"
                value={form.number}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label fw-semibold">Tipo</label>
              <select
                id="type"
                name="type"
                className="form-control"
                value={form.type}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione el tipo</option>
                <option value="STANDARD">STANDARD</option>
                <option value="SUITE">SUITE</option>
                <option value="DELUXE">DELUXE</option>
                <option value="PRESIDENTIAL">PRESIDENTIAL</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="price" className="form-label fw-semibold">Precio</label>
              <input
                id="price"
                name="price"
                type="number"
                className="form-control"
                placeholder="Ej. 500"
                value={form.price}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label fw-semibold">Estado</label>
              <select
                id="status"
                name="status"
                className="form-control"
                value={form.status}
                onChange={handleChange}
              >
                <option value="AVAILABLE">Disponible</option>
                <option value="OCCUPIED">Ocupada</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="image" className="form-label fw-semibold">Imagen</label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn text-white fw-semibold"
                style={{ backgroundColor: "#164360" }}
                disabled={isLoading}
              >
                {isLoading ? "Creando..." : "Crear Habitación"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};