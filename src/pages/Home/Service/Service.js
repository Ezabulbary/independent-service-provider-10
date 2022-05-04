import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { picture, name, about, balance } = service;
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <div className="card">
                <img className="card-img" src={picture} alt="..." />
                <div className="p-4">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-about">{about}</p>
                    <p><small className="card-price">Price: {balance}</small></p>
                    <Link to="/" className="btn btn-success">To learn more</Link>
                </div>
            </div>
        </div>
    );
};

export default Service;