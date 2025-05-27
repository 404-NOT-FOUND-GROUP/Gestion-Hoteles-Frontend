import { useState } from "react";
import { updatePassword } from "../../services/api.jsx"; // ajusta la ruta según tu estructura

export const useUpdatePassword = (userId) => {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!form.oldPassword || !form.newPassword || !form.confirmNewPassword) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (form.newPassword !== form.confirmNewPassword) {
      setError("La nueva contraseña y la confirmación no coinciden.");
      return;
    }

    setIsLoading(true);

    const response = await updatePassword(userId, form.oldPassword, form.newPassword);

    if (response.error) {
      setError(response.message);
    } else {
      setSuccessMsg("Contraseña actualizada correctamente.");
      setForm({ oldPassword: "", newPassword: "", confirmNewPassword: "" });
    }

    setIsLoading(false);
  };

  return {
    form,
    isLoading,
    error,
    successMsg,
    handleChange,
    handleSubmit,
  };
};
