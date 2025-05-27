import { Dashboard404 } from "./components/pages/dashboardpage";
import { Login } from "./components/pages/auth";
import { Content } from "./components/protectedRoutes";

export const routes = [
    {path: '/', element: <Login/>},
    {path: '/dashboard/*', element: <Dashboard404/>},
    {path: '/*', element: <Content/>},
    
]
