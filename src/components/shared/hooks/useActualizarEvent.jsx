import { useState, useCallback } from "react";
import { updateEvent, findEventById } from "../../services";
import toast from "react-hot-toast";

export const useActualizarEvento = (eid) => {
  const [form, setForm] = useState({
    name: "",
    hotel: "",
    date: "",
    type: "",
    resources: [],
    status: "PROGRAMADO",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Cargar datos del evento
  const fetchEvento = useCallback(async () => {
    setIsLoading(true);
    setError("");
    try {
      const response = await findEventById(eid);
      if (response?.error) throw new Error(response.message || "Error al cargar evento");
      const evento = response.data?.event || {};
      // Asegura que hotel sea siempre el ID (string)
      setForm({
        name: evento.name || "",
        hotel:
          (typeof evento.hotel === "object" && evento.hotel !== null && evento.hotel._id)
            ? evento.hotel._id
            : (typeof evento.hotel === "string" ? evento.hotel : ""),
        date: evento.date ? evento.date.slice(0, 10) : "",
        type: evento.type || "",
        resources: evento.resources || [],
        status: evento.status || "PROGRAMADO",
      });
    } catch (err) {
      setError(err.message || "Error al cargar evento");
    } finally {
      setIsLoading(false);
    }
  }, [eid]);

  // Cambios en el formulario
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

  // Enviar actualización
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await updateEvent(eid, form);
      if (response?.error) throw new Error(response.message || "Error al actualizar evento");
      if (response?.data?.success) {
        setSuccess(response.data.msg || "Evento actualizado correctamente");
        toast.success(response.data.msg || "Evento actualizado correctamente");
      } else {
        throw new Error(response?.data?.msg || "Respuesta inválida del servidor");
      }
    } catch (err) {
      setError(err.message || "Error al actualizar evento");
      toast.error(err.message || "Error al actualizar evento");
    } finally {
      setIsLoading(false);
    }
  }, [eid, form]);

  return {
    form,
    isLoading,
    error,
    success,
    handleChange,
    handleSubmit,
    fetchEvento,
    setForm,
  };
};