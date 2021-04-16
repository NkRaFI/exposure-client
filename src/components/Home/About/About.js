import React from 'react';
import myPicture from '../../../images/my-picture.jpg';
import './About.css';

const About = () => {
    return (
        <section id="about" className="container-fluid about-container">
        <div className="row ms-auto">
            <div className="col-12 col-md-6 order-2 order-md-1">
                <img style={{height: '100%'}} src={myPicture} alt="" className="img-fluid rounded"/>
            </div>
            <div className="col-12 col-md-6 mt-5 order-1 order-md-2 mb-5">
                <h1 className="mb-5 fontColor">Why me?</h1>
                <p className="text-secondary mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repudiandae veritatis quasi dolore assumenda obcaecati iure accusamus adipisci iusto, exercitationem perferendis magni dolorum sed ipsam tenetur in eligendi architecto voluptatum, quaerat praesentium at natus mollitia? Autem nam nisi vero perferendis libero rerum unde assumenda, voluptate mollitia reiciendis maiores asperiores fugiat animi! Ab repellat esse maiores officiis voluptas est. Et, ratione?
                </p>
                <button className="customBtn">Learn More</button>
            </div>
        </div>
    </section>
    );
};

export default About;