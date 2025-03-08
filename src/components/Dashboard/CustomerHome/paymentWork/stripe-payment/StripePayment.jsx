import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_KEY)
const StripePayment = () => {
    return (
        <div className="w-11/12 mx-auto ">
            <h2 className="text-2xl font-medium text-center uppercase">Stripe Payment</h2>

            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm/>
                </Elements>
            </div>
        </div>
    );
};

export default StripePayment;