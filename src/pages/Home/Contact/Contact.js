import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12 col-lg-6'>
                    <h1>CONTACT US</h1>
                </div>
                <div className='col-12 col-lg-6'>
                    <h3>GET IN TOUCH</h3>
                    <form>
                        <input type="text" placeholder='Name' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;