import { useState } from "react";
import toast from "react-hot-toast";
import { findByEmail } from "../../services";

export const useVerificarUsuario = () => {
  const [email, setEmail] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const verificarUsuario = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setUserDetails(null);
    try {
      const res = await findByEmail(email);
      if (res.error) throw new Error(res.message);
      toast.success("Usuario encontrado");
      setUserDetails(res.data.userDetails);
    } catch (err) {
      toast.error(err.message || "Error al buscar el usuario");
      setUserDetails(null);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    setEmail,
    userDetails,
    isLoading,
    verificarUsuario,
  };
};
