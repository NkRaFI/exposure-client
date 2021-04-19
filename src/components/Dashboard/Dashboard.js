import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useJwt } from "react-jwt";
import './Dashboard.css';
import logoWhite from '../../images/logo-white.png';
import { useEffect } from 'react/cjs/react.development';
import BookingList from '../Customer/BookingList/BookingList';
import AddReview from '../Customer/AddReview/AddReview';
import OrderList from '../Admin/OrderList/OrderList';
import AddService from '../Admin/AddService/AddService';
import Book from '../Customer/Book/Book';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageService from '../Admin/Manage/ManageService';


const Dashboard = () => {
    //condition for showing dashboardLink
    const [component, setComponent] = useState('');

    //getting all services for booking
    const [service, setService] = useState({})
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/serviceById/${id}`)
                .then(res => res.json())
                .then(data => setService(data))
        }
    }, [id])

    // checking user is admin or customer
    const { decodedToken, isExpired } = useJwt(sessionStorage.getItem('token'));
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {

        if (decodedToken) {
            fetch('http://localhost:5000/isAdmin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: decodedToken.email })
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        // true for admin
                        setIsAdmin(data)
                        setComponent('order-list')
                    }
                    else {
                        // false for customer
                        setIsAdmin(data)
                        setComponent('book-now')
                    }
                })
        }

    }, [decodedToken])

    return (
        <section>
            <div className="row gx-0">
                <div className="col-12 col-md-3">
                    <div className="adminDashboard py-3">
                        <Link className="logo-footer ms-3" to='/home'>Exposure <img src={logoWhite} alt="" /> </Link>
                        <div className="">
                            {
                                // if is admin true the show admins navLinks else show customer navLinks
                                isAdmin
                                    ?
                                    <div className="d-flex flex-wrap flex-md-column justify-content-between justify-content-md-start align-items-start mt-3">
                                        <p onClick={() => setComponent('order-list')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">📝</span> Order List</p>
                                        <p onClick={() => setComponent('add-service')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">➕</span> Add Service</p>
                                        <p onClick={() => setComponent('make-admin')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">👥</span> Make Admin</p>
                                        <p onClick={() => setComponent('manage-services')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">🎛️</span> Manage Services</p>
                                    </div>
                                    :
                                    <div className="d-flex flex-wrap flex-md-column justify-content-between justify-content-md-start align-items-start mt-3">
                                        <p onClick={() => setComponent('book-now')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">🛒</span> Book Now</p>
                                        <p onClick={() => setComponent('booking-list')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">🧾</span> Booking List</p>
                                        <p onClick={() => setComponent('add-review')} className="dashboardLink"> <img src='' alt="" /><span className="me-1">💬</span> Give a Review</p>
                                    </div>
                            }
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
                            // if isAdmin false then show customer navLinks below
                            !isAdmin &&
                            <div>
                                {
                                    (component === 'booking-list') && <BookingList></BookingList>
                                }
                                {
                                    (component === 'book-now') && <Book service={service}></Book>
                                }
                                {
                                    (component === 'add-review') && <AddReview></AddReview>
                                }
                            </div>
                        }
                        {
                            // if isAdmin true the show admins navLinks below
                            isAdmin &&
                            <div>
                                {
                                    (component === 'order-list') && <OrderList></OrderList>
                                }
                                {
                                    (component === 'add-service') && <AddService></AddService>
                                }
                                {
                                    (component === 'make-admin') && <MakeAdmin></MakeAdmin>
                                }
                                {
                                    (component === 'manage-services') && <ManageService></ManageService>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;