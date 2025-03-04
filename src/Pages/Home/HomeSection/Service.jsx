import React from 'react';
import { RiCustomerServiceFill } from 'react-icons/ri';

const Service = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 space-y-8 md:space-y-0 pb-20">
      {/* Easy Exchange Policy */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 rounded-full p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m-3 1h-1M17 19l-4-4m0 0L9 19m4-4v12" />
          </svg>
        </div>
        <h3 className="text-sm font-semibold mt-5 text-gray-800">Easy Exchange Policy</h3>
        <p className="text-xs text-gray-500 mt-1">We offer hassle free exchange policy</p>
      </div>

      {/* 7 Days Return Policy */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 rounded-full p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-sm font-semibold mt-5 text-gray-800">7 Days Return Policy</h3>
        <p className="text-xs text-gray-500 mt-1">We provide 7 days free return policy</p>
      </div>

      {/* Best Customer Support */}
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 rounded-full p-4">
        <RiCustomerServiceFill className='h-8 w-8' />
        </div>
        <h3 className="text-sm font-semibold mt-5 text-gray-800">Best Customer Support</h3>
        <p className="text-xs text-gray-500 mt-1">We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Service;