import React from 'react';
import Navbar from '../Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="text-center text-secondary my-5">
                <h3>Not Found</h3>
                <h3>404 Error!!</h3>
            </div>
        </div>
    );
};

export default NotFound;