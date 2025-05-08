import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import kidsBanner from "../../assets/Assets/kidsBannerImage.png"
import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import OurCommitment from "./OurCommitment";


const About = () => {
    return (
        <div>
            {/* banner */}
            <div className="bg-[#fcf6f6] w-full h-[250px]">
                <div className="h-full flex flex-col justify-center items-center">
                    <h2 className="text-2xl md:text-3xl font-medium mb-2">About Our Store</h2>
                    <p className="flex items-center"><Link to="/">Homepage</Link><span><IoIosArrowForward className="text-gray-500 text-sm"/></span> <span className="text-gray-500">About Our Store</span></p>
                </div>
            </div>
            {/* hero section */}
            <div className="py-20">
                <HeroSection/>
            </div>
            {/* our team */}
            <div>
                <OurTeam/>
            </div>
            {/* out commitment */}
            <div>
                <OurCommitment/>
            </div>
        </div>
    );
};

export default About;