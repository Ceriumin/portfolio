import React from 'react';
import './index.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <a href="/" className="navbar__label">Gracjan Baryla</a>
            <ul className="navbar__list">
                <li className="navbar__item"><a href="/About">About</a></li>
                <li className="navbar__item"><a href="mailto:churns.amblers-0o@icloud.com">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;