import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import './OrderList.css';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleClick = (serviceId, status) => {
        fetch(`http://localhost:5000/updateStatus/${serviceId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({ status: status })
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    fetch('http://localhost:5000/orders')
                    .then(res => res.json())
                    .then(data => setOrders(data))
                }
            })
    }

    return (
        <div className="table-responsive mx-auto mx-md-3">
            <table className="table table-striped primaryColor rounded">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Service</th>
                        <th scope="col">Pay with</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order) =>
                            <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.serviceInfo.name}</td>
                                <td>Card</td>
                                <td>
                                    <div className="dropdown btn-group dropstart">
                                        {
                                            order.status === 'pending' &&
                                            <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {order.status}
                                            </button>
                                        }
                                        {
                                            order.status === 'on going' &&
                                            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {order.status}
                                            </button>
                                        }
                                        {
                                            order.status === 'done' &&
                                            <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                {order.status}
                                            </button>
                                        }
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <button onClick={() => handleClick(order._id, 'pending')} className="dropdown-item text-danger">pending</button>
                                            <button onClick={() => handleClick(order._id, 'on going')} className="dropdown-item text-primary">on going</button>
                                            <button onClick={() => handleClick(order._id, 'done')} className="dropdown-item text-success">done</button>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {
                (orders?.length === 0) &&
                <div className="manageSpinner">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            }

        </div>
    );
};

export default OrderList;