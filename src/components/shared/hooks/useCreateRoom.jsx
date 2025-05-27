import { useState } from 'react';
import toast from 'react-hot-toast';
import { createRoom } from "../../services/api.jsx";

export const initialForm = { 
    number: '',
    hotel: '',
    type: '',
    image: null,
    price: '',
}

export const useCreateRoom = () => {
  const [form, setForm] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== "") formData.append(key, value);
    });

    const response = await createRoom(formData);

    if (response?.error) {
      toast.error(response.message || "Error al crear habitacion");
    } else {
      toast.success("Habitacion creada correctamente");
      setForm(initialForm);
    }

    setIsLoading(false);
  };

  return { form, isLoading, handleChange, handleSubmit };
};