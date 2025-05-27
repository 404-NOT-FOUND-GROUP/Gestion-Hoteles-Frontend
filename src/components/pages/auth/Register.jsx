import { Link, useNavigate } from "react-router-dom";
import { useRegisterUser } from "../../shared/hooks/useRegister";
import toast from "react-hot-toast";
import { useState } from "react";

export const Register = () => {
  const {
    form,
    isLoading,
    handleChange,
    handleSubmit,
  } = useRegisterUser();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      form.password.length < 8 ||
      !/[A-Z]/.test(form.password) ||
      !/[a-z]/.test(form.password) ||
      !/[0-9]/.test(form.password) ||
      !/[^A-Za-z0-9]/.test(form.password)
    ) {
      toast.error(
        "Usa al menos 8 caracteres, con mayúsculas, minúsculas, un número y un símbolo."
      );
      return;
    }

    if (!/^\d{8}$/.test(form.phone)) {
      toast.error("El teléfono debe tener exactamente 8 dígitos.");
      return;
    }

    await handleSubmit(e);
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className="table-responsive"
      style={{
        marginTop: "75px",
        paddingBottom: "2rem",
        minHeight: "calc(100vh - 100px)",
        overflowY: "auto",
      }}
    >
      <div
        className="container d-flex justify-content-center align-items-start"
        style={{ minHeight: "100vh", paddingTop: "10px" }}
      >
        <div className="row justify-content-center w-100">
          <div
            className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5"
            style={{ minWidth: "340px", maxWidth: "400px", margin: "0 auto" }}
          >
            <div className="card shadow border-0">
              <div
                className="card-header text-white text-center"
                style={{ background: "#17486b", fontSize: "1.5rem", fontWeight: "bold" }}
              >
                Registro de Usuario
              </div>
              <div className="card-body">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      maxLength={25}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      name="surname"
                      value={form.surname}
                      onChange={handleChange}
                      required
                      maxLength={25}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      maxLength={8}
                      minLength={8}
                      pattern="\d{8}"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <div className="position-relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className="form-control"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        className="position-absolute top-50 end-0 translate-middle-y btn btn-link"
                        onClick={togglePasswordVisibility}
                        style={{ zIndex: 1 }}
                        tabIndex={-1}
                      >
                        {passwordVisible ? "🙈" : "👁️"}
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn w-100"
                    type="submit"
                    style={{
                      background: "#17486b",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                    disabled={isLoading}
                  >
                    {isLoading ? "Registrando..." : "Registrar"}
                  </button>
                </form>
              </div>
              <div className="card-footer bg-light text-center">
                ¿Ya tienes cuenta?{" "}
                <Link to="/" className="text-decoration-underline" style={{ color: "#17486b" }}>
                  Iniciar sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};