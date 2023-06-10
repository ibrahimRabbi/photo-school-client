import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Context } from '../../Authentication/AuthProvider';
import useSelectedData from '../../Hooks/useSelecet';
import './payment.css'




const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setError] = useState('')
    const [proccesing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useContext(Context)
    const { selectedData } = useSelectedData()
   

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)
        if (!stripe || !elements) {
            return;
        }


        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error } = await stripe.createPaymentMethod({
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
        setProcessing(false)

        if (codeError) {
            setError(codeError.message)
        } else {
            setError('')
            console.log('[paymentIntent]', paymentIntent);
        }

       
        if (paymentIntent.status == 'succeeded') {
             const summery = {
                 transictionId: paymentIntent.id,
                 amount: price,
                 email: user?.email,
                 classes: selectedData.map(v => v.className),
                 date: new Date(),
                 enrollClass: selectedData.length,
                 selecetClassId: selectedData.map(v => v._id),
                 classId: selectedData.map(v => v.classId)    
             }
            fetch("http://localhost:5000/summery", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body : JSON.stringify(summery)
            })
                .then(res => res.json())
                .then(res => {
                     
                    if (res.result.insertedId && res.deleted.deletedCount) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })


                    }
            })
        }
    };





    useEffect(() => {
        if (price > 0) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
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
                <button className='btn btn-sm w-[140px] bg-emerald-400' type="submit" disabled={!stripe || proccesing || !clientSecret}>
                    Pay
                </button>
                <p className='text-red-500 mt-4'>{errorMessage}</p>
            </form>
        </section>
    );
};

export default CheckoutForm