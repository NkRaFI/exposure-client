import React from 'react';
import { Link } from 'react-router-dom';
import cameraImg from '../../../../images/camera.png';
import './ServiceDetail.css';
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-12 col-md-6 service-container">
            <div className="row mb-5 mx-2">
                <div className="col-12 col-md-5 p-0 service-image">
                    <img style={{height:'100%', width:'100%'}} className="img-fluid" src={service.image || cameraImg} alt="" />
                </div>
                <div className="col-12 col-md-7 bg-white p-3">
                    <h5 className="my-2">{service.name}</h5>
                    <p className="text-secondary">{service.description}</p>
                    <p>Taka: {service.price}</p>
                    <Link to={`/booking/${service._id}`}><button className="customBtn">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;