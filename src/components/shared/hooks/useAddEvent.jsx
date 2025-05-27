import { useState, useCallback } from "react";
import { createEvent } from "../../services";
import toast from "react-hot-toast";

export const initialForm = {
  name: "",
  hotel: "",
  date: "",
  type: "",
  resources: [],
  services: [],
};

export const useAddEvent = () => {
  const [form, setForm] = useState(initialForm);
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
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Si necesitas que reciba argumentos, puedes agregarlo aquí
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Validación de hotel (ObjectId de 24 caracteres hexadecimales)
    if (!form.hotel || !/^[a-f\d]{24}$/i.test(form.hotel)) {
      setIsLoading(false);
      setError("Debes seleccionar un hotel válido.");
      toast.error("Debes seleccionar un hotel válido.");
      return;
    }

    try {
      const response = await createEvent(form);

      if (response?.error) {
        throw new Error(response.message || "Error inesperado al crear evento");
      }

      if (response?.data?.status === "success") {
        setSuccess(response.data.message || "Evento creado correctamente");
        toast.success(response.data.message || "Evento creado correctamente");
        setForm(initialForm);
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