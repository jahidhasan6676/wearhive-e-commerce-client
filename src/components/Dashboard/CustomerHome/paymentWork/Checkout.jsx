import usePrice from "../../../../Hooks/usePrice";

const Checkout = () => {
    const [total,shippingFee,subTotal] = usePrice();
    return (
        <div className="w-11/12 mx-auto py-10">
            <div className="grid lg:grid-cols-2 gap-10">
                {/* Delivery Information Form */}
                <div className="bg-white rounded-md p-3 md:p-6 lg:p-10">

                    <h2 className="text-2xl font-medium uppercase relative">
                        <span className="text-gray-500">DELIVERY</span> INFORMATION
                        <hr className="absolute top-[14px] left-[285px] border-[1px] border-gray-600 w-[50px] " />
                    </h2>

                    <form className="mt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First name" className="input-field" />
                            <input type="text" placeholder="Last name" className="input-field" />
                        </div>
                        <input type="email" placeholder="Email address" className="input-field w-full" />
                        <input type="text" placeholder="Street" className="input-field w-full" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="City" className="input-field" />
                            <input type="text" placeholder="State" className="input-field" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Phone" className="input-field" />
                            <input type="text" placeholder="Country" className="input-field" />
                        </div>
                        <textarea
                            className="p-2 w-full outline-none border focus:ring-2 focus:ring-black rounded-md resize-none"
                            rows="3"
                            placeholder="Enter description..."
                        ></textarea>

                    </form>
                </div>

                {/* Cart Totals and Payment Method */}
                <div className="bg-white rounded-md p-3 md:p-6 lg:p-10">
                    <h2 className="text-2xl font-medium uppercase relative">
                        <span className="text-gray-500">CART</span> TOTALS
                        <hr className="absolute top-[14px] left-[168px] border-[1px] border-gray-600 w-[50px] " />
                    </h2>
                    <div className="mt-6 space-y-2">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p className="font-semibold">${subTotal.toFixed(2)}</p>
                        </div>
                        <hr className="mb-3" />
                        <div className="flex justify-between">
                            <p>Shipping Fee</p>
                            <p className="font-semibold">${shippingFee.toFixed(2)}</p>
                        </div>
                        <hr className="mb-3" />
                        <div className="flex justify-between">
                            <p className="font-bold">Total</p>
                            <p className="font-bold">${total.toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <h2 className="text-lg mt-14 font-medium uppercase relative">
                        <span className="text-gray-500">PAYMENT</span> METHOD
                        <hr className="absolute top-[13px] left-[172px] border-[1px] border-gray-600 w-[50px] " />
                    </h2>

                    <div className="mt-4 flex space-x-4">
                        <label className="border px-3 py-2 rounded-md flex justify-center items-center gap-2 ">
                            <input type="radio" name="payment" className="" />
                            <span className="text-purple-600 font-semibold">STRIPE</span>
                        </label>
                        <label className="border px-3 py-2 rounded-md flex justify-center items-center gap-2">
                            <input type="radio" name="payment" className="" />
                            <span className="text-blue-600 font-semibold">SSL COMMERCE</span>
                        </label>
                       
                    </div>

                    {/* Place Order Button */}
                    <div className="flex justify-end">
                        <button className="mt-8 w-fit text-sm bg-black text-white py-3 px-10">
                            PLACE ORDER
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
