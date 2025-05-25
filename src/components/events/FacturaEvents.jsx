import React, {useState} from 'react'
import { useEventoPDF } from '../shared/hooks/useEventoPDF'
import { Navbar } from '../navs/Navbar'
import { Sidebar } from '../navs/Sidebar'

export const FacturaEvents = () => {
  const [id, setId] = useState('');
  const { pdfUrl, loading, error, fetchPDF, downloadPDF, printPDF } = useEventoPDF();

  return (
    <>
      <Navbar />
      <Sidebar />

      {/* Contenedor principal: centra todo horizontalmente y da espacio arriba y abajo */}
      <div
        className="d-flex justify-content-center align-items-start w-100"
        style={{
          paddingTop: '50px',
          paddingBottom: '5rem',
          minHeight: '20vh', // altura mínima para que ocupe toda la pantalla verticalmente
          backgroundColor: '#f8f9fa', // color de fondo suave
        }}
      >
        {/* Caja blanca central que contiene todo el contenido principal */}
        <div
          className="bg-white p-5 rounded shadow"
          style={{
            width: '150%',         // ancho del 80% del viewport para que sea grande y con margen lateral
            maxWidth: '1400px',   // ancho máximo para pantallas grandes
            textAlign: 'center',  // centra el texto y contenido dentro
            marginTop: '20px'
          }}
        >
          {/* Título principal */}
          <h3 className="mb-4">🧾 Generar Factura de Evento</h3>

          {/* Contenedor del input y botón, alineados en fila y centrados */}
          <div className="mb-4 d-flex justify-content-center align-items-center gap-3 flex-wrap">
            {/* Input para ingresar el ID de la reservación */}
            <input
              type="text"
              className="form-control"
              style={{ width: '400px', maxWidth: '100%' }} // ancho fijo, pero adaptable en pantallas chicas
              placeholder="Ingrese ID de reservación"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            {/* Botón para generar el PDF */}
            <button
              className="btn btn-primary"
              onClick={() => fetchPDF(id)}
              disabled={loading || !id} // deshabilitado si no hay id o está cargando
            >
              {loading ? 'Generando PDF...' : 'Generar PDF'}
            </button>
          </div>

          {/* Mensajes de error en alerta centrada */}
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {/* Vista previa del PDF: iframe con borde y tamaño grande */}
          {pdfUrl && (
            <div className="mt-4">
              <iframe
                src={pdfUrl}
                width="100%"           // ancho completo dentro de la caja principal
                height="600px"         // altura fija para buena visualización
                title="Vista previa del PDF"
                style={{ border: '1px solid #ccc', borderRadius: '8px' }} // borde sutil y esquinas redondeadas
              />
              {/* Botones para descargar o imprimir, alineados y con espacio entre ellos */}
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