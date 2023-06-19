import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './Checkout';
import { useLocation, useParams } from 'react-router-dom';
import TitleBar from '../../utility/TitleBar';
 
const Payment = () => {
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

    const location = useLocation()
    const price = location.state?.total
    const param = useParams()
    
   

  




    return (
        <section className='w-[70%] border border-purple-600 p-6 rounded-xl bg-slate-200 shadow-xl'>
            <div className='my-11'>
                <TitleBar title='Payment' />
          </div>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} id={param.id} />
            </Elements>
        </section>
    );
};

export default Payment;