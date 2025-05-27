import { useState, useEffect, useCallback } from "react";
import { listEvents } from "../../services";

export const useListEvent = () => {
  const [eventos, setEventos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Función para obtener eventos desde backend
  const fetchEventos = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await listEvents();

      // Si la función listarEventos devuelve error con estructura { error: true }
      if (response?.error) {
        throw new Error(response.message || "Error inesperado al obtener eventos");
      }

      // Validamos estructura exitosa y contenido válido
      if (response?.data?.success && Array.isArray(response.data.events)) {
        setEventos(response.data.events);
      } else {
        throw new Error(response?.data?.msg || "Respuesta inválida del servidor");
      }
    } catch (err) {
      // Manejamos diferentes formas de obtener el mensaje de error
      const mensaje =
        err?.response?.data?.msg || 
        err.message ||              
        "Error al cargar eventos";
      setError(mensaje);
      setEventos([]); // limpiamos eventos en error
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Ejecutamos al montar el hook para cargar datos
  useEffect(() => {
    fetchEventos();
  }, [fetchEventos]);

  return {
    eventos,
    isLoading,
    error,
    refetch: fetchEventos,
  };
};
