import React from "react";
import useItem from "../../../Hooks/useItem";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart] = useItem();
    console.log(cart)
    return (
        <>
            <div className="w-11/12 mx-auto py-20">

                <div>
                    {cart?.map(list => <React.Fragment key={list._id}>
                        <div className="flex justify-between py-4 border-b border-gray-200">
                            <div className="flex">
                                <img src={list?.photo} alt={list?.productName} className="w-20 h-20 object-cover mr-4" />
                                <div className="flex-grow">
                                    <h3 className="text-sm md:text-lg font-semibold">{list?.productName}</h3>
                                    <p className="text-sm text-gray-600">${list?.price}  </p>
                                </div>
                            </div>
                            <div className="flex items-center md:gap-10">
                                <input
                                    type="number"
                                    defaultValue={1}
                                    min="1"
                                    className="w-16 border border-gray-300 rounded px-2 py-1 mr-2"
                                />
                                <button className="text-gray-500 hover:text-gray-700">
                                    <RxCross1 className="w-5 h-5 " />
                                </button>
                            </div>
                        </div>
                    </React.Fragment>)}
                </div>
            </div>


            {/* total price and payment */}

            <div className="pb-20 w-11/12 mx-auto  ">
                <div className="  flex justify-end">
                    <div className="max-w-md w-full">
                        <h2 className="text-2xl font-medium mb-4"><span className="text-gray-500">CART</span> TOTALS</h2>
                        <div className="flex justify-between mb-3">
                            <span>Subtotal</span>
                            <span>$120</span>
                        </div>
                        <hr className="mb-3" />
                        <div className="flex justify-between mb-3">
                            <span>Shipping Fee</span>
                            <span>$150</span>
                        </div>
                        <hr className="mb-3" />
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>$200</span>
                        </div>
                        <div className="flex justify-end">
                            <Link to="/dashboard/checkout"><button className="mt-4 bg-black text-sm text-white py-3 px-8 w-fit">
                                PROCEED TO CHECKOUT
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;