import { Dashboard404 } from "./components/pages/dasboardpage/Dashboard404.jsx";
import { Register } from "./components/pages/auth/Register.jsx";
import { Login } from "./components/pages/auth/Login";
import { ContraseñaOlvidada } from "./components/pages/auth/ContraseñaOlvidada"
import { ActualizaContraseña } from "./components/pages/auth/ActualizaContraseña";

export const routes = [
    {path: '/', element: <Login/>},
    {path: '/register', element: <Register/>},
    {path: '/olvido', element: <ContraseñaOlvidada/>},
    {path: '/actualiza', element: <ActualizaContraseña/>},
    {path: '/dashboard', element: <Dashboard404/>},
    
]