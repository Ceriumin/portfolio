import React from 'react';
import { Chevron } from '../../../assets/icons';
import './styles.css';

function ProjectButton({ title, description, image, onClick, status }) {

    const Wrapper = () => {
        return (
            <diV className="image__container">
                <img src={image} alt={title} className='project__image'/>
            </diV>
        );
    }

    return (
        <div className="project-button" onClick={onClick}>
            <div className="project-content">
                <Wrapper />
                <div className="project-description">
                    <h2>{title}</h2>
                    <div className="gap" ></div>
                    <p>{description}</p>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {status && <h3 className="project-status">coming soon</h3>}
                <Chevron className="chevron" />
            </div>
        </div>
    );
}

export default ProjectButton;