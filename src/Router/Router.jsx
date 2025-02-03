import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            
            
        ]
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])