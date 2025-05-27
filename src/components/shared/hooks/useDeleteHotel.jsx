import { useState } from "react";
import toast from "react-hot-toast";
import { deleteHotel } from "../../services";

export const useDeleteHotel = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (hid, onSuccess) => {
    setIsLoading(true);
    const response = await deleteHotel(hid);

    if (response?.error) {
      toast.error(response.message || "Error al eliminar hotel");
    } else {
      toast.success("Hotel eliminado correctamente");
      if (onSuccess) onSuccess();
    }

    setIsLoading(false);
  };

  return { isLoading, handleDelete };
};