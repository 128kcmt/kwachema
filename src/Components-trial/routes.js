import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import login from "./Components/login";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/Home',
        element: <Home />
    },
    {
        path: '/login',
        element: <login />
    },
]);

export default router;