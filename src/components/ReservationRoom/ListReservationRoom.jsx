import React, { useEffect } from "react";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";
import { useListReservationRoom } from "../shared/hooks/useListReservationRoom.jsx";
import { useCancelReservationRoom } from "../shared/hooks/useCancelReservationRoom.jsx";

export const ListReservationRoom = () => {
  const { reservations, isLoading, error, fetchReservations } = useListReservationRoom();
  const { isLoading: isCancelling, cancelReservation } = useCancelReservationRoom();

  useEffect(() => {
    fetchReservations();
    // eslint-disable-next-line
  }, []);

  const handleCancel = async (rid) => {
    await cancelReservation(rid);
    fetchReservations();
  };

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: "3rem", height: "3rem" }}>
            <span className="visually-hidden">Cargando reservaciones...</span>
          </div>
          <p className="fw-semibold text-primary">Cargando reservaciones...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ marginTop: "15px", backgroundColor: "#aeb6c0", minHeight: "100vh" }}>
        <div className="text-white py-5" style={{ backgroundColor: "#aeb6c0" }}>
          <div className="container text-center">
            <h1 className="fw-bold mb-2">
              <i className="bi bi-door-closed me-2"></i>Mis Reservaciones de Habitaciones
            </h1>
            <p className="lead">Consulta todas tus reservaciones de habitaciones realizadas en el sistema.</p>
          </div>
        </div>

        <div className="container py-5">
          {error && (
            <div className="alert alert-danger text-center fw-semibold" role="alert">
              {error}
            </div>
          )}
          {reservations.length === 0 && !error ? (
            <div className="alert alert-warning text-center fw-semibold" role="alert">
              No tienes reservaciones de habitaciones.
            </div>
          ) : (
            <div className="d-flex flex-column gap-4">
              {reservations.map((reservation) => (
                <div
                  key={reservation._id}
                  className="card shadow-sm border-0 rounded-4 d-flex flex-row overflow-hidden"
                  style={{ minHeight: "200px" }}
                >
                  <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title text-primary fw-bold">
                      {reservation.room?.number ? `Habitación ${reservation.room.number}` : "Habitación"}
                    </h5>
                    <p className="card-text mb-1">
                      <i className="bi bi-building text-secondary me-1"></i>
                      <strong>Hotel:</strong> {reservation.hotel?.name || "N/A"}
                    </p>
                    <p className="card-text mb-1">
                      <i className="bi bi-person text-success me-1"></i>
                      <strong>Tipo de Habitación:</strong> {reservation.room?.type || "N/A"}
                    </p>
                    <p className="card-text mb-1">
                      <i className="bi bi-door-open text-warning me-1"></i>
                      <strong>Fecha Entrada:</strong> {new Date(reservation.checkInDate).toLocaleDateString()}
                    </p>
                    <p className="card-text mb-1">
                      <i className="bi bi-door-closed text-danger me-1"></i>
                      <strong>Fecha Salida:</strong> {new Date(reservation.checkOutDate).toLocaleDateString()}
                    </p>
                    <p className="card-text">
                      <i className="bi bi-calendar-check text-secondary me-1"></i>
                      <strong>Reservado el:</strong> {new Date(reservation.createdAt).toLocaleString()}
                    </p>
                    <button
                      className="btn btn-danger mt-3"
                      disabled={isCancelling}
                      onClick={() => handleCancel(reservation._id)}
                    >
                      {isCancelling ? "Cancelando..." : "Cancelar Reservación"}
                    </button>
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