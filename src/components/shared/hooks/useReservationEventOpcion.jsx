import { useState } from "react";
import toast from "react-hot-toast";
import { getListReservationEvents } from "../../services/api.jsx";

export const useReservationEventOpcion = () => {
  const [reservationEvents, setReservationEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReservationEvents = async () => {
    setIsLoading(true);
    const response = await getListReservationEvents();
    console.log("Respuesta reservaciones eventos:", response);
    if (response?.error) {
      toast.error(response.message || "Error al obtener reservaciones de eventos");
    } else {
      setReservationEvents(response.data?.reservations || []);
    }
    setIsLoading(false);
  };

  return { reservationEvents, isLoading, fetchReservationEvents };
};