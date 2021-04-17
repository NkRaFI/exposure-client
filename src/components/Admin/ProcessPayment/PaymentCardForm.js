import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const PaymentCardForm = ({ service }) => {
    const [booking, setBooking] = useState({})
    const handleBlur = (e) => {
        const newBooking = { ...booking };
        newBooking[e.target.name] = e.target.value;
        setBooking(newBooking)
    }
    const orderSuccess = (paymentId) => {
        const bookingInfo = {
            ...booking,
            serviceName: service.name,
            servicePrice: service.price,
            payId: paymentId,
            orderTime: new Date()
        }

        fetch('http://localhost:5000/addOrder', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // stripe integration start
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null);
            orderSuccess(paymentMethod.id)
        }
    };

    return (
        <div>
            {
                service.name
                    ?
                    <div>
                        <form onSubmit={handleSubmit}>
                            <input onBlur={handleBlur} className="form-control mb-3" type="text" name="name" placeholder="Receiver's name" required />
                            <input onBlur={handleBlur} className="form-control mb-3" type="email" name="email" placeholder="Receiver's email" required />
                            <input onBlur={handleBlur} className="form-control mb-3" type="number" name="phone" placeholder="Receiver's phone" required />
                            <input value={service.name} className="form-control mb-4" type="text" name="serviceName" placeholder="Service name" disabled />
                            <div className="d-flex justify-content-between">
                                <p className="text-center fontColor">Your card Info</p>
                                <p className="text-center fontColor">With Stripe</p>
                            </div>
                            <CardElement />
                            <div className="d-flex justify-content-between mt-4">
                                <p className="mt-2">Service Charge: {service.price}tk</p>
                                <button className="customBtn" type="submit" disabled={!stripe}>
                                    pay
                    </button>
                            </div>
                        </form>
                        {
                            paymentSuccess && <p className="text-success mt-2">Your Payment was Successful</p>
                        }
                        {
                            paymentError && <p className="text-danger mt-2">{paymentError}</p>
                        }
                    </div>
                    :
                    <div className="text-center my-5">
                        <h2 className="fontColor">No Service Selected 😔</h2>
                        <p className="text-danger">Please select a service from home, for booking**</p>
                        <Link to="/"><button className="customBtnOutline">Back to home</button></Link>
                    </div>
            }
        </div>
    );
};

export default PaymentCardForm;