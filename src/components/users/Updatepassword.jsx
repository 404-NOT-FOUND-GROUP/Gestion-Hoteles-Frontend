import React from "react";
import { useLoggedUserId } from "../shared/hooks/useLoggedId.jsx";
import { useUpdatePassword } from "../shared/hooks/useUpdatepassword.jsx";
import VerCuenta from "./verCuenta.jsx";

import "../users/usersStyles/updateuser.css";


const ChangePassword = () => {
  const userId = useLoggedUserId();
  const { form, isLoading, error, successMsg, handleChange, handleSubmit } = useUpdatePassword(userId);

  if (!userId) {
    return <div className="text-white">Cargando usuario...</div>; 
  }

  return (
     <>
      <VerCuenta />
    <div className="centered-page">
      <div className="update-user-container">
        <h2 className="mb-4">Cambiar Contraseña</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Contraseña Actual:</label>
            <input
              type="password"
              name="oldPassword"
              value={form.oldPassword || ""}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Nueva Contraseña:</label>
            <input
              type="password"
              name="newPassword"
              value={form.newPassword || ""}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Confirmar Nueva Contraseña:</label>
            <input
              type="password"
              name="confirmNewPassword"
              value={form.confirmNewPassword || ""}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {successMsg && <div className="success-message">{successMsg}</div>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Actualizando..." : "Actualizar Contraseña"}
          </button>
        </form>
      </div>
    </div>
     </>
  );
};

export default ChangePassword;
