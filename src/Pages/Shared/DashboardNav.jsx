import { Link } from "react-router-dom";
import logo from "../../assets/Assets/logo.png"
import image from "../../assets/Assets/logo.png"

const DashboardNav = () => {
    return (
        <div className="border-l border-gray-600 hidden md:flex w-full h-[60px] bg-[#23272f]">

            <div className="w-full flex justify-between items-center px-10">
                {/* left side */}
                    <div>
                        <img src={image} alt="" className="w-[25px]" />
                    </div>
                {/* right side */}
                <Link to="/">
                    <div className=" flex items-center gap-1 text-white">
                        <img className="w-[25px]" src={logo} alt="" />
                        <p className="text-[20px] font-semibold uppercase">Shop<span className="text-secondary">Per</span></p>

                    </div>
                </Link>
            </div>
        </div>
    );
};

export default DashboardNav;