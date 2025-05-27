import { Routes, Route, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { Register, ContraseñaOlvidada, ActualizaContraseña } from "../pages/auth";
import { CreateHotel, UpdateHotel, DeleteHotel, GetHotel} from "../hotels";
import { ReportReservation } from "../reports/ReportReservation.jsx"
import { CreateRoom, RoomInvoice, ListRoom, UpdateRoom, DeleteRoom } from "../rooms";
import { AddEvent, DeleteEvent, UpdateEvent, ListEvent, EventsInvoice,} from "../events";
import { CreateReservationEvent } from "../reservationsEvent/CreateReservationEvent.jsx";


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
      <Route path="/reservationEvent/Create" element={<CreateReservationEvent />} />
      

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
        path="/hotel/Report" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <ReportReservation />
          </ProtectedRoute>
        }
      />

      <Route
        path="/room/CreateRoom" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <CreateRoom />
          </ProtectedRoute>
        }
      />
      <Route
        path="/room/UpdateRoom" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <UpdateRoom />
          </ProtectedRoute>
        }
      />
      <Route
        path="/room/DeleteRoom" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE"]}>
            <DeleteRoom />
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

      <Route
        path="/reservationEvent/Create" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]}>
            <CreateReservationEvent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/event/createEvent" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]}>
            <AddEvent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/event/updateEvent" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]}>
            <UpdateEvent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/event/deleteEvent" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]}>
            <DeleteEvent />
          </ProtectedRoute>
        }
      />

      <Route
        path="/event/list" element={<ProtectedRoute allowedRoles={["ADMIN_ROLE", "USER_ROLE"]}>
            <ListEvent />
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
