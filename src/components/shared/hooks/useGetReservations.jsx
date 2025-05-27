import { useEffect, useState } from "react";
import { getReservations } from "../../services/api.jsx";

export const useGetReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      setIsLoading(true);
      const result = await getReservations();
      if (result.error) {
        setError(result.message);
        setReservations([]);
      } else {
        setReservations(result.data);
        setError(null);
      }
      setIsLoading(false);
    };

    fetchReservations();
  }, []);

  return { reservations, isLoading, error };
};