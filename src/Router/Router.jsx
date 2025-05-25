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
import MyProductUpdate from "../components/Dashboard/sellerHome/MyProductUpdate";
import Shop from "../Pages/Shop/Shop";
import PendingProduct from "../Pages/Dashboard/moderator/PendingProduct";
import ModeratorRoute from "./ModeratorRoute";
import ApproveProduct from "../Pages/Dashboard/moderator/ApproveProduct";
import RejectedProduct from "../Pages/Dashboard/moderator/RejectedProduct";
import ManageUsers from "../Pages/Dashboard/admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import ProductDetails from "../Pages/ProductDetails";
import Profile from "../Pages/Dashboard/allRole/Profile";
import Wishlist from "../Pages/wishlist/Wishlist";
import Checkout from "../components/Dashboard/CustomerHome/paymentWork/CheckOut";
import StripePayment from "../components/Dashboard/CustomerHome/paymentWork/stripe-payment/StripePayment";
import MyOrder from "../Pages/Dashboard/customer/MyOrder";
import PaymentHistory from "../Pages/Dashboard/customer/PaymentHistory";
import NewOrders from "../Pages/Dashboard/sellerHome/NewOrders";
import ProfileUpdate from "../Pages/Dashboard/allRole/ProfileUpdate";
import Dashboard from "../Pages/Dashboard/admin/Dashboard";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import SellerDashboard from "../Pages/Dashboard/sellerHome/SellerDashboard";
import Blog from "../Pages/Blogs/Blog";
import AddBlogs from "../Pages/Dashboard/admin/AddBlogs";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import Chat from "../Pages/Dashboard/Chat/Chat";
import OrderHistory from "../Pages/Dashboard/sellerHome/OrderHistory";
import MyOrderHistory from "../Pages/Dashboard/customer/MyOrderHistory";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import SslPaymentError from "../components/ErrorPage/SslPaymentError";



export const router = createBrowserRouter([
    // main layout route
    {
        path:"/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            
            {
                path:"/productDetails/:id",
                element:<ProductDetails/>
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/blogDetails/:id",
                element:<BlogDetails/>
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
        //errorElement: <DashboardErrorPage/>,
        children:[
            // customer route
            
            {
                path:"cart",
                element:<PrivateRoute><Cart/></PrivateRoute>
            },
            {
                path:"checkout",
                element:<PrivateRoute><Checkout/></PrivateRoute>
            },
            {
                path:"stripePayment",
                element:<PrivateRoute><StripePayment/></PrivateRoute>
            },
            {
                path:"myOrder",
                element:<PrivateRoute><MyOrder/></PrivateRoute>
            },
            {
                path:"myOrderHistory",
                element:<PrivateRoute><MyOrderHistory/></PrivateRoute>
            },
            {
                path:"paymentHistory",
                element:<PrivateRoute><PaymentHistory/></PrivateRoute>
            },
            {
                path:"chat",
                element:<Chat/>
            },
            
            // seller route

            {
                path:"sellerDashboard",
                element:<PrivateRoute><SellerRoute><SellerDashboard/></SellerRoute></PrivateRoute>
            },
            {
                path:"addProduct",
                element:<PrivateRoute><SellerRoute><AddProduct/></SellerRoute></PrivateRoute>
            },
            {
                path:"myProduct",
                element:<PrivateRoute><SellerRoute><MyProduct/></SellerRoute></PrivateRoute>
            },
            {
                path:"myProductUpdate/:id",
                element:<PrivateRoute><SellerRoute><MyProductUpdate/></SellerRoute></PrivateRoute>
            },
            {
                path:"newOrders",
                element:<PrivateRoute><SellerRoute><NewOrders/></SellerRoute></PrivateRoute>
            },
            {
                path:"orderHistory",
                element:<PrivateRoute><SellerRoute><OrderHistory/></SellerRoute></PrivateRoute>
            },

            // moderator route

            {
                path:"pendingProduct",
                element:<PrivateRoute><ModeratorRoute><PendingProduct/></ModeratorRoute></PrivateRoute>
            },
            {
                path:"approveProduct",
                element:<PrivateRoute><ModeratorRoute><ApproveProduct/></ModeratorRoute></PrivateRoute>
            },
            {
                path:"rejectProduct",
                element:<PrivateRoute><ModeratorRoute><RejectedProduct/></ModeratorRoute></PrivateRoute>
            },

            // admin route

            {
                path:"manageUsers",
                element:<PrivateRoute><AdminRoute><ManageUsers/></AdminRoute></PrivateRoute>
            },
            {
                path:"adminDashboard",
                element:<PrivateRoute><AdminRoute><Dashboard/></AdminRoute></PrivateRoute>
            },
            {
                path:"addBlog",
                element:<PrivateRoute><AdminRoute><AddBlogs/></AdminRoute></PrivateRoute>
            },

            // all role

            {
                path:"profile",
                element:<PrivateRoute><Profile/></PrivateRoute>
            },
            {
                path:"profileUpdate",
                element:<PrivateRoute><ProfileUpdate/></PrivateRoute>
            }
        ]
    }


])