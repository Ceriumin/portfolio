import React from 'react';
import Picture from '../../assets/memoji.webp';
import './styles.css';

function ProfilePicture() {
    return (
        <div className="container">
            <div className="circle">
                <img src={Picture} alt="Profile" />
            </div>
        </div>
    );
}

export default ProfilePicture;