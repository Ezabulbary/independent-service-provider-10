import React from 'react';
import { Link } from 'react-router-dom';
import './Artist.css';

const Artist = ({ artist }) => {
    const { picture, name, email, phone, address } = artist;
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <div className="card card-container">
                <img className="card-img" src={picture} alt="..." />
                <div className="p-4 overlay">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-about"><small>Email: {email}</small></p>
                    <p className="card-about"><small>Phone: {phone}</small></p>
                    <p><small className="card-price">Address: {address}</small></p>
                    <Link to="/" className="btn btn-dark my-btn">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default Artist;