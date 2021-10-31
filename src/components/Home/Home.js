import React from 'react';
import Services from '../Services/Services';
import './Home.css';
import Banner from './../Home/Banner/Banner';
import AboutTravel from '../Home/ExtraSection/AboutTravel'
import Area from './Area/Area';

const Home = () => {
    return (
        <>
            <Banner/>
            <div className="my-5"></div>

            <Area></Area>
            <Services/>
            <AboutTravel/>
        </>
    );
};

export default Home;