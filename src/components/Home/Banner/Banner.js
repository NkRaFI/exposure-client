import React from 'react';
import bannerImg from '../../../images/banner-img.jpg';
import './banner.css';

const Banner = () => {
    return (
        <div className="row my-5 d-flex align-items-center p-3 ms-auto">
            <div className="col-md-4 offset-md-1 mb-5">
                <h1 className="banner-header fontColor">A picture is a poem without words</h1>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nemo atque iste, quidem vero dolorum.</p><br/>
                <button className="customBtnOutline">HIRE ME</button>
            </div>
            <div className="col-md-6 mb-5 ms-md-3">
                <img src={bannerImg} alt="" className="img-fluid rounded"/>
            </div>
        </div>
    );
};

export default Banner;