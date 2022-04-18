import React from 'react';
import './Social.css';
import google from '../../../imaige/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Lodding from '../../Sheard/Lodding/Lodding';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = () => {
    const nevigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth, { sendEmailVerification: true });

    if (loading) {
        return (
           <p>loadding....</p>
        );
    }
    if (user) {
        toast("Send Email Verificatio");
        nevigate(from,{replace:true})
    }

    const googleHandaler = () => {
        signInWithGoogle()
    }
    return (
        <div onClick={googleHandaler} className='mt-3'>
            <button className='socialBtn py-1'><img className='me-3' style={{ width: "25px" }} src={google} alt="img" />With Google</button>
            <ToastContainer />
        </div>
    );
};

export default Social;