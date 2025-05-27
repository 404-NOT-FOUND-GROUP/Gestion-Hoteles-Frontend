import { useState } from "react";
import { deleteEvent } from "../../services"
import toast from "react-hot-toast";

export const useDeleteEvent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleDelete = async (eid) => {
    setIsLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await deleteEvent(eid);
      if (response?.error) throw new Error(response.message || "Error al eliminar evento");
      if (response?.data?.success) {
        setSuccess(response.data.msg || "Evento eliminado correctamente");
        toast.success(response.data.msg || "Evento eliminado correctamente");
      } else {
        throw new Error(response?.data?.msg || "Respuesta inválida del servidor");
      }
    } catch (err) {
      setError(err.message || "Error al eliminar evento");
      toast.error(err.message || "Error al eliminar evento");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    success,
    handleDelete,
    setSuccess,
    setError,
  };
};