import React from 'react';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="container mx-auto py-5">
            <h1 className="text-center my-4 fontColor">Gallery</h1>
            <div className="d-flex justify-content-center mb-3">
                <div className="d-flex mb-3">
                    <li className="nav-link">Latest</li>
                    <li className="nav-link">Best</li>
                    <li className="nav-link">Cutest</li>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-11 offset-md-1 gallery-container text-center">
                    <img src="https://source.unsplash.com/random/300x301" alt="" className="img-fluid service-image" />
                    <img src="https://source.unsplash.com/random/300x302" alt="" className="img-fluid service-image" />
                    <img src="https://source.unsplash.com/random/300x303" alt="" className="img-fluid service-image" />
                    <img src="https://source.unsplash.com/random/300x304" alt="" className="img-fluid service-image" />
                    <img src="https://source.unsplash.com/random/300x305" alt="" className="img-fluid service-image" />
                    <img src="https://source.unsplash.com/random/300x300" alt="" className="img-fluid service-image" />
                </div>
            </div>
        </section>
    );
};

export default Gallery;