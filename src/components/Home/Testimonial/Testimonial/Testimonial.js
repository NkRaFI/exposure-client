import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])


    return (
        <section id="reviews" className="container-fluid py-5 my-5 ms-auto px-3 primaryColor">
            <h1 className="fontColor text-center my-4">Clients Review</h1>
            <div className="row">
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial._id}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;