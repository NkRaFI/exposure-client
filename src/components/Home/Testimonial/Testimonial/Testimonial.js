import React from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonial = () => {
    const testimonials = [
        {
            key: 1,
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Wilson Harry',
            img: "wilson"
        },
        {
            key: 2,
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Ema Gomez',
            img: " ema"
        },
        {
            key: 3,
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Aliza Farari',
            img: "aliza"
        }
    ]

    return (
        <section className="container-fluid py-5 my-5 ms-auto px-3 primaryColor">
            <h1 className="fontColor text-center my-4">Clients Review</h1>
            <div className="row">
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial} key={testimonial.key}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonial;