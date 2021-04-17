import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Dashboard.css';
import logoWhite from '../../../images/logo-white.png';
import { useEffect } from 'react/cjs/react.development';
import Book from '../Book/Book';

const Dashboard = () => {
    const [component, setComponent] = useState('book');

    const [service, setService] = useState({})
    const { id } = useParams();
    useEffect(() => {
        if(id){
            fetch(`http://localhost:5000/serviceById/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
        }
    }, [id])

    return (
        <section>
            <div className="row gx-0">
                <div className="col-12 col-md-3">
                    <div className="adminDashboard py-3">
                        <Link className="logo-footer ms-3" to='/home'>Exposure <img src={logoWhite} alt="" /> </Link>
                        <div className="d-flex flex-md-column justify-content-between justify-content-md-start align-items-start mt-3">
                            <p onClick={() => setComponent('book')} className="dashboardLink"> <img src='' alt="" />Book</p>
                            <p onClick={() => setComponent('addBook')} className="dashboardLink"> <img src='' alt="" />Add book</p>
                            <p onClick={() => setComponent('editBook')} className="dashboardLink"> <img src='' alt="" />Edit book</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-9">
                    <div className="adminTitle">
                        <h5 className="text-uppercase py-2">{component}</h5>
                        <Link to='/home'><button className="customBtn">Back to home</button></Link>
                    </div>
                    <div className="mt-4">
                        {
                            (component === 'book') && <Book service={service} key={service._id}></Book>
                        }
                        {
                            (component === 'addBook') && <h3>hello world</h3>
                        }
                        {
                            (component === 'editBook') && <h5 className="text-center mt-5">Edit coming soon....</h5>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;