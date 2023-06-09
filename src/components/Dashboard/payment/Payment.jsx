import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Checkout';
import { useLocation } from 'react-router-dom';
 
const Payment = () => {
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

    const location = useLocation()
    const price = location.state?.total
 
    
   

  




    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm price={price} />
        </Elements>
    );
};

export default Payment;