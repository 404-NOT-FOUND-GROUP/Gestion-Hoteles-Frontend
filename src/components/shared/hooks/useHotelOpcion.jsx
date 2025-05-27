import { useState } from "react";
import toast from "react-hot-toast";
import { getHotels } from "../../services/api.jsx";

export const useHotelOpcion = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHotels = async () => {
    setIsLoading(true);
    const response = await getHotels();
    if (response?.error) {
      toast.error(response.message || "Error al obtener hoteles");
    } else {
      setHotels(response.data?.hotels || []);
    }
    setIsLoading(false);
  };

  return { hotels, isLoading, fetchHotels };
};