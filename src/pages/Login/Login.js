import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( () => {
            navigate(from, { replace: true });
        })
    }

    return (
        <div className='login'>
            <h1 className='text-center text-success mb-3'>Please Login</h1>
            <button className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGithub} /></button>
            <button onClick={handleGoogleSignIn} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGoogle} /></button>
            <button className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faFacebook} /></button>
            <form>
                <input type="email" name="email" id="email" placeholder='Type Your Email' />

                <br />
                <input type="password" name="password" id="password" placeholder='Type Your Password' />

                <p>Don't have an Account?<Link className='ms-2' to='/register'>Register</Link></p>
                <button className='btn btn-success'>Login</button>
            </form>
        </div>
    );
};

export default Login;