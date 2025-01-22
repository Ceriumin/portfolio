import React from 'react';
import './styles.css';

function CustomButton({children, leftIcon, rightIcon, onClick}) {
    return (
        <div className="custom-button" onClick={onClick}>
            <div className="custom-icon">
                {rightIcon}
            </div>
            <span>{children}</span>
            <div className="custom-icon">
                {leftIcon}
            </div>
        </div>
    );
}

export default CustomButton;