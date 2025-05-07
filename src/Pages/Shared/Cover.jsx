// components/.js
import React from 'react';
import { Link } from 'react-router-dom';

const Cover = () => {
    //#eaf1f9
    return (
        <div className='w-full h-[250px] bg-[#fcf6f6]'>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <h1 className='text-4xl mb-3'>Shop</h1>
                <p className='text-gray-600'><span><Link to="/" className='hover:text-secondary'>Home</Link> <span className='text-[12px]'>//</span> Shop</span></p>
            </div>
        </div>
    );
};

export default Cover;