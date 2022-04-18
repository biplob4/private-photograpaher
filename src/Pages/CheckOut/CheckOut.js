import React from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useData from '../../Utilitig/useData';
import './CheckOut.css'

const CheckOut = () => {
    const services = useData([]);
    const { id } = useParams();
    const currentservic = services.filter(servic => (servic.id === id));
    const { name, img, price } = currentservic[0];


    const handelSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if(email&&password){
            toast("Check Out Finished")
        }
    }
    return (
        <div className='container mt-5 check-out'>
            <div className="text-center">
                <img className='mb-4 rounded w-100' src={img} alt="img" />
                <h6 className='text-secondary'>Thanks you slected</h6>
                <h3 className='text-primary'>{name}</h3>
                <h5><span className='text-bold'>Price:</span> {price}</h5>
            </div>
            <div className="checkOut-from">
                <form onSubmit={handelSubmit}>
                <h5 className='text-info mt-5'>Please Check Out Now</h5>
                    <input type="name" name="name" placeholder='Frist Name' />
                    <input type="name" name="confirmName" placeholder='Last Name' />
                    <input type="email" name="email" placeholder='Email Address' />
                    <input type="password" name="password" placeholder='Account password' />
                    <input className='from-btn' type="submit" value="Check Out" />
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default CheckOut;