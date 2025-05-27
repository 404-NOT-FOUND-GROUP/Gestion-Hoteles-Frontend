import {  useState, useCallback } from 'react'
import { generatePDF } from '../../services/api'

export const useRoomsPDF = () => {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPDF = useCallback(async (id) => {
    setLoading(true);
    setError("");

    try {
      const response = await generatePDF(id);

      if (response.error) {
        throw new Error(response.message);
      }

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      setError(err.message || "No se pudo generar el PDF");
      setPdfUrl(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const downloadPDF = () => {
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Factura_Habitacion.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const printPDF = () => {
    if (!pdfUrl) return;
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = pdfUrl;
    document.body.appendChild(iframe);
    iframe.onload = () => {
      iframe.contentWindow.print();
    };
  };

  return {
    pdfUrl,
    loading,
    error,
    fetchPDF,
    downloadPDF,
    printPDF,
  };
};
