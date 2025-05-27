import { useVerificarUsuario } from "../../shared/hooks/useVerifica";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ContraseñaOlvidada = () => {
  const {
    email,
    setEmail,
    userDetails,
    isLoading,
    verificarUsuario,
  } = useVerificarUsuario();

  const navigate = useNavigate();

  useEffect(() => {
    if (userDetails) {
      navigate("/actualiza", { state: { uid: userDetails.id } });
    }
  }, [userDetails, navigate]);

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
                Verificar Usuario por Email
              </div>
              <div className="card-body">
                <form onSubmit={verificarUsuario}>
                  <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
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
                    {isLoading ? "Verificando..." : "Verificar Usuario"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};