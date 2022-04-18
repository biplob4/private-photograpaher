import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='text-center container mx-auto'>
            <div className=" blogs blogs-chid  mt-5 py-5 p-3 mx-auto  p-2">
                <h4 className='text-primary mb-2'>1. Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p className='text-secondary'>We use Firebase to improve user experience.I use Firebase for the authentication system and remote storage on the back and side. Apart from Firebase, we can use the following sites as an alternative
                    1.Okta,
                    2.AWS Amplify,
                    3.Kuzzle,
                    4.Couchbase,
                    5.NativeScript,
                    </p>
            </div>
            <div className="blogs p-3 mx-auto  mt-5 py-5  blogs-chid  p-2">
                <h4 className='text-primary mb-2'>2. Difference between authorization and authentication?</h4>
                <p className='text-secondary'>1..During the approval process, the authority of an individual or user to access resources is examined.
                    2.. In the authentication process, the user or person is verified. During this process, the user or person is verified.
                    3. Authentication determines whether the person is a user. Although it determines what user permission?</p>
            </div>
            <div className="blogs p-3 mx-auto  mt-5 py-5 blogs-chid  p-2">
                <h4 className='text-primary mb-2'>3. What other services does firebase provide other than authentication?</h4>
                <p className='text-secondary'>We can implement many more options in Firebase such as hosting. I can use storage on the back side. Moreover, to improve the user experience, we can send messages to all device.Ad shows can be done from Firebase and many more features are available from Firebase</p>
            </div>
        </div>
    );
};

export default Blogs;