import React from 'react';
import { ProfilePicture, Header, Status, Button } from '../../components';
import './styles.css';

function Home() {
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
    };

    return (
        <div className='home'>
            <Header content={<Status>Looking for Internship</Status>}>
                Software Developer
            </Header>
            <section className='description'>
                <div>
                    <h1>I'm Gracjan</h1>
                    <p>Software Developer from Poland.</p>
                    <p>Currently studying at The University of Huddersfield.</p>
                </div>
                <ProfilePicture />
            </section>
            <Button onClick={handleButtonClick} buttonStyle={{minWidth: '125px'}}>
                <span className={isCopied ? 'copied' : 'alt'}>{buttonText}</span>
            </Button>        
        </div>
    );
}

export default Home;