import React from 'react';
import './styles.css';

function SubSection({ children, style }) {
    return (
        <section className='sub-section' style={style}>
            {children}
        </section>
    );
}

export default SubSection;