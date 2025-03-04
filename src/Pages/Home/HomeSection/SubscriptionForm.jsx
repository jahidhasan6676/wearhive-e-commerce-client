import { div } from 'framer-motion/client';
import React from 'react';

const SubscriptionForm = () => {
    return (
        <div className='w-11/12 mx-auto pb-20'>
            <div className="flex flex-col items-center ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Subscribe now & get 20% off</h2>
            <p className="text-sm text-gray-600 mb-6">Stay updated with our latest fashion trends and exclusive offers.</p>
            <div className="flex w-full max-w-xl">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:w-auto flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
                />
                <button className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800 transition-colors duration-300">
                    SUBSCRIBE
                </button>
            </div>
        </div>
        </div>
    );
};

export default SubscriptionForm;