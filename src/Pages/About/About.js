import React from 'react';
import './About.css';
import biplobImg from '../../imaige/biplob.jpg'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const nevigate = useNavigate()
    return (
        <div className='w-100 about-container'>
            <div className="container about-me">
                <div className="mx-auto">
                    <div className="">
                        <h2 className='text-primary'>BIPLOB HOSSEN</h2>
                        <h3>Professional Photographer And Video</h3>
                        <img src={biplobImg} alt="img" />
                        <p className='mx-auto'>Hello,,<br /> Iam <strong>BIPLOB</strong> thank you for visiting my website.I have been doing photography for the last five years and I have a lot of reputation.I have a goal of doing 10,000 photographs in the next one year.You can hire me if you want</p>
                        <button onClick={()=>nevigate("/checkout")} className='hire-Btn text-light mb-3'>Hire ME</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;