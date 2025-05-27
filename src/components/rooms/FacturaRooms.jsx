import React, { useEffect, useState } from 'react';
import { useRoomsPDF } from '../shared/hooks/useRoomsPDF';
import { Navbar } from '../navs/Navbar';
import { Sidebar } from '../navs/Sidebar';
import { useReservationRoomOpcion } from '../shared/hooks/useReservationRoomOpcion';

export const FacturaRooms = () => {
  const [selectedReservation, setSelectedReservation] = useState('');
  const { pdfUrl, loading, error, fetchPDF, downloadPDF, printPDF } = useRoomsPDF();
  const { reservationRooms, isLoading: loadingReservations, fetchReservationRooms } = useReservationRoomOpcion();

  useEffect(() => {
    fetchReservationRooms();
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
          <h3 className="mb-4">🛏️ Generar Factura de Habitación</h3>

          <div className="mb-4 d-flex justify-content-center align-items-center gap-3 flex-wrap">
            <select
              className="form-control"
              style={{ width: '400px', maxWidth: '100%' }}
              value={selectedReservation}
              onChange={e => setSelectedReservation(e.target.value)}
              disabled={loadingReservations}
            >
              <option value="">-- Selecciona una reservación --</option>
              {reservationRooms.length === 0 && !loadingReservations && (
                <option value="">No hay reservaciones disponibles</option>
              )}
              {reservationRooms.map(room => (
                <option key={room._id} value={room._id}>
                  {room.room ? `Habitación ${room.room.number} - 
                  Hotel ${room.room.hotel}` : `Reservación ${room._id}`}
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
