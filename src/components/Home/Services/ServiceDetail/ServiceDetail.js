import React from 'react';
import { Link } from 'react-router-dom';
import cameraImg from '../../../../images/camera.png';
import './ServiceDetail.css';
const ServiceDetail = ({ service }) => {
    return (
        <div className="col-12 col-md-4 text-center">
            <div className="mb-5 bg-white px-3 py-4 rounded service-detail">
                <div>
                    <img style={{ height:'60px',borderRadius:'20%' }} src={service.image || cameraImg} alt="" />
                </div>
                <h5 className="my-4">{service.name}</h5>
                <p className="text-secondary">{service.description}</p>
                <p>Taka: {service.price}</p>
                <Link to={`/booking/${service._id}`}><button className="customBtn">Book Now</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;