import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Registers.css';

const Register = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }


    return (
        <div className='registers'>
            <h1 className='text-center text-success mb-3'>Please Register</h1>
            <button className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGithub} /></button>
            <button onClick={handleGoogleSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGoogle} /></button>
            <button className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faFacebook} /></button>
            <form>
                <br />
                <input type="text" name="name" id="name" placeholder='Type Your Name'/>

                <br />
                <input type="email" name="email" id="email" placeholder='Type Your Email'/>

                <br />
                <input type="password" name="password" id="password" placeholder='Type Your Password'/>

                <br />
                <input type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Your Password'/>

                <p>Already have an Account?<Link className='ms-2' to='/login'>Login</Link></p>
                <button className='btn btn-success'>Register</button>
            </form>
        </div>
    );
};

export default Register;