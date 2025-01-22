import React from 'react';
import './styles.css';

function Section({ children }) {
    return (
        <section className='section'>
            {children}
        </section>
    );
}

export default Section;