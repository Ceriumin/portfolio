import React from 'react';
import { Plus } from '../../../assets/icons';
import './styles.css';

function ResumeButton() {
    return (
        <div className="resume-button">
            <div className="resume-icon">
                <Plus />
            </div>
            <span>Resume</span>
        </div>
    );
}

export default ResumeButton;