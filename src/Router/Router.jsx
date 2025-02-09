import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../Layout/MainLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProduct from "../Pages/Dashboard/sellerHome/AddProduct";
import MyProduct from "../Pages/Dashboard/sellerHome/MyProduct";
import SellerRoute from "./SellerRoute";
import Cart from "../Pages/Dashboard/customer/Cart";
import PrivateRoute from "./PrivateRoute";


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
            // customer route
            {
                path:"cart",
                element:<Cart/>
            },
            // seller route

            {
                path:"addProduct",
                element:<PrivateRoute><SellerRoute><AddProduct/></SellerRoute></PrivateRoute>
            },
            {
                path:"myProduct",
                element:<PrivateRoute><SellerRoute><MyProduct/></SellerRoute></PrivateRoute>
            }
        ]
    }


])