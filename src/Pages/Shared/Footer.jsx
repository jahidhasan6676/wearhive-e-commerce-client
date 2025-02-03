import { IoCall, IoLocation, IoLocationOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black ">
            <div className="w-11/12  mx-auto py-20 text-white  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {/* About ShopCart */}
                <div>
                    <p className="text-[24px] font-bold uppercase">Shop<span className="text-secondary">Per</span></p>
                    <p className="text-gray-400 text-sm">
                        Shop stylish and affordable boys' and girls' dresses, perfect for students and young fashion enthusiasts. Trendy, comfortable, and high-quality outfits for every occasion.
                    </p>
                    <div className="mt-3 space-y-1 text-gray-400 text-sm">
                        <p className="flex items-center gap-1"><IoLocation className="text-white" /> Dhaka,Bangladesh.</p>
                        <p className="flex items-center gap-1"><IoCall className="text-white" /> +880 18186676</p>
                        <p className="flex items-center gap-1"><MdEmail className="text-white" /> info@shopper.com</p>
                    </div>
                    <div className="flex space-x-3 mt-4">
                        <Link className="text-blue-500"><i className="fab fa-facebook"></i></Link>
                        <Link className="text-sky-400"><i className="fab fa-twitter"></i></Link>
                        <Link className="text-red-600"><i className="fab fa-linkedin"></i></Link>
                        <Link className="text-blue-700"><i className="fab fa-instagram"></i></Link>
                        <Link className="text-red-500"><i className="fab fa-pinterest"></i></Link>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Categories</h2>
                    <ul className="text-gray-400 space-y-2 text-sm">
                        <li><Link className="hover:text-white">Home</Link></li>
                        <li><Link className="hover:text-white">Shop</Link></li>
                        <li><Link className="hover:text-white">Blog</Link></li>
                        <li><Link className="hover:text-white">About</Link></li>
                        <li><Link className="hover:text-white">Contact</Link></li>
                        <li><Link className="hover:text-white">Policy</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
                    <ul className="text-gray-400 space-y-2 text-sm">
                        <li><Link className="hover:text-white">Summer Sessions</Link></li>
                        <li><Link className="hover:text-white">Events</Link></li>
                        <li><Link className="hover:text-white">Gallery</Link></li>
                        <li><Link className="hover:text-white">Forums</Link></li>
                        <li><Link className="hover:text-white">Privacy Policy</Link></li>
                        <li><Link className="hover:text-white">Terms of Use</Link></li>
                    </ul>
                </div>

                {/* Recent Tweets */}
                <div className="">
                    <h2 className="text-xl font-semibold mb-3 ">Recent Tweets</h2>
                    <div className="text-gray-400 text-sm space-y-3">
                        <div>
                            <p className="font-semibold text-white">@Aminur Islam</p>
                            <p>@ShopCart Greetings! #HTML_Template</p>
                            <p>Grab your item, 50% Big Sale Offer !!</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">@Somrat Islam</p>
                            <p>@ShopCart Hey! #HTML_Template</p>
                            <p>Grab your item, 50% Big Sale Offer !!</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-xs text-center pb-2 text-gray-400">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Shopper</p>
            </div>
        </footer>
    );
};

export default Footer;
