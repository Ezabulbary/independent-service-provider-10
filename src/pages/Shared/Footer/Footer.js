import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <p className='text-center text-white p-3 m-0'><small><FontAwesomeIcon icon={faCopyright} /> Copyright BUNON 2022. All right reserved.</small></p>
        </footer>
    );
};

export default Footer;