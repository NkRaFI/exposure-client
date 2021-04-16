import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Services from '../Services/Services/Services';
import Testimonial from '../Testimonial/Testimonial/Testimonial';


const Home = () => {
    return (
        <section>
            <Header></Header>
            <About></About>
            <Services></Services>
            <Gallery></Gallery>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default Home;