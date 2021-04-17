import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCardForm from './PaymentCardForm';

const stripePromise = loadStripe('pk_test_51IeMNYLjRExWFjcaZ70TWdrj40rpthgpeKtrMEY4bam26QIoIHALhiXJf4e6Uh1uroe1f4yJ61ipNd7xXkG5HHbt007WjTb0Ve');

const ProcessPayment = ({service}) => {
    return (
        <Elements stripe={stripePromise}>
            <PaymentCardForm service={service}></PaymentCardForm>
        </Elements>
    );
};

export default ProcessPayment;