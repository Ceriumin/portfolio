import React, { useEffect, useState } from 'react';
import DarkenColor from '../../utils/DarkenColor';
import './styles.css';

function StatusBar() {
    const init = '#90ee90';

    const [color, setColor] = useState(init);
    
    useEffect(() => {
        const newColor = DarkenColor(init, -100); 
        setColor(newColor);
    }, [init]);

    return (
        <div className='status-bar' style={{ backgroundColor: init }}>
            <div className="status-bar__icon" style={{ backgroundColor: color }} />
            <p style={{ color: color }}>Looking for a Summer 2025 Internship</p>
        </div>
    );
}

export default StatusBar;