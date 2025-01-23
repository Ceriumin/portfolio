import React from 'react';
import './styles.css';

function Status({ children, color, onPress }) {
    return (
        <div 
        className='status' 
        style={{ backgroundColor: color }}
        onClick={onPress}>
            <div className = 'point'/>
            <span>{children}</span>
        </div>
    );
}

export default Status;