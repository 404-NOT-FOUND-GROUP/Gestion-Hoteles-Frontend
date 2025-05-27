import {Ejemplo} from "./components/pages/dasboardpage";
import { Register } from "./components/pages/auth/Register.jsx";
import { Login } from "./components/pages/auth/Login";
import { ContraseñaOlvidada } from "./components/pages/auth/ContraseñaOlvidada"
import { ActualizaContraseña } from "./components/pages/auth/ActualizaContraseña";
//Eventos
import { AddEvent } from "./components/events/AddEvent.jsx";
import { ListEvent } from "./components/events/ListEvent.jsx";
import { UpdateEvent } from "./components/events/UpdateEvent.jsx";
import { DeleteEvent } from "./components/events/DeleteEvent.jsx";
import { FacturaEvents } from "./components/events/FacturaEvents.jsx";
//Rooms
import { ListarRooms } from "./components/rooms/ListarRooms.jsx"
import { FacturaRooms } from "./components/rooms/FacturaRooms.jsx";

export const routes = [
    {path: '/', element: <Login/>},
    {path: '/register', element: <Register/>},
    {path: '/olvido', element: <ContraseñaOlvidada/>},
    {path: '/actualiza', element: <ActualizaContraseña/>},
    {path: '/dashboard', element: <Ejemplo/>},
    //Eventos
    {path: '/event/createEvent', element: <AddEvent/>},
    {path: '/listar-eventos', element: <ListEvent/>},
    {path: '/event/updateEvent/:eid', element: <UpdateEvent/>},
    {path: '/event/deleteEvent/:eid', element: <DeleteEvent/>},
    {path: '/factura-events', element: <FacturaEvents/>},
    //Rooms
    {path: '/listar-rooms', element: <ListarRooms/>},
    {path: '/factura-rooms', element: <FacturaRooms/>}
]