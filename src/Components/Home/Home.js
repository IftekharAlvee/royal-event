import React from 'react';
import About from '../Landing/About/About';
import Footer from '../Landing/Footer/Footer';
import Header from '../Landing/Header/Header';
import Memory from '../Landing/Memory/Memory';
import Services from '../Landing/Services/Services';
import ShowReview from '../Landing/ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <About></About>
            <ShowReview></ShowReview>
            <Memory></Memory>
            <Footer></Footer>
        </div>
    );
};

export default Home;