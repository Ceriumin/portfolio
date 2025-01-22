import React from 'react';
import './styles.css';

function CustomButton({children, leftIcon, rightIcon}) {
    return (
        <div className="custom-button">
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