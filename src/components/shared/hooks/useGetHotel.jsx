import { useState, useEffect } from "react";
import { getHotels } from "../../services";
import toast from "react-hot-toast";

export const useGetHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    fetchHotels();
  }, []);

  return { hotels, isLoading };
};