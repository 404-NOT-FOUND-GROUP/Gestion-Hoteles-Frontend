import { Dashboard404 } from "./components/pages/dasboardpage";
import { Login } from "./components/pages/auth/Login";
import { Content } from "./components/protectedRoutes";

export const routes = [
    {path: '/', element: <Login/>},
    {path: '/dashboard/*', element: <Dashboard404/>},
    {path: '/*', element: <Content/>},
    
]
