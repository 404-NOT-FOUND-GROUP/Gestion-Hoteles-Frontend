import { useState } from "react";
import toast from "react-hot-toast";
import { getListReservationRooms } from "../../services/api.jsx";

export const useReservationRoomOpcion = () => {
  const [reservationRooms, setReservationRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReservationRooms = async () => {
    setIsLoading(true);
    const response = await getListReservationRooms();
    console.log("Respuesta reservaciones:", response);
    if (response?.error) {
      toast.error(response.message || "Error al obtener habitaciones de reserva");
    } else {
      setReservationRooms(response.data?.reservations || []);
    }
    setIsLoading(false);
  };

  return { reservationRooms, isLoading, fetchReservationRooms };
}