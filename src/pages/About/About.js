import React from 'react';
import Image from '../../images/about/about.png';
import './About.css'

const About = () => {
    return (
        <div className='container'>
            <div className='d-lg-flex align-items-center about-container'>
                <div>
                    <img className='mx-auto d-block' src={Image} alt="" />
                </div>
                <div className='p-5'>
                    <h1 className='text-center text-success m-5'>About Us</h1>
                    <p>We are moving forward with this theme of "dream weaving in painting".</p>
                    <p>In the future we want to create an art university where disadvantaged children of the world can learn art for free and become world-class artists. We hope to one day be able to create world-class picture art like Hans and to use the money we earn to establish a "art university."</p>
                </div>
            </div>
        </div>
    );
};

export default About;