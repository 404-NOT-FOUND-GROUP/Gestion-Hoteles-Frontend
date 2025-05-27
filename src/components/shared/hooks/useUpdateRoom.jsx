import { useState } from 'react';
import toast from 'react-hot-toast';
import { updateRoom } from '../../services/api.jsx';

export const useUpdateRoom = (initialRoom) => {
  const [form, setForm] = useState(initialRoom || {});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e, hid) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== "") formData.append(key, value);
    });

    const response = await updateRoom(hid, formData);

    if (response?.error) {
      toast.error(response.message || "Error al actualizar la habitacion");
    } else {
      toast.success("Habitacion actualizada correctamente");
    }

    setIsLoading(false);
  };

  return { form, isLoading, handleChange, handleSubmit, setForm };
};