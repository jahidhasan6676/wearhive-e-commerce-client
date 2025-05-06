import { useEffect, useState } from 'react';
import { XMarkIcon,CheckIcon  } from '@heroicons/react/24/outline';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [copied, setCopied] = useState(false);

    // popup set by sessionStorage
    useEffect(() => {
        const hasVisited = sessionStorage.getItem('hasVisited');
        if (!hasVisited) {
            setShowPopup(true);
            sessionStorage.setItem('hasVisited', 'true');
        }
    }, []);

    // code copy
    const handleCopy = () => {
        navigator.clipboard.writeText('WELCOME10');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // popup close
    const handleClose = () => {
        setShowPopup(false);
        localStorage.removeItem("hasVisited")
    };

    if (!showPopup) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

            {/* Popup container */}
            <div className="relative bg-white/70 backdrop-blur-3xl rounded-xl shadow-lg max-w-md w-full overflow-hidden border border-gray-100 transform transition-all">
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                    aria-label="Close popup"
                >
                    <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Popup content */}
                <div className="p-8">
                    {/* Header with offer */}
                    <div className="text-center mb-8">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 px-6 rounded-full inline-flex items-center justify-center mb-6 ">
                            <span className="font-bold text-xl">10% OFF</span>
                            <span className="mx-2">|</span>
                            <span className="font-medium">First Order</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">Welcome to Our Shop!</h3>
                        <p className="text-gray-800 text-lg">Enjoy 10% off your first purchase with us</p>
                    </div>

                    {/* Coupon section */}
                    <div className="mb-8">
                        <div className="border-2 border-dashed border-emerald-400 rounded-lg p-4 bg-emerald-50 text-center relative overflow-hidden">
                            <p className="text-sm text-gray-800 mb-1">Use this coupon code at checkout</p>
                            <div className="flex items-center justify-center">
                                <span className="bg-white py-2 px-6 rounded-md text-emerald-700 font-bold text-xl tracking-wider border border-emerald-200 shadow-sm">
                                    WELCOME10
                                </span>
                                <button
                                    className={`ml-3 flex items-center justify-center ${copied
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

                    {/* CTA button */}
                    <button
                        onClick={handleClose}
                        className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-900 hover:to-gray-950 text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                    >
                        Start Shopping Now
                    </button>

                    {/* Footer note */}
                    <p className="text-xs text-gray-700 text-center mt-4">
                        Offer valid for first-time customers only. Minimum purchase may apply.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Popup;
