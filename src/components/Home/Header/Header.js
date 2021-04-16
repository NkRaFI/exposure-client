import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../../Navbar/Navbar';

const Header = () => {
    return (
        <section className="primaryColor">
            <Navbar></Navbar>
            <Banner></Banner>
        </section>
    );
};

export default Header;