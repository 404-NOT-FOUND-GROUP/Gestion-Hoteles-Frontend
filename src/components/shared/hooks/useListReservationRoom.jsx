import { useState } from "react";
import toast from "react-hot-toast";
import { listReservationRoom } from "../../services/api.jsx";

export const useListReservationRoom = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    setIsLoading(true);
    try {
      const response = await listReservationRoom();
      if (response.error) {
        throw new Error(response.message);
      }
      setReservations(response.data?.reservations || []);
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Error al obtener reservaciones de habitaciones");
    } finally {
      setIsLoading(false);
    }
  };

  return { reservations, isLoading, error, fetchReservations };
};