import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lodding from '../../Sheard/Lodding/Lodding';
import Social from '../Social/Social';

const Signup = () => {
    const navigait = useNavigate();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    if (user) {
        navigait("/home")
    }
    if (loading) {
        return (
          <Lodding/>
        );
    }

    const handelSubmit = async (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
        if(email && password){
            toast('Verification send');
        }
        await
            updateProfile({ displayName });
    }
    return (
        <div className='mt-5 login-from from-style'>
            <form onSubmit={handelSubmit}>
                <input type="text" name='name' placeholder='Type your Name' />
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder='password' />
                <input className='from-btn' type="submit" value="Signup" />
            </form>
            <div className="d-flex align-items-center justify-contant-center mt-4">
                <div style={{ height: "1.5px", background: "gray", width: "100%" }} className=""></div>
                <samp className='mx-2'>OR</samp>
                <div style={{ height: "1.5px", background: "gray", width: "100%" }} className=""></div>
            </div>
            <Link style={{ textDecoration: "none" }} to="/login" className='text-primary text-center my-4 text-danger'>IF You Alrady Signup So ?<button className=' btn btn-link'>Please Login</button></Link>
            <Social/>
            <ToastContainer />
        </div>
    );
};

export default Signup;