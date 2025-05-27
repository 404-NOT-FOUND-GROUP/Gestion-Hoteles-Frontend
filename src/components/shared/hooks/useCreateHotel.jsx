import { useState } from "react";
import toast from "react-hot-toast";
import { createHotel } from "../../services/api.jsx";

export const initialForm = {
  name: "",
  address: "",
  phone: "",
  description: "",
  image: null,
};

export const useCreateHotel = () => {
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

    const response = await createHotel(formData);

    if (response?.error) {
      toast.error(response.message || "Error al crear hotel");
    } else {
      toast.success("Hotel creado correctamente");
      setForm(initialForm);
    }

    setIsLoading(false);
  };

  return { form, isLoading, handleChange, handleSubmit };
};

