import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateHotel } from "../shared/hooks/useCreateHotel.jsx";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";

export const CreateHotel = () => {
  const { form, isLoading, handleChange, handleSubmit } = useCreateHotel();
  const navigate = useNavigate();

  return (
    <div>
    <Navbar/>
    <Sidebar/>

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
            Crear Nuevo Hotel
          </h2>

          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">Nombre</label>
            <input
              id="name"
              name="name"
              className="form-control"
              placeholder="Ej. Hotel Real"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label fw-semibold">Dirección</label>
            <input
              id="address"
              name="address"
              className="form-control"
              placeholder="Ej. 5ta avenida 12-34 zona 1"
              value={form.address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="form-label fw-semibold">Teléfono</label>
            <input
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Ej. 5555-5555"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label fw-semibold">Descripción</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              placeholder="Breve descripción del hotel"
              value={form.description}
              onChange={handleChange}
              rows="3"
            />
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
            {isLoading ? "Creando..." : "Crear Hotel"}
          </button>
          </div>
        </form>
      </div>
    </div>
  </div>  
  );
};