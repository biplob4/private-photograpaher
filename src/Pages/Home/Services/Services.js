import React, { useEffect, useState } from 'react';
import Servis from '../Servis/Servis';
import './Services.css'

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
            <hr style={{height:"2.5px",color:"gray"}} className='mb-5 w-50 mx-auto' />
            <div className='services '>
                {
                   services.map((servic) => <Servis key={servic.id} servic={servic}></Servis>) 
                }
            </div>
        </div>
    );
};

export default Services;