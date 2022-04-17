import React, { useEffect, useState } from 'react';
import './Services.css'
import Servis from './Servis/Servis';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container servic rounded '>
            <h2>My Services</h2>
            <hr className='mb-4 text-primary w-50 mx-auto' />
            <div className='services '>
                {
                   services.map((servic) => <Servis key={servic.id} servic={servic}></Servis>) 
                }
            </div>
        </div>
    );
};

export default Services;