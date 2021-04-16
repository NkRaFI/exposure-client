import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logoWhite from '../../../images/logo-white.png';

const Footer = () => {
    return (
        <footer className="container-fluid footer-container py-5 mt-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <h4 className="logo-footer">Exposure <img src={logoWhite} alt=""/></h4>
                    </div>
                    <div className="col-12 col-md-4 text-start">
                        <p><FontAwesomeIcon icon={faPhoneAlt} /> +880-2-7708003</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> www.exposure@web.com</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Nabinagar, Savar, Dhaka, Bangladesh</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h5>Stay connected</h5>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//instagram.com" rel="noreferrer" target='_blank'><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="//facebook.com" rel="noreferrer" target='_blank'><FontAwesomeIcon className="icon active-icon" icon={faFacebook} /></a></li>
                            <li className="list-inline-item"><a href="//youtube.com" rel="noreferrer" target='_blank'><FontAwesomeIcon className="icon" icon={faYoutube} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;