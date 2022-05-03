import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { picture, name, about, balance } = service;
    return (
        <div className="card-container">
            <img className="card-img" src={picture} alt="..." />
            <div className="card-info">
                <h3 className="card-name">{name}</h3>
                <p className="card-about">{about}</p>
                <p><small className="card-price">{balance}</small></p>
                <Link to="/" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    );
};

export default Service;