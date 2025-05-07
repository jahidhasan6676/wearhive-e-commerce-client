import { useEffect, useState } from 'react';
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [copied, setCopied] = useState(false);

    // Check sessionStorage on mount
    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowPopup(true);
            sessionStorage.setItem('hasVisited', 'true');
        }
    }, []);

    // Disable scroll when popup is shown
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [showPopup]);

    // Handle code copy
    const handleCopy = () => {
        navigator.clipboard.writeText('WELCOME10');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Handle popup close
    const handleClose = () => {
        setShowPopup(false);
        localStorage.removeItem('hasVisited');
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            {/* Popup Container */}
            <div className="relative bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden border border-gray-100 transform transition-all">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    aria-label="Close popup"
                >
                    <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Content */}
                <div className="px-3 py-5 sm:p-6 md:p-6 lg:p-8">
                    {/* Header */}
                    <div className="text-center mb-5 md:mb-6 lg:mb-8">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-2 md:py-3 px-3 md:px-6 rounded-full inline-flex items-center justify-center mb-4 md:mb-5 lg:mb-6">
                            <span className="font-bold text-lg md:text-xl">10% OFF</span>
                            <span className="mx-2">|</span>
                            <span className="font-medium">First Order</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Welcome to Our Shop!</h3>
                        <p className="text-gray-800 text-sm md:text-lg">Enjoy 10% off your first purchase with us</p>
                    </div>

                    {/* Coupon Section */}
                    <div className="mb-5 md:mb-6 lg:mb-8">
                        <div className="border-2 border-dashed border-emerald-400 rounded-lg p-2 md:p-4 bg-emerald-50 text-center relative overflow-hidden">
                            <p className="text-sm text-gray-800 mb-1">Use this coupon code at checkout</p>
                            <div className="flex items-center justify-center">
                                <span className="bg-white py-2 px-3 md:px-6 rounded-md text-emerald-700 font-bold text-lg md:text-xl tracking-wider border border-emerald-200">
                                    WELCOME10
                                </span>
                                <button
                                    className={`ml-2 md:ml-3 flex items-center justify-center ${copied
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                                        } py-2 px-4 rounded-md text-sm font-medium transition-colors min-w-[80px]`}
                                    onClick={handleCopy}
                                >
                                    {copied ? (
                                        <>
                                            <CheckIcon className="w-4 h-4 mr-1" />
                                            Copied!
                                        </>
                                    ) : (
                                        'Copy'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button
                        onClick={handleClose}
                        className="w-full py-3 md:py-4 px-3 md:px-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-900 hover:to-gray-950 text-white font-medium md:font-bold md:text-lg transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Shopping Now
                    </button>

                    {/* Footer Note */}
                    <p className="text-xs text-gray-700 text-center mt-4">
                        Offer valid for first-time customers only. Minimum purchase may apply.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Popup;

