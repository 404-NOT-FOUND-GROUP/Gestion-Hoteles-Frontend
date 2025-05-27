import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";

export const useLoginUser = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await loginRequest(form);
      const { token, role } = response.data.userDetails;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(response.data.userDetails));
      
      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Credenciales inválidas";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    error,
    handleChange,
    handleSubmit,
  };
};
