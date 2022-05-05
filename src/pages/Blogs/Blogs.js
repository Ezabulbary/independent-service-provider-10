import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='blogs-container'>
                <h1 className='text-center text-success mt-4'>Blog page</h1>
                <div className='m-5'>
                    <li><small>Difference between authentication and authorization.</small></li>
                    <p>Authentication confirms the identity of the user. What resources a user has access to is determined by authorization. Passwords, one-time pins, biometric information, and other information given or entered by the user are used for authentication. The organization implements and maintains the parameters that govern authorization.</p>

                    <li><small>Why are you using firebase? What other options do you have to implement authentication?</small></li>
                    <p>In the database, Firebase maintains all data in real-time. As a result, data transfer to and from the database is simple and speedy. As a result, if you want to create mobile apps like live streaming, chat messaging, and so on. A user name and password are usually required for server authentication. Cards, retina scans, voice recognition, and fingerprints are all options for authentication.</p>

                    <li><small>What other services does firebase provide other than authentication.</small></li>
                    <p>Firebase is a complete solution for creating mobile and online applications faster and more efficiently with fewer resources.There are many services which Firebase provides, Most useful of them are: Cloud Messaging, Authentication, Dynamic Links, Predictions, Google Analytics, and Remote Config are all extensively used services for this purpose.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;