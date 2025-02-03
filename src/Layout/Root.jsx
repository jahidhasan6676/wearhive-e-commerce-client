import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-464px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default Root;