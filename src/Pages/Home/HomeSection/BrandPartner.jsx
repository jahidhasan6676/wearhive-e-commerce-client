import { SiAdidas, SiNike, SiPuma, SiReebok, SiUnderarmour } from "react-icons/si";
import { CgChanel } from "react-icons/cg";
import Marquee from "react-fast-marquee";

const BrandPartner = () => {
    const brands = [
        { name: "Puma", icon: <SiPuma className="w-[50px] h-[50px]" /> },
        { name: "Adidas", icon: <SiAdidas className="w-[50px] h-[50px]" /> },
        { name: "Nike", icon: <SiNike className="w-[50px] h-[50px]" /> },
        { name: "Reebok", icon: <SiReebok className="w-[50px] h-[50px]" /> },
        { name: "Under Armour", icon: <SiUnderarmour className="w-[50px] h-[50px]" /> },
        { name: "Chanel", icon: <CgChanel className="w-[50px] h-[50px]" /> }
    ];

    return (
        <div className="pb-20">
            <h2 className="text-2xl md:text-3xl font-medium uppercase text-center mb-10">
                <span className="text-gray-500">Our Trusted</span> Brand Partners
            </h2>
            <div className="bg-[#eaeaea] py-10">
                <Marquee speed={50} gradient={false} pauseOnHover={true}>
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="mx-24 flex flex-col justify-center items-center gap-2"
                        >
                            <p>{brand.icon}</p>
                            <h4 className="text-xl font-medium">{brand.name}</h4>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default BrandPartner;

