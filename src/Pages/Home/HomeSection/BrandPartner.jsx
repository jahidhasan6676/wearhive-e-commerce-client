import { SiAdidas, SiNike, SiPuma, SiReebok, SiUnderarmour } from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import Marquee from "react-fast-marquee";

const BrandPartner = () => {
    const brands = [
        { name: "Puma", icon: <SiPuma className="text-4xl text-gray-800 hover:text-puma-red transition-colors" /> },
        { name: "Adidas", icon: <SiAdidas className="text-4xl text-gray-800 hover:text-adidas-blue transition-colors" /> },
        { name: "Nike", icon: <SiNike className="text-4xl text-gray-800 hover:text-nike-orange transition-colors" /> },
        { name: "Reebok", icon: <SiReebok className="text-4xl text-gray-800 hover:text-reebok-red transition-colors" /> },
        { name: "Under Armour", icon: <SiUnderarmour className="text-4xl text-gray-800 hover:text-ua-purple transition-colors" /> },
        { name: "Chanel", icon: <CgChanel className="text-4xl text-gray-800 hover:text-chanel-black transition-colors" /> }
    ];

    return (
        <section className="pb-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-medium uppercase mb-2">
                        <span className="text-gray-400">Our Trusted</span>{" "}
                        <span className="text-gray-800">Brand Partners</span>
                    </h2>
                    <p className="text-gray-500 text-center">
                        Collaborating with the world's most prestigious brands to bring you exceptional quality
                    </p>
                </div>

                <div className="bg-gray-50 py-8 rounded-xl shadow-sm border border-gray-100">
                    <Marquee 
                        speed={40} 
                        gradient={false} 
                        pauseOnHover={true}
                        autoFill={true}
                    >
                        {brands.map((brand, index) => (
                            <div
                                key={index}
                                className="mx-12 flex flex-col items-center justify-center group"
                            >
                                <div className="p-4 bg-white rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
                                    {brand.icon}
                                </div>
                                <h4 className="mt-3 text-lg font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                                    {brand.name}
                                </h4>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default BrandPartner;