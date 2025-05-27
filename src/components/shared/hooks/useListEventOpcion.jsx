import { useState } from "react";
import toast from "react-hot-toast";
import { getListEvents } from "../../services/api.jsx";

export const useListEvent = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchEvents = async () => {
    setIsLoading(true);
    const response = await getListEvents();
    if (response?.error) {
      toast.error(response.message || "Error al obtener eventos");
    } else {
      setEvents(response.data?.events || []);
    }
    setIsLoading(false);
  };

  return { events, isLoading, fetchEvents };
}