import React from 'react';
import { Plus } from '../../../assets/icons';
import resume from '../../../assets/Resume.pdf'; // Ensure the path is correct
import './styles.css';

function ResumeButton() {
    const handleResumeClick = () => {
        window.open(resume, '_blank');
    };

    return (
        <div className="resume-button" onClick={handleResumeClick}>
            <div className="resume-icon">
                <Plus />
            </div>
            <span>Resume</span>
        </div>
    );
}

export default ResumeButton;