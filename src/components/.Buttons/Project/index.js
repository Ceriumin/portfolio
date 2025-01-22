import React from 'react';
import { Chevron } from '../../../assets/icons';
import './styles.css';

function ProjectButton({ title, description, image, onClick }) {

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
            <Chevron className="chevron" />
        </div>
    );
}

export default ProjectButton;