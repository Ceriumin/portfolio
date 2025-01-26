import React from 'react';
import { Home, About, Projects } from '../../assets/icons';
import { ResumeButton } from '../';
import './index.css';
import { useLocation } from 'react-router-dom';

const NavigationBar = () => {
    const location = useLocation();

    const Button = ({ source, name, isActive }) => {
        const clonedSource = React.cloneElement(source, { className: `navbar__button ${isActive ? 'active' : ''}` });

        return (
            <div className="button-container">
                <span className={`navbar__button-label ${isActive ? 'active' : ''}`}>
                    {name}
                </span>
                {clonedSource}
            </div>
        );
    }

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                <li><a href='/#'><Button source={<Home />} name="Home" isActive={location.pathname === '/'} /></a></li>
                <li><a href='/about'><Button source={<About />} name="About" isActive={location.pathname === '/about'} /></a></li>
                <li><a href='/projects'><Button source={<Projects />} name="Projects" isActive={location.pathname === '/projects'} /></a></li>
            </ul>
            <ResumeButton />
        </nav>
    );
}

export default NavigationBar;