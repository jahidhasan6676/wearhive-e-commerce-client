import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import AIChat from "../components/AIChatBot/AIChat";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/loadingSpinner/LoadingSpinner";


const MainLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
                <LoadingSpinner/>
                {/* Rotating square */}
                {/* <div className="w-10 h-10 border-2 border-white animate-spin rotate-square"></div> */}

                {/* Loading text */}
                {/* <p className="mt-4 tracking-[0.4em] text-sm">LOADING</p> */}
            </div>
        );
    }

    return (
        <div>
            <AIChat />
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-464px)]">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;