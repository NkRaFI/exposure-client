import React, { useState } from 'react';
import { useJwt } from "react-jwt";
import { useEffect } from 'react/cjs/react.development';
import BookingCard from './BookingCard';

const BookingList = () => {
    const { decodedToken, isExpired } = useJwt(sessionStorage.getItem('token'));
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        if (decodedToken) {
            fetch(`https://limitless-caverns-60181.herokuapp.com/bookingsByEmail?email=${decodedToken?.email}`)
                .then(res => res.json())
                .then(data => setBookings(data))
        }
    }, [decodedToken])
    return (
        <section className="container">
            <div className="row">
                {
                    bookings.map(booking => <BookingCard booking={booking} key={booking._id}></BookingCard>)
                }
                {
                    bookings.length === 0
                    &&
                    <div className="col-12 col-md-6 text-center my-3">
                        <h2 className="fontColor">No Bookings Yet 👎</h2>
                        <p className="text-danger">please book a service first</p>
                    </div>
                }
            </div>
        </section>
    );
};

export default BookingList;