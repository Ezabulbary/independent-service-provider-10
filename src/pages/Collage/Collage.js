import React from 'react';
import './Collage.css';

const Collage = ({ image }) => {
    const { img } = image;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 g-4">
            <div className="row">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Collage;