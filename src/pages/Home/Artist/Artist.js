import React from 'react';
import { Link } from 'react-router-dom';

const Artist = ({ artist }) => {
    const { picture, name, email, phone, address } = artist;
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <div className="card">
                <img className="card-img" src={picture} alt="..." />
                <div className="p-4">
                    <h3 className="card-name">{name}</h3>
                    <p className="card-about"><small>{email}</small></p>
                    <p className="card-about"><small>{phone}</small></p>
                    <p><small className="card-price">{address}</small></p>
                    <Link to="/" className="btn btn-dark">To learn more</Link>
                </div>
            </div>
        </div>
    );
};

export default Artist;