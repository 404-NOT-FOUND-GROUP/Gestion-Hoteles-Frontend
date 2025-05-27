import { useState } from "react";
import toast from "react-hot-toast";
import { register } from "../../services";

export const useRegisterUser = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await register(form);

    if (response?.error) {
      toast.error(
        response.e?.response?.data?.message || "Error al registrar usuario"
      );
    } else {
      toast.success("Usuario registrado correctamente");
      setForm({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
      });
    }

    setIsLoading(false);
  };

  return { form, isLoading, handleChange, handleSubmit };
};
