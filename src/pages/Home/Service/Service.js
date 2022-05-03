import React from 'react';

const Service = ({ service }) => {
    const { picture, id, name, balance, about } = service;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Service;