import React, {useState} from 'react'
import {useRoomsPDF} from '../shared/hooks/useRoomsPDF'
import { Navbar } from '../navs/Navbar'
import { Sidebar } from '../navs/Sidebar'

export const FacturaRooms = () => {
  const [id, setId] = useState('');
  const { pdfUrl, loading, error, fetchPDF, downloadPDF, printPDF } = useRoomsPDF();

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
            <input
              type="text"
              className="form-control"
              style={{ width: '400px', maxWidth: '100%' }}
              placeholder="Ingrese ID de reservación"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={() => fetchPDF(id)}
              disabled={loading || !id}
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
