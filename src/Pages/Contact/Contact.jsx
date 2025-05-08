import React from "react";
import { FaRegClock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { MdOutlineAddIcCall, MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="">
      {/* banner */}
      <div className="bg-[#fcf6f6] w-full h-[250px]">
        <div className="h-full flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-2">About Our Store</h2>
          <p className="flex items-center"><Link to="/">Homepage</Link><span><IoIosArrowForward className="text-gray-500 text-sm" /></span> <span className="text-gray-500">Contact Our</span></p>
        </div>
      </div>

      <div className="w-11/12 lg:w-9/12 mx-auto py-20 grid md:grid-cols-1 gap-10">
        {/* Google Map Section */}
        <div className="w-full h-[400px]">
          <iframe
            title="Google Map"
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.875254845654!2d91.00477607520558!3d23.461492078860977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754347d89c8d4bb%3A0x7d8c2c22fd2b6e5!2sChandina%2C%20Comilla!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info Section */}
          <div className="bg-gray-100 p-3 md:p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">
              Contact Information
            </h2>
            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <IoLocation className="w-6 h-6" />
                </div>
                <div>
                  <h4 className=" font-medium text-gray-800">Our Address:</h4>
                  <p className="text-gray-600">
                    ElliotGang, Chandina, Comilla
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MdOutlineAddIcCall className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Call Us:</h4>
                  <p className="text-gray-600">+8801818186676</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MdOutlineMailOutline className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email Us:</h4>
                  <p className="text-gray-600">wearhive@gmail.com</p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <FaRegClock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Opening Hours:</h4>
                  <p className="text-gray-600">
                    Mon - Fri: 8am - 11pm, Sat - Sun: 8am - 12pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-100 p-3 md:p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <form>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="border border-gray-300 focus:outline-none focus:border-gray-400 p-2 w-full rounded" />
                <input type="text" placeholder="Last Name" className="border border-gray-300 focus:outline-none focus:border-gray-400 p-2 w-full rounded" />
              </div>
              <input type="text" placeholder="Subject" className="border border-gray-300 focus:outline-none focus:border-gray-400 p-2 w-full rounded mt-4" />
              <textarea placeholder="Message" className="border  border-gray-300 focus:outline-none focus:border-gray-400 p-2 w-full rounded mt-4 h-32"></textarea>
              <button className="bg-orange-500 text-white w-full py-2 mt-4 rounded hover:bg-orange-600 transition">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

