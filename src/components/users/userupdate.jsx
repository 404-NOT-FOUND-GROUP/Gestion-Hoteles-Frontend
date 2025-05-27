import React from "react";
import { useLoggedUserId } from "../shared/hooks/useLoggedId.jsx";
import { useUpdateUser } from "../shared/hooks/useUpdateUser.jsx";
import VerCuenta from "./verCuenta.jsx";

import "../users/usersStyles/updateuser.css";

const UpdateUser = () => {
  const userId = useLoggedUserId();
  const { form, isLoading, handleChange, handleSubmit } = useUpdateUser(userId);

  if (!userId) {
    return <div className="text-white">Cargando usuario...</div>;
  }

  return (
    <>
      <VerCuenta />

      <div className="centered-page">
        <div className="update-user-container">
          <h2 className="mb-4">Actualizar Datos de Usuario</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label>Nombre:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Apellido:</label>
              <input
                type="text"
                className="form-control"
                name="surname"
                value={form.surname || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Teléfono:</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={form.phone || ""}
                onChange={handleChange}
                required
                maxLength={8}
                minLength={8}
              />
            </div>

            <button type="submit" disabled={isLoading}>
              {isLoading ? "Actualizando..." : "Actualizar"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
