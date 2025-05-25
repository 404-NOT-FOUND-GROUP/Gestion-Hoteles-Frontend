import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { updatePasswordById } from "../../services";

export const useActualizarContraseña = () => {
  const [newPassword, setNewPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const uid = location.state?.uid;

  const actualizarContraseña = async (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      toast.error("La nueva contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (!uid) {
      toast.error("No se encontró el usuario para actualizar la contraseña.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await updatePasswordById(uid, newPassword);
      if (res.error) throw new Error(res.message);
      toast.success("Contraseña actualizada correctamente");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      toast.error(err.message || "Error al actualizar la contraseña");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    newPassword,
    setNewPassword,
    isLoading,
    actualizarContraseña,
  };
};
