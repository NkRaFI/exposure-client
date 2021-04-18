import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoMain from '../../images/main-logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <p className="logo">Exposure <img src={logoMain} alt=""/> </p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link ms-5 active" aria-current="page" to="/home">Home</Link >
                            <a className="nav-link ms-5" href="#services">Services</a >
                            <a className="nav-link ms-5" href="#reviews">Reviews</a >
                            <Link className="nav-link ms-5" to="/dashboard">Dashboard</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;