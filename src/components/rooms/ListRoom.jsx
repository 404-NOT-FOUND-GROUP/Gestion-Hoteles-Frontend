import React from 'react';
import { useRoomList } from "../shared/hooks/useRoomList";
import { Navbar } from '../navs/Navbar';
import { Sidebar } from '../navs/Sidebar';
import { useNavigate } from 'react-router-dom';

export const ListRoom = () => {
  const { rooms, isLoading, error } = useRoomList();
  const navigate = useNavigate();

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
            <h3 className="text-center mb-4">🏨 Lista de Habitaciones</h3>

            {isLoading ? (
              <p className="text-center mt-4">Cargando habitaciones...</p>
            ) : error ? (
              <p className="text-danger text-center mt-4">{error}</p>
            ) : rooms.length === 0 ? (
              <p className="text-center mt-4">No hay habitaciones disponibles.</p>
            ) : (
              <div className="table-responsive mt-4">
                <table className="table table-bordered table-hover table-striped align-middle">
                  <thead className="table-dark text-center">
                    <tr>
                      <th>Hotel</th>
                      <th>Nombre</th>
                      <th>Dirección</th>
                      <th>Tipo</th>
                      <th>Comodidades</th>
                      <th>Precio</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {rooms.map((room, idx) => {
                      const roomKey = room._id || `room-${idx}`;

                      return (
                        <tr key={roomKey}>
                          <td>{room.hotel?.name || "Sin hotel"}</td>
                          <td>{room.name || "Sin nombre"}</td>
                          <td>{room.hotel?.address || "Sin dirección"}</td>
                          <td>{room.type || "Sin tipo"}</td>
                          <td>
                            {Array.isArray(room.amenities) && room.amenities.length > 0 ? (
                              <ul className="mb-0 ps-3 text-start">
                                {room.amenities.map((amenity, i) => (
                                  <li key={`${roomKey}-amenity-${i}`}>{amenity}</li>
                                ))}
                              </ul>
                            ) : (
                              <em>Sin comodidades</em>
                            )}
                          </td>
                          <td>{room.price != null ? `$${room.price.toFixed(2)}` : "Sin precio"}</td>
                          <td>
                            <span
                              className={`badge ${
                                room.status === "ACTIVA" ? "bg-success" : "bg-secondary"
                              }`}
                            >
                              {room.status || "Desconocido"}
                            </span>
                          </td>
                          <td>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => navigate("/room/updateRoom", { state: { eid: room._id } })}
                            >
                              Editar
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => navigate("/room/deleteRoom", { state: { eid: room._id } })}
                            >
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
