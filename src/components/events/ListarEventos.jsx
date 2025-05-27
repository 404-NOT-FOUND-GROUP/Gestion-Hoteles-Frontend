import React from 'react'
import { useListarEventos } from '../shared/hooks/useListarEventos'
import { Navbar } from '../navs/Navbar'
import { Sidebar } from '../navs/Sidebar'
import { useNavigate } from "react-router-dom";

export const ListarEventos = () => {
  const { eventos, isLoading, error } = useListarEventos();
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
            <h3 className="text-center mb-4">📅 Lista de Eventos</h3>

            {isLoading ? (
              <p className="text-center mt-4">Cargando eventos...</p>
            ) : error ? (
              <p className="text-danger text-center mt-4">{error}</p>
            ) : eventos.length === 0 ? (
              <p className="text-center mt-4">No hay eventos disponibles.</p>
            ) : (
              <div className="table-responsive mt-4">
                <table className="table table-bordered table-hover table-striped align-middle">
                  <thead className="table-dark text-center">
                    <tr>
                      <th>Nombre</th>
                      <th>Hotel</th>
                      <th>Fecha</th>
                      <th>Tipo</th>
                      <th>Servicios</th>
                      <th>Precio Recursos</th>
                      <th>Estado</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {eventos.map((evento) => (
                      <tr key={evento._id}>
                        <td>{evento.name || "Sin nombre"}</td>
                        <td>{evento.hotel?.name || "Sin hotel"}</td>
                        <td>
                          {evento.date
                            ? new Date(evento.date).toLocaleDateString()
                            : "Sin fecha"}
                        </td>
                        <td>{evento.type || "Sin tipo"}</td>
                        <td>
                          {evento.resources?.length > 0 ? (
                            <ul className="mb-0 ps-3 text-start">
                              {evento.resources.map((s, i) => (
                                <li key={i}>{s}</li>
                              ))}
                            </ul>
                          ) : (
                            <em>Sin servicios</em>
                          )}
                        </td>
                        <td>
                          {evento.resourcesPrice != null
                            ? `$${evento.resourcesPrice.toFixed(2)}`
                            : "Sin precio"}
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              evento.status === "PROGRAMADO"
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                          >
                            {evento.status}
                          </span>
                        </td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => navigate(`/actualizar-evento/${evento._id}`)}
                          >
                            Editar
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => navigate(`/eliminar-evento/${evento._id}`)}
                          >
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
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