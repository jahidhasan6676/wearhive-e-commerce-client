import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const CategorySection = () => {
    const categories = [
        {
            name: "Men",
            image: "https://i.ibb.co/KxNJS8N7/men-Banner-Image.png",
            link: "/men"
        },
        {
            name: "Women",
            image: "https://i.ibb.co/pjQRhLrk/exclusive-image.png",
            link: "/women"
        },
        {
            name: "Kids",
            image: "https://i.ibb.co/tPw2pGXM/kids-Banner.png",
            link: "/kid"
        },
    ];

    return (
        <div className="w-11/12 mx-auto py-20">
            <h2 className="text-2xl md:text-3xl font-medium uppercase text-center mb-10">
                <span className="text-gray-500">Shop by</span> Category
            </h2>

            {/* Marquee Wrapper */}
            <Marquee pauseOnHover={true} speed={50} gradient={true} gradientWidth={50}>
                <div className="flex gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md border hover:border-none w-[300px] md:w-[350px] lg:w-[400px] mx-3"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-auto max-h-[400px] object-contain transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                            </div>
                            <Link to={category.link}>
                                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white text-black px-4 py-2 rounded-lg shadow-md font-semibold">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default CategorySection;
