import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../Authentication/AuthProvider';
import './payment.css'




const CheckoutForm = ({price}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const {user} = useContext(Context)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {  
            return;
        }

        
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        
        const { error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
          setError(error.message)
        }  

        const { paymentIntent, error: codeError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card,
                    billing_details: {
                        name: user?.displayname || 'unknown',
                        email: user?.email || 'anonymouse'
                    },
                },
            },
        );


        if (codeError) {
            setError(codeError.message)
        } else {
            setError('')
            console.log('[paymentIntent]', paymentIntent);
        }

//TODO still
        if (paymentIntent.status == 'succeeded') {
            alert('payment successfull')
        }
    };

   

   
    
    useEffect(() => {
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);



    return (
       <section className='w-[90%] border'>
         <form className='ml-28' onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className='btn btn-sm w-[140px] bg-emerald-400' type="submit" disabled={!stripe}>
             Pay
            </button>
                <p className='text-red-500 mt-4'>{errorMessage}</p>
        </form>
       </section>
    );
};

export default CheckoutForm