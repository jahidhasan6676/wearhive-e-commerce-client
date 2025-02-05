import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProduct from "../Pages/Dashboard/sellerHome/AddProduct";
import MyProduct from "../Pages/Dashboard/sellerHome/MyProduct";


export const router = createBrowserRouter([
    // main layout route
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            
            
        ]
    },

    // login and register route
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    },

    // dashboard route
    {
        path:"/dashboard",
        element:<DashboardLayout></DashboardLayout>,
        children:[
            // seller route

            {
                path:"addProduct",
                element:<AddProduct/>
            },
            {
                path:"myProduct",
                element:<MyProduct/>
            }
        ]
    }


])