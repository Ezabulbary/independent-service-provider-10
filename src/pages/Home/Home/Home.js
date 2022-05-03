import React from 'react';
import Artists from '../Artists/Artists';
import Bannar from '../Bannar/Bannar';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Services></Services>
            <Artists></Artists>
        </div>
    );
};

export default Home;