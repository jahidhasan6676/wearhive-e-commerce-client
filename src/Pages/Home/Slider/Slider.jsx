import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

const Slider = () => {
   
    const slides = [
        {
            id: 1,
            title: "Elevate Your Style",
            subtitle: "Premium Collection",
            description: "Discover timeless pieces crafted for the modern individual",
            cta: "Shop The Collection",
            image: "https://i.ibb.co.com/84fYhNpW/men.jpg",
            link: "/men",
            overlay: "bg-gradient-to-r from-black/60 to-black/30"
        },
        {
            id: 2,
            title: "Summer Essentials",
            subtitle: "Limited Time Offer",
            description: "Refresh your wardrobe with our curated seasonal selection",
            cta: "Explore Now",
            image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            link: "/women",
            overlay: "bg-gradient-to-r from-black/60 to-black/30"
        },
        {
            id: 3,
            title: "Comfort Meets Style",
            subtitle: "New Arrivals",
            description: "Experience unparalleled quality in every stitch",
            cta: "Discover More",
            image: "https://i.ibb.co.com/99VRyzf0/two.jpg",
            link: "/kid",
            overlay: "bg-gradient-to-r from-black/60 to-black/30"
        }
    ];

    return (
        <div 
            className="relative w-full mx-auto pb-20 overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                effect={'fade'}
                speed={1000}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} !w-3 !h-3 !mx-1.5 !bg-white !opacity-50 hover:!opacity-100 !transition-opacity !duration-300"></span>`;
                    },
                }}
               
                className="h-[600px]"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full h-full">
                            {/* Background Image with Dynamic Overlay */}
                            <div className="absolute inset-0">
                                <img 
                                    src={slide.image} 
                                    alt={slide.title}
                                    className="w-full h-full object-cover object-center transition-transform duration-10000 ease-linear scale-100 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className={`absolute inset-0 ${slide.overlay}`}></div>
                            </div>
                            
                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-center w-11/12 mx-auto">
                                <span className="text-lg font-medium text-white bg-white/20 px-4 py-1.5 rounded-full inline-block mb-6 w-fit backdrop-blur-sm border border-white/20">
                                    {slide.subtitle}
                                </span>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                                    {slide.title}
                                </h2>
                                <p className="text-xl text-gray-100 mb-8 max-w-2xl">
                                    {slide.description}
                                </p>
                                <Link
                                    to={slide.link}
                                    className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-xl w-fit group border-2 border-white"
                                >
                                    {slide.cta}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3 group-hover:translate-x-2 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
            
        </div>
    );
};

export default Slider;