import { useState } from "react";
import { updateUser } from "../../services/api.jsx"; // Asegúrate de tener esta función exportada

export const useUpdateUser = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, userId) => {
    e.preventDefault();
    if (!userId) return;

    setIsLoading(true);
    try {
      const response = await updateUser(userId, form);
      if (response.error) {
        console.error("Error al actualizar:", response.message);
      } else {
        console.log("Usuario actualizado con éxito:", response);
      }
    } catch (error) {
      console.error("Error inesperado:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { form, handleChange, handleSubmit, isLoading, setForm };
};
