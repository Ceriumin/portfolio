import React from 'react';
import './styles.css';

function Button({ children, onClick, style, buttonStyle }) {
    return (
        <div className='button__container' style={style}>
            <button className='button' onClick={onClick} style={buttonStyle}>
                {children}
            </button>
        </div>
    );
}

export default Button;