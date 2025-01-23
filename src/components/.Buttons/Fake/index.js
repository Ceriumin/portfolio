import React from 'react';
import './styles.css';

function FakeButton({children, leftIcon, rightIcon, style}) {
    return (
        <div
            className="fake-button" 
            style={style}
        >
            <div className="fake-button__custom-icon">
                {rightIcon}
            </div>
            <span>{children}</span>
            <div className="fake-button__custom-icon">
                {leftIcon}
            </div>
        </div>
    );
}

export default FakeButton;