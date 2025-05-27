import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Register, ContraseñaOlvidada, ActualizaContraseña } from "../pages/auth";
import { CreateHotel, UpdateHotel, DeleteHotel, GetHotel} from "../hotels/index.js";
import { ReportReservation } from "../reports/ReportReservation.jsx"
import { Unauthorized } from "../pages/unauthorized/Unauthorized.jsx";

export const Content = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/register" element={<Register />} />
      <Route path="/olvido" element={<ContraseñaOlvidada />} />
      <Route path="/actualiza" element={<ActualizaContraseña />} />
      <Route path="/hotel/GetHotel" element={<GetHotel />} />
      <Route path="/hotel/Report" element={<ReportReservation />} />

      {/* Rutas protegidas solo para ADMIN */}
      <Route
        path="/hotel/CreateHotel" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <CreateHotel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotel/UpdateHotel" element={ <ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <UpdateHotel />
          </ProtectedRoute>
        }
      />
      <Route
        path="/hotel/DeleteHotel" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <DeleteHotel />
          </ProtectedRoute>
        }
      />

      {/* Ruta para acceso no autorizado */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Redirección de ruta no válida */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
