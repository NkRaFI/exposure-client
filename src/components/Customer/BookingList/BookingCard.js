import React from 'react';

const BookingCard = ({ booking }) => {
    const {name, price, image, description} = booking.serviceInfo;
    return (
        <div className="col-12 col-lg-6">
            <div className="card-shadow m-3 py-3 px-4 rounded primaryColor">
                <div className="d-flex justify-content-between mb-2">
                    <img style={{height:'30px'}} src={image} alt=""/>
                    {
                        booking.status === "pending" && <button className="btn btn-danger">{booking.status}</button>
                    }
                    {
                        booking.status === "on going" && <button className="btn btn-primary">{booking.status}</button>
                    }
                    {
                        booking.status === "done" && <button className="btn btn-success">{booking.status}</button>
                    }
                </div>
                <div>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <p className="text-center">Tk: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;