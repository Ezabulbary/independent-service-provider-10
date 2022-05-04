import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './Registers.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, createUser, createLoading, createError] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
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

    if (createUser || githubUser || googleUser || facebookUser) {
        navigate(from, { replace: true });
    }

    if (createLoading || githubLoading || googleLoading || facebookLoading) {
        return <Loading></Loading>
    }

    if (createError || githubError || googleError || facebookError){
        setError(error.message)
    }

    const handleNameBlur = event => {
        setName(event.target.value)
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

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleSignUp = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't match")
            return;
        }
    }


    return (
        <div className='registers'>
            <h1 className='text-center text-success mb-3'>Please Register</h1>
            <button onClick={handleGithubSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGithub} /></button>
            <button onClick={handleGoogleSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faGoogle} /></button>
            <button onClick={handleFacebookSignUp} className='btn social-btn'><FontAwesomeIcon className='social-icon' icon={faFacebook} /></button>
            <form onSubmit={handleSignUp}>
                <br />
                <input onBlur={handleNameBlur} type="text" name="name" id="name" placeholder='Type Your Name'/>

                <br />
                <input onBlur={handleEmailBlur} type="email" name="email" id="email" placeholder='Type Your Email' required/>

                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder='Type Your Password' required/>

                <br />
                <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="confirm-password" placeholder='Confirm Your Password' required/>

                <p className='text-danger'>{error}</p>

                <p>Already have an Account?<Link className='ms-2' to='/login'>Login</Link></p>
                <button onClick={() => createUserWithEmailAndPassword(name, email, password)} className='btn btn-success'>Register</button>
            </form>
        </div>
    );
};

export default Register;