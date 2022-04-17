import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Social.css'

const Social = () => {
    return (
        <div className='mt-3'>
            social
            {/* <FontAwesomeIcon icon={faGoogle}/> */}
            <FontAwesomeIcon icon="fa-brands fa-google" />
        </div>
    );
};

export default Social;