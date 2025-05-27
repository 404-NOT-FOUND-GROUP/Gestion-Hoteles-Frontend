import React, { useState } from "react";
import { useGetHotel } from "../shared/hooks/useGetHotel";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";
import { useAuth } from "../shared/hooks"; // Asegúrate de tener este hook para saber si es admin

export const GetHotel = () => {
  const { hotels, isLoading } = useGetHotel();
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const { isAdmin } = useAuth();

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Cargando hoteles...</span>
          </div>
          <p className="fw-semibold text-primary">Cargando hoteles...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <div style={{ marginTop: "15px", backgroundColor: "#aeb6c0", minHeight: "100vh" }}>
        <div className="text-white py-5 " style={{ backgroundColor: "#aeb6c0" }}>
          <div className="container text-center">
            <h1 className="fw-bold mb-2">
              <i className="bi bi-building me-2"></i>Listado de Hoteles
            </h1>
            <p className="lead">Consulta todos los hoteles registrados en el sistema.</p>
          </div>
        </div>

        <div className="container py-5">
          {hotels.length === 0 ? (
            <div
              className="alert alert-warning text-center fw-semibold"
              role="alert"
            >
              No hay hoteles registrados por el momento.
            </div>
          ) : (
            <div className="d-flex flex-column gap-4">
              {hotels.map((hotel) => (
                <div
                  key={hotel.hid || hotel._id}
                  className={`card shadow-sm border-0 rounded-4 d-flex flex-row overflow-hidden ${selectedHotel === (hotel.hid || hotel._id) ? "border-primary border-3" : ""}`}
                  style={{ minHeight: "200px", cursor: "pointer" }}
                  onClick={() => setSelectedHotel(selectedHotel === (hotel.hid || hotel._id) ? null : (hotel.hid || hotel._id))}
                >
                  {hotel.image && (
                    <img
                      src={`http://localhost:3000/uploads/${hotel.image}`}
                      alt={`Imagen de ${hotel.name}`}
                      style={{
                        width: "500px",
                        objectFit: "cover",
                        height: "400px", 
                      }}
                    />
                  )}
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title text-primary fw-bold">{hotel.name}</h5>
                    <p className="card-text mb-1">
                      <i className="bi bi-geo-alt-fill text-danger me-1"></i>
                      <strong>Dirección:</strong> {hotel.address}
                    </p>
                    <p className="card-text mb-1">
                      <i className="bi bi-telephone-fill text-success me-1"></i>
                      <strong>Teléfono:</strong> {hotel.phone}
                    </p>
                    {hotel.description && (
                      <p className="card-text">
                        <i className="bi bi-info-circle-fill text-info me-1"></i>
                        <strong>Descripción:</strong> {hotel.description}
                      </p>
                    )}
                    {isAdmin && selectedHotel === (hotel.hid || hotel._id) && (
                      <div className="mt-3 d-flex gap-2">
                        <button
                          className="btn"
                          style={{ fontWeight: "900", backgroundColor: "#164360" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/hotel/UpdateHotel", { state: { hid: hotel.hid || hotel._id } });
                          }}
                        >
                          Actualizar
                        </button>
                        <button
                          className="btn"
                          style={{ fontWeight: "900", backgroundColor: "#164360" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/hotel/DeleteHotel", { state: { hid: hotel.hid || hotel._id } });
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> 
      </div>
    </div>
  );
};