import React from 'react';
import './styles.css';

function SubSection({ children }) {
    return (
        <section className='sub-section'>
            {children}
        </section>
    );
}

export default SubSection;