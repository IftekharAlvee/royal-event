import React from 'react';
import About from '../Landing/About/About';
import Header from '../Landing/Header/Header';
import Services from '../Landing/Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;