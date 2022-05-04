import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [signInWithEmailAndPassword, signInUser, signInLoading, signInError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    const handleGithubSignUp = () => {
        signInWithGithub()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    const handleFacebookSignUp = () => {
        signInWithFacebook()
            .then(() => {
                navigate(from, { replace: true });
            })
    }

    if (signInUser || githubUser || googleUser || facebookUser) {
        navigate(from, { replace: true });
    }

    if (signInLoading || githubLoading || googleLoading || facebookLoading) {
        return <Loading></Loading>
    }

    if (signInError || githubError || googleError || facebookError) {
        setError(error.message)
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            return (true)
        }
        setError("You have entered an invalid email address!")
        return;
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(event.target.value)) {
            return (true)
        }
        setError("6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter!")
        return;
    }

    const handleSignIn = event => {
        event.preventDefault();
    }

    return (
        <div className='login'>
            <h1 className='text-center text-success mb-3'>Please Login</h1>
            <button onClick={handleGithubSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGithub} /></button>
            <button onClick={handleGoogleSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGoogle} /></button>
            <button onClick={handleFacebookSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faFacebook} /></button>
            <form onSubmit={handleSignIn}>
                <input onBlur={handleEmailBlur} type="email" name="email" id="email" placeholder='Type Your Email' required />

                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Type Your Password' required />

                <p className='text-danger'>{error}</p>

                <p>Don't have an Account?<Link className='ms-2' to='/register'>Register</Link></p>
                <p>Forget Password?<Link className='ms-2' to='/register'>Reset Password</Link></p>
                <button onClick={() => signInWithEmailAndPassword(email, password)} className='btn btn-success'>Login</button>
            </form>
        </div>
    );
};

export default Login;