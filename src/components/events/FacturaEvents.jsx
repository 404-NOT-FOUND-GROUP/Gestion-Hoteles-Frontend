import React, { useEffect, useState } from 'react';
import { useEventoPDF } from '../shared/hooks/useEventoPDF';
import { Navbar } from '../navs/Navbar';
import { Sidebar } from '../navs/Sidebar';
import { useReservationEventOpcion } from '../shared/hooks/useReservationEventOpcion';

export const FacturaEvents = () => {
  const [selectedReservation, setSelectedReservation] = useState('');
  const { pdfUrl, loading, error, fetchPDF, downloadPDF, printPDF } = useEventoPDF();
  const { reservationEvents, isLoading: loadingReservations, fetchReservationEvents } = useReservationEventOpcion();

  useEffect(() => {
    fetchReservationEvents();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <Sidebar />

      <div
        className="d-flex justify-content-center align-items-start w-100"
        style={{
          paddingTop: '50px',
          paddingBottom: '5rem',
          minHeight: '20vh',
          backgroundColor: '#f8f9fa',
        }}
      >
        <div
          className="bg-white p-5 rounded shadow"
          style={{
            width: '150%',
            maxWidth: '1400px',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          <h3 className="mb-4">🧾 Generar Factura de Evento</h3>

          <div className="mb-4 d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <select
              className="form-control"
              style={{ width: '400px', maxWidth: '100%' }}
              value={selectedReservation}
              onChange={e => setSelectedReservation(e.target.value)}
              disabled={loadingReservations}
            >
              <option value="">-- Selecciona una reservación --</option>
              {reservationEvents.length === 0 && !loadingReservations && (
                <option value="">No hay reservaciones disponibles</option>
              )}
              {reservationEvents.map(event => (
                <option key={event._id} value={event._id}>
                  {event.eventName
                    ? `${event.eventName} - ${event.date}`
                    : `${event.event.name} Hotel ${event.event.hotel}`}
                </option>
              ))}
            </select>
            <button
              className="btn btn-primary"
              onClick={() => fetchPDF(selectedReservation)}
              disabled={loading || !selectedReservation}
            >
              {loading ? 'Generando PDF...' : 'Generar PDF'}
            </button>
          </div>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {pdfUrl && (
            <div className="mt-4">
              <iframe
                src={pdfUrl}
                width="100%"
                height="600px"
                title="Vista previa del PDF"
                style={{ border: '1px solid #ccc', borderRadius: '8px' }}
              />
              <div className="mt-3 d-flex justify-content-center gap-3 flex-wrap">
                <button className="btn btn-success" onClick={downloadPDF}>
                  Descargar
                </button>
                <button className="btn btn-secondary" onClick={printPDF}>
                  Imprimir
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};