import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './Checkout';
import { Elements } from '@stripe/react-stripe-js';
 
const Payment = () => {

    const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
    );
};

export default Payment;