import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";
import { useGetHotel } from "../shared/hooks/useGetHotel";
import { useUpdateHotel } from "../shared/hooks/useUpdateHotel";

export const UpdateHotel = () => {
  const location = useLocation();
  const hotelId = location.state?.hid || "";
  const { hotels } = useGetHotel();
  const hotelData = hotels.find(h => (h.hid || h._id) === hotelId) || {};
  const { form, isLoading, handleChange, handleSubmit, setForm } = useUpdateHotel(hotelData);
  const navigate = useNavigate();

  useEffect(() => {
    setForm({
      name: hotelData.name || "",
      address: hotelData.address || "",
      phone: hotelData.phone || "",
      description: hotelData.description || "",
      image: null,
    });
  }, [hotelData, setForm]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm("¿Estás seguro de que quieres actualizar este hotel?");
    if (!confirmed) {
      navigate("/hotel/GetHotel");
      return;
    }
    await handleSubmit(e, hotelId);
    navigate("/hotel/GetHotel");
  };

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className="table-responsive" style={{ marginTop: "5px", paddingBottom: "2rem", minHeight: "calc(100vh - 75px)", overflowY: "auto" }}>
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100%", paddingTop: "10px" }}>
          <form className="w-100 p-5 shadow-lg rounded-4" style={{ maxWidth: "650px", backgroundColor: "#aeb6c0" }} onSubmit={onSubmit} encType="multipart/form-data">
            <h2 className="text-center mb-5" style={{ fontWeight: "900", color: "#164360" }}>
              Actualizar Hotel
            </h2>
            <div className="mb-4">
              <label className="form-label fw-semibold">ID del hotel</label>
              <input type="text" className="form-control form-control-lg" value={hotelId} readOnly style={{ borderColor: "#0d6efd" }} />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-semibold">Nombre</label>
              <input id="name" type="text" name="name" className="form-control form-control-lg" placeholder="Nuevo nombre" value={form.name || ""} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="form-label fw-semibold">Dirección</label>
              <input id="address" type="text" name="address" className="form-control form-control-lg" placeholder="Nueva dirección" value={form.address || ""} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="form-label fw-semibold">Teléfono</label>
              <input id="phone" type="text" name="phone" className="form-control form-control-lg" placeholder="Nuevo teléfono" value={form.phone || ""} onChange={handleChange} />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-semibold">Descripción</label>
              <textarea id="description" name="description" className="form-control form-control-lg" placeholder="Nueva descripción" value={form.description || ""} onChange={handleChange} rows={4} />
            </div>
            <div className="mb-5">
              <label htmlFor="image" className="form-label fw-semibold">Imagen</label>
              <input id="image" type="file" name="image" accept="image/*" className="form-control form-control-lg" onChange={handleChange} />
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success btn-lg w-100 mb-3" disabled={isLoading} style={{ fontWeight: "600", backgroundColor: "#164360" }}>
                {isLoading ? "Actualizando..." : "Actualizar Hotel"}
              </button>
              <button type="button" className="btn btn-secondary btn-lg w-100 mb-3" onClick={() => navigate("/hotel/GetHotel")}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};