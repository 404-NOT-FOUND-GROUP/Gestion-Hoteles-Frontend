import { Link } from "react-router-dom";

export const Unauthorized = () => (
  <div className="container text-center mt-5">
    <h1 className="text-danger">Acceso no autorizado</h1>
    <p>No tienes permiso para ver esta página.</p>
    <Link to="/dashboard" className="btn btn-primary">Volver al inicio</Link>
    <Link to="/" className="btn btn-primary">Iniciar Sesion</Link>

  </div>
);
