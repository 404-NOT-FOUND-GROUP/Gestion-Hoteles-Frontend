import React, { useState } from "react";
import toast from "react-hot-toast";
import { listReservationEvent } from "../../services/api.jsx";

export const useListReservationEvent = () => {
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchReservations = async () => {
    setIsLoading(true);
    try {
      const response = await listReservationEvent();
      if (response.error) {
        throw new Error(response.message);
      }
      setReservations(response.data?.reservations || []);
    } catch (err) {
      setError(err.message);
      toast.error(err.message || "Error fetching reservations");
    } finally {
      setIsLoading(false);
    }
  };

  return { reservations, isLoading, error, fetchReservations };
};