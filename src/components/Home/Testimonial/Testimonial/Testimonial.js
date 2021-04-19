import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(() => {
        fetch('https://limitless-caverns-60181.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])


    return (
        <section id="reviews" className="container-fluid py-5 my-5 ms-auto px-3 primaryColor">
            <h1 className="fontColor text-center my-4">Clients Review</h1>
            <div className="row">
                {
                    testimonials?.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial._id}></TestimonialCard>)
                }
            </div>
            {
                (testimonials?.length === 0) &&
                <div className="manageSpinner">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }
        </section>
    );
};

export default Testimonial;