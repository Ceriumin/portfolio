import React from 'react';
import './styles.css';

function ProfilePicture({source, style}) {
    return (
        <div className="container">
            <div className='outer-circle'>
                <div className="circle">
                    <img src={source} alt="Profile" style={style} />
                </div>
            </div>
        </div>
    );
}

export default ProfilePicture;