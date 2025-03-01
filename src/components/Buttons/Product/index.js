import React from 'react';
import { Diagonal_Arrow } from '../../../assets/icons';
import './styles.css';

function ProductButton({ title, image, onClick }) {

    const Wrapper = () => {
        return (
            <div className="product-image__container">
                <img src={image} alt={title} className="product__image"/>
            </div>
        );
    }

    return (
        <div className="product-button" onClick={onClick}>
            <div className="product-content">
                <Wrapper />
                <div className="product-description">
                    <h2>{title}</h2>
                </div>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h3 className="product-status">coming soon</h3>
                <Diagonal_Arrow className="arrow" />
            </div>
        </div>
    );
}

export default ProductButton;