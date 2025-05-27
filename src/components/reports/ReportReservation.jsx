import React from "react";
import { useGetReservations } from "../shared/hooks/useGetReservations";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

export const ReportReservation = () => {
  const { reservations, isLoading, error } = useGetReservations();

  // Extraer nombres y cantidad de reservas
  const hotelNames = reservations?.hotels?.map(hotel => hotel.name) || [];
  const hotelReservations = reservations?.hotels?.map(hotel => hotel.reservation) || [];

  const data = {
    labels: hotelNames,
    datasets: [
      {
        label: "Reservas por hotel",
        data: hotelReservations,
        backgroundColor: [
          "#4e73df", "#1cc88a", "#36b9cc", "#f6c23e", "#e74a3b", "#858796", "#5a5c69"
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ marginTop: "15px", backgroundColor: "#aeb6c0", minHeight: "100vh" }}>
        <div className="container py-5">
          <h1 className="fw-bold mb-4 text-center">
            <i className="bi bi-pie-chart-fill me-2"></i>
            Reporte de Reservas por Hotel
          </h1>
          {isLoading ? (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
              <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Cargando reporte...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger text-center fw-semibold" role="alert">
              {error}
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <div style={{ width: "500px", height: "500px" }}>
                <Pie data={data} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};