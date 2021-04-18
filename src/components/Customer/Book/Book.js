import React from 'react';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Book = ({service}) => {

    return (
        <section className="row mx-auto">
            <div className="col-12 col-md-6 ms-md-3">
                <ProcessPayment service={service}></ProcessPayment>
            </div>
        </section>
    );
};

export default Book;