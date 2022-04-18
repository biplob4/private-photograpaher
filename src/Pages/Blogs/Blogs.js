import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <div className="blogs w-50 text-center container p-3">
                <h3 className='text-primary mt-3'>Difference between authorization and authentication?</h3>
                <p className='text-secondary'></p>
            </div>
            <div className="blogs w-50 text-center p-3">
                <h3 className='text-primary mt-3'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='text-secondary'></p>
            </div>
            <div className="blogs w-50 text-center p-3">
                <h3 className='text-primary mt-3'>What other services does firebase provide other than authentication?</h3>
                <p className='text-secondary'></p>
            </div>
        </div>
    );
};

export default Blogs;