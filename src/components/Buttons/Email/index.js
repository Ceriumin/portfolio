import React from 'react';
import { Clipboard } from '../../../assets/icons';
import './styles.css';

function EmailButton() {
    const [buttonText, setButtonText] = React.useState('Copy Email');
    const [isCopied, setIsCopied] = React.useState(false);

    const handleButtonClick = () => {
        setButtonText('Copied!');
        navigator.clipboard.writeText('personal@baryla.co.uk');
        setIsCopied(true);
        setTimeout(() => {
            setButtonText('Copy Email');
            setIsCopied(false);
        }, 1000);
    }

    return (
        <div className={`email-button ${isCopied ? 'copying' : ''}`} onClick={handleButtonClick}>
            <div className="email-icon">
                <Clipboard/>
            </div>
            <span className={isCopied ?  'a' : 'b'}>{buttonText}</span>
        </div>
    );
}

export default EmailButton;