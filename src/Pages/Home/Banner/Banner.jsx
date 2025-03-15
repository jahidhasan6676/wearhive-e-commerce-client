import hand_icon from "../../../assets/Assets/hand_icon.png"
import arrow_icon from "../../../assets/Assets/arrow.png"
import hero_image from "../../../assets/Assets/hero_image.png"
import { motion } from "framer-motion";
const Banner = () => {

    // Smooth scroll function
    const scrollToLatestProducts = () => {
        const section = document.getElementById("latest-products");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22)" }}
            className="md:h-[550px] relative"
        >
            <div className="w-11/12 mx-auto md:flex py-10 md:py-0">
                {/* left side */}
                <div className="flex-1 flex flex-col justify-center gap-3">
                    <h2 className="text-[20px] font-semibold text-text_primary">NEW ARRIVALS ONLY</h2>
                    <div className="">
                        <div className="flex items-center gap-3">
                            <p className="text-[40px] md:text-[60px] font-semibold text-text_secondary leading-[50px] md:leading-[70px]">new</p>
                            <img src={hand_icon} alt="" className="w-[60px]" />
                        </div>
                        <p className="text-[40px] md:text-[60px] font-semibold text-text_secondary leading-[50px] md:leading-[70px]">Collections</p>
                        <p className="text-[40px] md:text-[60px] font-semibold text-text_secondary leading-[50px] md:leading-[70px]">for everyone</p>
                    </div>
                    <div onClick={scrollToLatestProducts} className=" flex justify-center items-center bg-secondary text-white gap-2 w-fit px-6 py-2 rounded-xl cursor-pointer hover:bg-primary">
                        <div className="">Latest Collections</div>
                        <img src={arrow_icon} alt="" className="w-[20px]" />
                    </div>
                </div>
                {/* right side */}
                <div className="flex-1 flex justify-center items-center relative z-10">
                <motion.img 
                        src={hero_image} 
                        alt="" 
                        className="h-[500px]" 
                        animate={{ y: [0, -20, 0] }} 
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                </div>
            </div>
        </div>


    );
};

export default Banner;