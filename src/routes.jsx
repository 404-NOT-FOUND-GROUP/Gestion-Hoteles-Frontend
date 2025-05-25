import {Ejemplo} from "./components/pages/dasboardpage";
import { Register } from "./components/pages/auth/Register.jsx";
import { Login } from "./components/pages/auth/Login";
import { ContraseñaOlvidada } from "./components/pages/auth/ContraseñaOlvidada"
import { ActualizaContraseña } from "./components/pages/auth/ActualizaContraseña";
//Eventos
import { ListarEventos } from "./components/events/ListarEventos.jsx";
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
    {path: '/listar-eventos', element: <ListarEventos/>},
    {path: '/factura-events', element: <FacturaEvents/>},
    //Rooms
    {path: '/listar-rooms', element: <ListarRooms/>},
    {path: '/factura-rooms', element: <FacturaRooms/>}
]