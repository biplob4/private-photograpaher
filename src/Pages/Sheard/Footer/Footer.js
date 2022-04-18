import React from 'react';
import footerIcon from '../../../imaige/logo2.jpg';
import './Footer.css'

const Footer = () => {
    let date = new Date().toLocaleDateString()
    const FormattedDate = `${date}`

    return (
        <div style={{ height: "300px" }} className='bg-praimary fotter mt-5'>
            <div className="">
                <img className='d-block' src={footerIcon} alt="imageie" />
                <p className='mt-5'>Copiright &copy; BiploobHossen {FormattedDate}</p>
            </div>
        </div>
    );
};

export default Footer;