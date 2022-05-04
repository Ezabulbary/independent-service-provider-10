import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-12 col-lg-6'>
                    <h1>CONTACT US</h1>
                </div>
                <div className='col-12 col-lg-6'>
                    <h3>GET IN TOUCH</h3>
                    <form className='form-input'>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' required/>
                        <input type="text" placeholder='Message' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;