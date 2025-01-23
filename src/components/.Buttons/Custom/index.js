import React from 'react';
import './styles.css';

function CustomButton({href, download, children, leftIcon, rightIcon, onClick, style}) {
    return (
        <a 
            href={href} 
            download={download} 
            className="custom-button" 
            onClick={onClick} 
            style={style}
        >
            <div className="custom-icon">
                {rightIcon}
            </div>
            <span>{children}</span>
            <div className="custom-icon">
                {leftIcon}
            </div>
        </a>
    );
}

export default CustomButton;