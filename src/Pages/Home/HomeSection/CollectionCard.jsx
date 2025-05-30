import women from "../../../assets/Assets/women-pic.webp";
import men from "../../../assets/Assets/men-pic.webp";
import kid from "../../../assets/Assets/kid-pic.webp";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

const CollectionCard = () => {
    const collectionData = [
        {
            id: 1,
            title: "Best Collection",
            subtitle: "For Women",
            image: women,
            buttonText: "SHOP NOW"
        },
        {
            id: 2,
            title: "Best Collection",
            subtitle: "For Men",
            image: men,
            buttonText: "SHOP NOW"
        },
        {
            id: 3,
            title: "New Collection",
            subtitle: "For Kids",
            image: kid,
            buttonText: "SHOP NOW"
        }
    ];


    return (
        <div className="w-11/12 mx-auto pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {collectionData.map((item) => (
                    <div
                        key={item.id}
                        className="relative rounded-lg overflow-hidden"
                    >
                        <img
                            src={item.image}
                            alt={item.subtitle}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 bg-opacity-30 flex flex-col justify-center p-6 text-white">
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                            <p className="text-lg mb-4">{item.subtitle}</p>
                            <Link to="/shop">
                                <button className="relative overflow-hidden font-medium text-black bg-white text-sm px-6 py-2 rounded-full w-fit transition-all duration-500 
                                before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gray-800 before:transition-all before:duration-1000 hover:before:left-0 hover:text-white">
                                    <span className="relative z-10">{item.buttonText}</span>
                                </button>
                            </Link>
                        </div>


                    </div>
                ))}

            </div>
        </div>
    );
};

export default CollectionCard;