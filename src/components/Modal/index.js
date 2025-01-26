import React from 'react';
import { CustomButton } from '../index.js';
import { Cross } from '../../assets/icons/index.js';
import './styles.css';

const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Site is Under Construction</h2>
                <p>Hello!</p>
                <p>This site is still relatively new, therefore some things</p>
                <p>may be unfinished, especially the project pages, and the mobile</p>
                <p>version. I am still very eager to show off some of my projects</p>
                <p>but please understand my site is still being worked on!</p>
                <div style={{height: '25px'}}/>
                <p>Thank you for your patience!</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <CustomButton rightIcon={<Cross fill='grey'/>} onClick={onClose} style={{marginTop: '20px', width: 100}}>
                        Dismiss
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Modal;