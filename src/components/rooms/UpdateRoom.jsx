import React, { useState } from "react";
import { useUpdateRoom } from "../shared/hooks";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../navs/Navbar.jsx";
import { Sidebar } from "../navs/Sidebar.jsx";

export const UpdateRoom = () => {
  const [roomId, setRoomId] = useState("");
  const { form, isLoading, handleChange, handleSubmit } = useUpdateRoom();
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
            className="w-100 p-5 shadow-lg rounded-4 border"
            style={{ maxWidth: "650px", backgroundColor: "#aeb6c0" }}
            onSubmit={(e) => handleSubmit(e, roomId)}
            encType="multipart/form-data"
          >
            <h2 className="text-center mb-5" style={{ fontWeight: "900", color: "#164360" }}>
              Actualizar Habitación
            </h2>

            <div className="mb-3">
              <label htmlFor="roomId" className="form-label fw-semibold">
                ID de la Habitación
              </label>
              <input
                id="roomId"
                type="text"
                className="form-control"
                placeholder="ID único de la habitación"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="hotel" className="form-label fw-semibold">Hotel (ID o Nombre)</label>
              <input
                id="hotel"
                name="hotel"
                className="form-control"
                placeholder="ID o nombre del hotel"
                value={form.hotel || ""}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="number" className="form-label fw-semibold">Número de Habitación</label>
              <input
                id="number"
                name="number"
                type="number"
                className="form-control"
                placeholder="Ej. 101"
                value={form.number || ""}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="type" className="form-label fw-semibold">Tipo</label>
              <select
                id="type"
                name="type"
                className="form-control"
                value={form.type || ""}
                onChange={handleChange}
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
                value={form.price || ""}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="status" className="form-label fw-semibold">Estado</label>
              <select
                id="status"
                name="status"
                className="form-control"
                value={form.status || ""}
                onChange={handleChange}
              >
                <option value="">Seleccione el estado</option>
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
                {isLoading ? "Actualizando..." : "Actualizar Habitación"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
