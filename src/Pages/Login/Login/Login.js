import React, { useRef } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Lodding from '../../Sheard/Lodding/Lodding';
import Social from '../Social/Social';
import { toast } from 'react-toastify';


const Login = () => {
    const nevigate = useNavigate();
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth );
    const location = useLocation();
    const emailRef =useRef("");
    const from = location.state?.from?.pathname || "/";
    
    if(user){
        nevigate(from,{replace:true})
    }
    if (loading) {
        return (
         <Lodding/>
        );
    }
    const passwordResetHandeler = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(email);
        if(email){
            toast("Reset password send")
        }
        else{
            toast("Please Type email")
        }
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email,password)
    }
    return (
        <div className='mt-5 login-from from-style'>
            <form onSubmit={handelSubmit}>
                <input ref={emailRef} type="email" name="email"  placeholder='Email'/>
                <input type="password" name="password" placeholder='password' />
                {error && <p className='text-danger text-center'>{error.message}</p>}
                <input className='from-btn' type="submit" value="Login" />
            </form>
            <div className="d-flex align-items-center justify-contant-center mt-4">
                <div style={{height:"1.5px",background:"gray",width:"100%"}} className=""></div>
                <samp className='mx-2'>OR</samp>
                <div style={{height:"1.5px",background:"gray",width:"100%"}} className=""></div>
            </div>
            <p onClick={passwordResetHandeler} className='text-primary' style={{cursor:"pointer"}}> Reset Password</p>
            <Link style={{textDecoration:"none"}} to="/signup" className='text-primary text-center mt-4 mb-5 text-danger'>IF You New User So Please?<button className=' btn btn-link'>Sign-up</button> </Link>
            <Social/>
        </div>
    );
};

export default Login;

