import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Dashboard.css';
import logoWhite from '../../../images/logo-white.png';
import { useEffect } from 'react/cjs/react.development';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import AddReview from '../AddReview/AddReview';
import OrderList from '../OrderList/OrderList';

const Dashboard = () => {
    const [component, setComponent] = useState('bookingList');

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
                        <div className="d-flex flex-wrap flex-md-column justify-content-between justify-content-md-start align-items-start mt-3">
                            <p onClick={() => setComponent('bookingList')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">🧾</span> Booking List</p>
                            <p onClick={() => setComponent('book')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">🛒</span> Book</p>
                            <p onClick={() => setComponent('review')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">💬</span> Review</p>
                            <p onClick={() => setComponent('orderList')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">📝</span> Order List</p>
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
                            (component === 'bookingList') && <BookingList></BookingList>
                        }
                        {
                            (component === 'book') && <Book service={service}></Book>
                        }
                        {
                            (component === 'review') && <AddReview></AddReview>
                        }
                        {
                            (component === 'orderList') && <OrderList></OrderList>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;