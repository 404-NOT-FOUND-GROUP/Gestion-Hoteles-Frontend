import { useState } from "react";
import toast from "react-hot-toast";
import { cancelReservationEvent } from "../../services/api.jsx";

export const useCancelReservationEvent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const cancelReservation = async (rid) => {
    setIsLoading(true);
    try {
      const response = await cancelReservationEvent(rid);
      if (response.error) {
        throw new Error(response.message);
      }
      toast.success("Reservación cancelada exitosamente");
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Error al cancelar la reservación");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, cancelReservation };
}