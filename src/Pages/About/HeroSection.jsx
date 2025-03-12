import { Link } from "react-router-dom";
import heroImage from "../../assets/Assets/about-us.jpg"

const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center w-11/12 mx-auto">
            {/* Left Side - Image */}
            <div className="lg:w-1/2">
                <img
                    src={heroImage}
                    alt="Fashion Collection"
                    className="w-full rounded-lg shadow-sm"
                />
            </div>

            {/* Right Side - Text Content */}
            <div className="lg:w-1/2 text-left mt-6 lg:mt-0 lg:pl-10">
                <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
                    Your Fashion, Our Responsibility!
                </h1>
                <p className="text-lg text-gray-600 mt-4">
                    Welcome to our e-commerce platform, your ultimate destination for
                    trendy and high-quality fashion. We bring you the latest styles at
                    the best prices!
                </p>
                <ul className="text-gray-600 mt-3 space-y-2">
                    <li>✔️ Wide range of collections for men, women, and kids.</li>
                    <li>✔️ Premium quality at affordable prices.</li>
                    <li>✔️ Easy return policy and fast delivery.</li>
                    <li>✔️ Exciting seasonal discounts and exclusive offers.</li>
                    <li>✔️ A seamless shopping experience with secure payments.</li>
                    <li>✔️ Customer satisfaction is our top priority!</li>
                </ul>
                <Link to="/"><button className="mt-6 bg-black text-sm text-white px-6 py-3 rounded-full font-medium  hover:bg-gray-800 transition">
                    Shop Now & Elevate Your Style!
                </button></Link>
            </div>
        </div>
    );
};

export default HeroSection;
