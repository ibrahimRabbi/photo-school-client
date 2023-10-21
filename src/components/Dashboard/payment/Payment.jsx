import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Checkout';
import { useLocation, useParams } from 'react-router-dom';
import TitleBar from '../../utility/TitleBar';
 
const Payment = () => {
    const stripePromise = loadStripe("pk_test_51NFaHHHYxG7WJPCTk0y79QmctbWnn8Q2zwqMbAsbPFLk8dCWhGi4I1K8009zXtNnfn9lFdcC9vzudTOvo1s7JV3W00xwgxC3Ju");
    const param = useParams()
    
    return (
        <section className='mt-20'>
            <div className='mb-10' >
                <TitleBar title='Payment' />
          </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={param.id} />
            </Elements>
        </section>
    );
};

export default Payment;