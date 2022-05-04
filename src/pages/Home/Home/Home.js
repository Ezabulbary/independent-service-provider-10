import React from 'react';
import Artists from '../Artists/Artists';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Bannar></Bannar>
            <Services></Services>
            <Artists></Artists>
            <Contact></Contact>
        </>
    );
};

export default Home;