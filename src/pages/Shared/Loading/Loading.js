import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loding = () => {
    return (
        <div style={{height:'700px'}} className='w-100 d-flex align-items-center justify-content-center'>
            <Spinner animation="border" variant="success" />
        </div>
    );
};

export default Loding;