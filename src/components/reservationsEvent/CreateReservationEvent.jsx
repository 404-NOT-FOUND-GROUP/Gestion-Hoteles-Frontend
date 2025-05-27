import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../navs";
import { Sidebar } from "../navs";
import { useCreateReservationEvent } from "../shared/hooks/useCreateReservationEvent.jsx";
import { useListEvent } from "../shared/hooks/useListEventOpcion.jsx";

export const CreateReservationEvent = () => {
  const { form, isLoading, handleChange, handleSubmit } = useCreateReservationEvent();
  const { events, isLoading: loadingEvents, fetchEvents } = useListEvent();
  const [eid, setEid] = useState("");

  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line
  }, []);
  

  const onSubmit = (e) => {
    e.preventDefault();
    if (!eid) {
      alert("Debes seleccionar un evento");
      return;
    }
    handleSubmit(e, eid);
  };

  return (
    <div>
      <Navbar />
      <Sidebar />

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
            onSubmit={onSubmit}
            className="w-100 p-5 rounded-4 shadow-lg border"
            style={{ maxWidth: "600px", backgroundColor: "#aeb6c0" }}
          >
            <h2 className="text-center mb-5" style={{ fontWeight: "900", color: "#164360" }}>
              Reservar Evento
            </h2>

            <div className="mb-3">
              <label htmlFor="eid" className="form-label fw-semibold">Selecciona un Evento</label>
              <select
                id="eid"
                name="eid"
                className="form-control"
                value={eid}
                onChange={e => setEid(e.target.value)}
                required
                disabled={loadingEvents}
              >
                <option value="">-- Selecciona un evento --</option>
                {events.map(event => (
                  <option key={event._id} value={event._id}>
                    {event.name} ({event.type}) - {event.date}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="checkInDate" className="form-label fw-semibold">Fecha de Entrada</label>
              <input
                id="checkInDate"
                name="checkInDate"
                type="date"
                className="form-control"
                value={form.checkInDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="checkOutDate" className="form-label fw-semibold">Fecha de Salida</label>
              <input
                id="checkOutDate"
                name="checkOutDate"
                type="date"
                className="form-control"
                value={form.checkOutDate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn text-white fw-semibold"
                style={{ backgroundColor: "#164360" }}
                disabled={isLoading || loadingEvents}
              >
                {isLoading ? "Reservando..." : "Reservar Evento"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};