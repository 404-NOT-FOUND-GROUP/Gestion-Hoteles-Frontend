import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Register, ContraseñaOlvidada, ActualizaContraseña } from "../pages/auth";
import { CreateHotel, UpdateHotel, DeleteHotel, GetHotel} from "../hotels";
import { ListRoom, RoomInvoice } from "../rooms";
import { ListEvents, EventsInvoice } from "../events";

import { Unauthorized } from "../pages/unauthorized/Unauthorized.jsx";

export const Content = () => {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/register" element={<Register />} />
      <Route path="/olvido" element={<ContraseñaOlvidada />} />
      <Route path="/actualiza" element={<ActualizaContraseña />} />
      <Route path="/hotel/GetHotel" element={<GetHotel />} />
      <Route path="/room/list" element={<ListRoom />} />

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

      <Route
        path="/event/list" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <ListEvents />
          </ProtectedRoute>
        }
      />

      {/* Rutas protegidas solo para SOPORT */}

      {/* Rutas protegidas solo para USER*/}

      <Route
        path="/reservation/roomVoice" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]}>
            <RoomInvoice />
          </ProtectedRoute>
        }
      />

      <Route
        path="/reservation/eventVoice" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]}>
            <EventsInvoice />
          </ProtectedRoute>
        }
      />

      {/* Rutas protegidas solo para USER y ADMIN*/}



        
      {/* Ruta para acceso no autorizado */}
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Redirección de ruta no válida */}
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
};
