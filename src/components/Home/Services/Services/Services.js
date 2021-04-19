import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://limitless-caverns-60181.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <section id="services" className="container-fluid my-5 services-container">
            <div className="text-center mb-5">
                <h1 className="fontColor">Services</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        services?.map(service => <ServiceDetail service={service} key={service._id}></ServiceDetail>)
                    }
                </div>
                {
                    (services?.length === 0) &&
                    <div className="manageSpinner">
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                }
            </div>
        </section>
    );
};

export default Services;