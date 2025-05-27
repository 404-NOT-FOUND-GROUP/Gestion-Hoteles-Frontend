import { useState, useEffect, useCallback} from 'react'
import { listRooms } from '../../services'

export const useRoomList = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRooms = useCallback(async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await listRooms();

      if (response?.error) {
        throw new Error(response.message || "Error inesperado al obtener habitaciones");
      }

      if (response?.data?.success && Array.isArray(response.data.rooms)) {
        setRooms(response.data.rooms);
      } else {
        throw new Error(response?.data?.msg || "Respuesta inválida del servidor");
      }
    } catch (err) {
      const mensaje =
        err?.response?.data?.msg ||
        err.message ||
        "Error al cargar habitaciones";
      setError(mensaje);
      setRooms([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return { rooms, isLoading, error, refetch: fetchRooms };
};
