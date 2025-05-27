import { useState } from 'react';
import toast from 'react-hot-toast';
import { deleteRoom } from '../../services/api.jsx';

export const useDeleteRoom = () => { 
    const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (hid, onSuccess) => {
    setIsLoading(true);
    const response = await deleteRoom(hid);

    if (response?.error) {
      toast.error(response.message || "Error al eliminar habitacion");
    } else {
      toast.success("Habitacion eliminada correctamente");
      if (onSuccess) onSuccess();
    }

    setIsLoading(false);
  };

  return { isLoading, handleDelete };
};
