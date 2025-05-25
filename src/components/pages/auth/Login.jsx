import { Link } from "react-router-dom";
import { useLoginUser } from "../../shared/hooks/useLogin";
import { useState } from "react";

export const Login = () => {
  const { form, isLoading, handleChange, handleSubmit } = useLoginUser();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

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
                Iniciar Sesión
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Correo electronico</label>
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
                    {isLoading ? "Ingresando..." : "Ingresar"}
                  </button>
                </form>
                <div className="text-center mt-3">
                  <Link to="/olvido" className="text-decoration-underline" style={{ color: "#17486b" }}>
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
              </div>
              <div className="card-footer bg-light text-center">
                ¿No tienes cuenta?{" "}
                <Link to="/register" className="text-decoration-underline" style={{ color: "#17486b" }}>
                  Regístrate aquí
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 