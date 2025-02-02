import coverImg from '../../../assets/cover.jpg'
import framer1 from '../../../assets/framerMotion/framer1.jpg'
import framer2 from '../../../assets/framerMotion/framer2.jpg'
import framer3 from '../../../assets/framerMotion/framer3.jpg'
import { motion } from "motion/react"
import { easeOut } from 'motion';

const Banner = () => {
    return (
        <div
            className="hero h-[600px]"
            style={{
                backgroundImage: `url(${coverImg})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="flex w-9/12 mx-auto   text-white">
                {/* left side text */}
                <div className='space-y-6 flex-1'>
                    <h1 className='text-4xl font-semibold leading-[50px]'>Your Best Medical <br /> Help Center</h1>
                    <p className='text-sm font-medium'>We always provide better service to patients. Our mission is to <br /> heal our patients through service. Our help center is <br /> always open. You can contact us anytime
                    </p>
                    <button className='bg-[#F7A582] px-3 py-2 rounded-md'>All Service</button>
                </div>


                {/* right side */}
                <div className='flex space-x-4'>
                    <motion.img
                        src={framer1}
                        animate={{ y: [0, -30, 30, 0], rotate: [0, 10, -10, 0] }}
                        transition={{
                            duration: 18,
                            delay: 4,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                        }}
                        className='w-[200px] border-[6px] border-white shadow-2xl'
                        alt="Animation 1"
                    />

                    <motion.img
                        src={framer2}
                        animate={{ x: [0, 20, -20, 0], scale: [1, 1.1, 1, 1.1] }}
                        transition={{
                            duration: 16,
                            delay: 3,
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                        }}
                        className='w-[200px] border-[6px] border-white shadow-2xl'
                        alt="Animation 2"
                    />

                    <motion.img
                        src={framer3}
                        animate={{ y: [0, -50, 50, -25, 0], opacity: [1, 0.8, 1] }}
                        transition={{
                            duration: 20,
                            delay: 5,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                        }}
                        className='w-[200px] border-[6px] border-white shadow-2xl'
                        alt="Animation 3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;