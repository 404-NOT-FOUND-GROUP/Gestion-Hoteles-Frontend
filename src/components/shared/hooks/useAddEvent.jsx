import { useState, useCallback } from "react";
import { createEvent } from "../../services"
import toast from "react-hot-toast";

export const useAddEvent = () => {
  const [form, setForm] = useState({
    name: "",
    hotel: "",
    date: "",
    type: "",
    resources: [],
    services: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        resources: checked
          ? [...prev.resources, value]
          : prev.resources.filter((r) => r !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await createEvent(form);

      if (response?.error) {
        throw new Error(response.message || "Error inesperado al crear evento");
      }

      if (response?.data?.status === "success") {
        setSuccess(response.data.message || "Evento creado correctamente");
        toast.success(response.data.message || "Evento creado correctamente");
        setForm({
          name: "",
          hotel: "",
          date: "",
          type: "",
          resources: [],
          services: [],
        });
      } else {
        throw new Error(response?.data?.message || "Respuesta inválida del servidor");
      }
    } catch (err) {
      const mensaje =
        err?.response?.data?.message ||
        err.message ||
        "Error al crear evento";
      setError(mensaje);
      toast.error(mensaje);
    } finally {
      setIsLoading(false);
    }
  }, [form]);

  return {
    form,
    isLoading,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};