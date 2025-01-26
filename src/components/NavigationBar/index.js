import React from 'react';
import { Home, About, Projects } from '../../assets/icons';
import { Link } from 'react-router-dom';
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
                <li>
                    <Link to="/">
                        <Button source={<Home />} name="Home" isActive={location.pathname === '/'} />
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <Button source={<About />} name="About" isActive={location.pathname === '/about'} />
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                        <Button source={<Projects />} name="Projects" isActive={location.pathname === '/projects'} />
                    </Link>
                </li>
            </ul>
            <ResumeButton />
        </nav>
    );
}

export default NavigationBar;