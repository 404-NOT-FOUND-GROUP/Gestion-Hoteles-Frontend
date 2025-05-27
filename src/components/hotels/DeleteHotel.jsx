import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";
import { useGetHotel } from "../shared/hooks/useGetHotel";
import { useDeleteHotel } from "../shared/hooks/useDeleteHotel";

export const DeleteHotel = () => {
  const location = useLocation();
  const hotelId = location.state?.hid || "";
  const { hotels } = useGetHotel();
  const hotelData = hotels.find(h => (h.hid || h._id) === hotelId) || {};
  const { isLoading, handleDelete } = useDeleteHotel();
  const navigate = useNavigate();

  const handleConfirmDelete = async () => {
    const confirmed = window.confirm("¿Estás seguro de que quieres eliminar este hotel? Esta acción no se puede deshacer.");
    if (!confirmed) {
      navigate("/hotel/GetHotel");
      return;
    }
    await handleDelete(hotelId);
    navigate("/hotel/GetHotel");
  };

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div className="table-responsive" style={{ marginTop: "75px", paddingBottom: "2rem", minHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
        <div className="container d-flex justify-content-center align-items-start" style={{paddingTop: "50px"}}>
          <div className="w-100 p-5 rounded-4" style={{ maxWidth: "600px", backgroundColor: "#aeb6c0" }}>
            <h2 className="text-center mb-5" style={{ fontWeight: "900", color: "#164360" }}>
              Eliminar Hotel
            </h2>
            <div className="mb-4">
              <label className="form-label fw-semibold">ID del hotel</label>
              <input type="text" className="form-control form-control-lg" value={hotelId} readOnly style={{ borderColor: "#dc3545" }} />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Nombre</label>
              <input type="text" className="form-control form-control-lg" value={hotelData.name || ""} readOnly />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Dirección</label>
              <input type="text" className="form-control form-control-lg" value={hotelData.address || ""} readOnly />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Teléfono</label>
              <input type="text" className="form-control form-control-lg" value={hotelData.phone || ""} readOnly />
            </div>
            <div className="mb-4">
              <label className="form-label fw-semibold">Descripción</label>
              <textarea className="form-control form-control-lg" value={hotelData.description || ""} readOnly rows={3} />
            </div>
            <div className="d-flex gap-2">
              <button className="btn btn-danger btn-lg w-100 mb-3" style={{ fontWeight: "600", backgroundColor: "#dc3545" }} onClick={handleConfirmDelete} disabled={isLoading}>
                {isLoading ? "Eliminando..." : "Eliminar Hotel"}
              </button>
              <button className="btn btn-secondary btn-lg w-100 mb-3" onClick={() => navigate("/hotel/GetHotel")}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
