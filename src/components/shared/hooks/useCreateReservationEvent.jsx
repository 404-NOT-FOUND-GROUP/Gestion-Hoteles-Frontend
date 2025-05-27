import { useState } from "react";
import toast from "react-hot-toast";
import { createReservationEvent } from "../../services/api.jsx";

export const initialForm = {
  checkInDate: "",
  checkOutDate: "",
};

export const useCreateReservationEvent = () => {
  const [form, setForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Recibe eid como argumento
  const handleSubmit = async (e, eid) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await createReservationEvent(eid, form);

    if (response?.error) {
      toast.error(response.message || "Error al crear evento de reserva");
    } else {
      toast.success("Evento de reserva creado correctamente");
      setForm(initialForm);
    }

    setIsLoading(false);
  };

  return { form, isLoading, handleChange, handleSubmit };
};