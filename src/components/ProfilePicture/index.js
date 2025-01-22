import React from 'react';
import './styles.css';

function ProfilePicture({source}) {
    return (
        <div className="container">
            <div className='outer-circle'>
                <div className="circle">
                    <img src={source} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default ProfilePicture;