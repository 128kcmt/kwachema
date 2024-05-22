import { createBrowserRouter } from "react-router-dom"
import Home from "./Components-trial/Home"
import Login from "./Components-trial/login"
import App from "./App"

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
    {
      
        path:'/home',
    element:<Home/>,  
  },
  {
    path:'/Login',
    element:<Login/>,
  },
  

])
export default router
