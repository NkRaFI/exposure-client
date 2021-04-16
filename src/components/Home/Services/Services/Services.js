import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    
    return (
        <section className="container-fluid my-5 services-container">
            <div className="text-center mb-5">
                <h1 className="fontColor">Services</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        services?.map(service => <ServiceDetail service={service} key={service.key}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;