import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const CategorySection = () => {
    const categories = [
        {
            name: "Men's Collection",
            image: "https://i.ibb.co/KxNJS8N7/men-Banner-Image.png",
            link: "/men",
            description: "Elevate your style with menswear"
        },
        {
            name: "Women's Fashion",
            image: "https://i.ibb.co/pjQRhLrk/exclusive-image.png",
            link: "/women",
            description: "Discover timeless elegance"
        },
        {
            name: "Kids' Corner",
            image: "https://i.ibb.co/tPw2pGXM/kids-Banner.png",
            link: "/kid",
            description: "Adorable styles for little ones"
        },
    ];



    return (
        <div className="w-full py-10 bg-[#f6f8f8]">
            <div className="w-11/12 mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10">
                   
                    <h2 className="text-2xl md:text-3xl font-medium uppercase text-center mb-2">
                        <span className="text-gray-500">Shop by</span> Category
                    </h2>
                    <p className=" text-gray-500 max-w-2xl mx-auto">
                        Explore our handpicked selections for every style and occasion
                    </p>
                </div>

                {/* Marquee Categories */}
                <Marquee
                    pauseOnHover={true}
                    speed={30}
                    gradient={true}
                    gradientWidth={100}
                    gradientColor={[248, 250, 252]}
                >
                    <div className="flex gap-8 py-4 pl-2">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-lg w-[320px] md:w-[432px] h-[480px] transition-all duration-500 "
                            >
                                {/* Background Image */}
                                <img
                                    src={category?.image}
                                    alt={category?.name}
                                    className="absolute inset-0 w-full h-full object-cover md:object-contain transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                                {/* Category Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                    <span className="text-sm font-medium mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        NEW COLLECTION
                                    </span>
                                    <h3 className="text-3xl font-bold mb-3 transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-300 mb-6 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {category.description}
                                    </p>
                                    <Link
                                        to={category.link}
                                        className=" inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white shadow-xl w-fit group border-2 border-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 "
                                    >
                                        Shop Now
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </Link>
                                </div>
                            
                            </div>
                        ))}
                    </div>
                </Marquee>

            </div>
        </div>
    );
};

export default CategorySection;
