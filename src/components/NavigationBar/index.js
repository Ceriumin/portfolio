import React from 'react';
import './index.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="navbar__label">Gracjan Baryla</a>
            <ul className="navbar__list">
                <li className="navbar__item"><a href="#">About</a></li>
                <li className="navbar__item"><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;