import React from 'react';
import myPicture from '../../../../images/my-picture.jpg'
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="col-12 col-md-4">
            <div className="p-4 card-shadow my-3 text-center testimonialCard">
                    <div>
                        <img style={{ height: '50px', width: '50px', borderRadius: '50%' }} src={myPicture} alt="" />
                    </div>
                    <h6 className="my-3 fontColor">{testimonial.name}</h6>
                <p className="text-center">{testimonial.quote}</p>
            </div>
        </div>
    );
};

export default TestimonialCard;