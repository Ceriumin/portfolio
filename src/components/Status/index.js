import React from 'react';
import './styles.css';

function Status({ children, color, onPress }) {
    return (
        <div 
        className='status' 
        style={{ backgroundColor: color }}
        onClick={onPress}>
            <div className = 'point'/>
            <p>{children}</p>
        </div>
    );
}

export default Status;