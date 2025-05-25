import React from 'react'
import { useListarEventos } from '../shared/hooks/useListarEventos'
import { Navbar } from '../navs/Navbar'
import { Sidebar } from '../navs/Sidebar'

export const ListarEventos = () => {
  const { eventos, isLoading, error } = useListarEventos();

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
      width: "130%",        // ancho más grande que antes (más ancho que el contenedor)
      maxWidth: "2200px",   // límite máximo ancho más grande
      minHeight: "30px",
      margin: "0 auto",
      boxShadow: "none",    // sin sombra
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
