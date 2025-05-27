import { useState, useEffect } from "react";
import { getHotelById } from "../../services";
import toast from "react-hot-toast";

export const useGetHotelById = (hid) => {
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!hid) return;
    const fetchHotel = async () => {
      setIsLoading(true);
      const response = await getHotelById(hid);
      if (response?.error) {
        toast.error(response.message || "Error al obtener hotel");
      } else {
        setHotel(response.data?.hotel || null);
      }
      setIsLoading(false);
    };
    fetchHotel();
  }, [hid]);

  return { hotel, isLoading };
};