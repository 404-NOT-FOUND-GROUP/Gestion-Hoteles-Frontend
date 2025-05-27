import { useState } from "react";
import toast from "react-hot-toast";
import { cancelReservationRoom } from "../../services/api.jsx";

export const useCancelReservationRoom = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const cancelReservation = async (rid) => {
    setIsLoading(true);
    try {
      const response = await cancelReservationRoom(rid);
      if (response.error) {
        throw new Error(response.message);
      }
      toast.success("Reservación de habitación cancelada exitosamente");
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Error al cancelar la reservación de habitación");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, cancelReservation };
};