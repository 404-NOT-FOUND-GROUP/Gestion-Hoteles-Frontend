import React, { useState, useEffect } from 'react';
import { useDeleteRoom } from '../shared/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { Navbar } from '../navs/Navbar';
import { Sidebar } from '../navs/Sidebar';

export const DeleteRoom = () => {
  const { id } = useParams();
  const [roomId, setRoomId] = useState(id || "");
  const { isLoading, handleDelete } = useDeleteRoom();
  const navigate = useNavigate();

  // Si el id de la URL cambia, actualiza el estado
  useEffect(() => {
    if (id) setRoomId(id);
  }, [id]);

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div
        className="table-responsive"
        style={{
          marginTop: "75px",
          paddingBottom: "2rem",
          minHeight: "calc(100vh - 100px)",
          overflowY: "auto"
        }}
      >
        <div
          className="container d-flex justify-content-center align-items-start"
          style={{ paddingTop: "50px" }}
        >
          <div
            className="w-100 p-5 rounded-4"
            style={{ maxWidth: "600px", backgroundColor: "#aeb6c0" }}
          >
            <h2 className="text-center mb-5" style={{ fontWeight: "900", color: "#164360" }}>
              Eliminar Habitación
            </h2>

            <div className="mb-4">
              <label htmlFor="roomId" className="form-label fw-semibold">
                ID de la habitación a eliminar
              </label>
              <input
                id="roomId"
                type="text"
                className="form-control form-control-lg"
                placeholder="Ingrese el ID de la habitación"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                required
                style={{ borderColor: "#dc3545" }}
                disabled={!!id} // Deshabilita si viene por URL
              />
            </div>

            <button
              className="btn btn-success btn-lg w-100 mb-3"
              style={{ fontWeight: "600", backgroundColor: "#164360" }}
              onClick={() => handleDelete(roomId)}
              disabled={isLoading || !roomId.trim()}
            >
              {isLoading ? "Eliminando..." : "Eliminar Habitación"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};