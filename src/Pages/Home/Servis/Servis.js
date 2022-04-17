import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Servis.css'

const Servis = ({ servic }) => {
    const nevigate = useNavigate();
    const hendalCheckOut =()=>{
        nevigate("/home/"+servic.id)
    }
    return (
        <div className='singeleServic'>
            <h4 className="text-primary text-center py-2">{servic.name}</h4>
            <p>{servic.discription}</p>
            <div className="singeleServicImg"><img src={servic.img} alt="img" /></div>
            <h5><span className='text-peimary text-smal'>Price:</span> {servic.price}</h5>
            <button onClick={hendalCheckOut} className='singeleServic-btn'>Please check out</button>
        </div>
    );
};

export default Servis;