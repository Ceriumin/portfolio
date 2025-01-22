import React from 'react';
import './styles.css';

import { EmailButton, ResumeButton, SubSection, Header } from '../';
import { GitHub, LinkedIn } from '../../assets/icons';

function Footer({ bannerVisibility}) {

    const Icon = ({image}) => {
        return (
            <div className='footer__icon'>
                {image}
            </div>
        );
    }

        const fetchTime = () => {
            const now = new Date();
            return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };

        const [currentTime, setCurrentTime] = React.useState(fetchTime());

        React.useEffect(() => {
            const timer = setInterval(() => {
            setCurrentTime(fetchTime());
            }, 1000);

            return () => clearInterval(timer);
        }, []);

    return (
        <div className='footer'>
            {bannerVisibility && <div>
                <h1>Let's work together.</h1>
                <p>
                    Developing apps and websites in React & React Native,
                    and plenty of other technologies. Let's make something great.
                </p>
                <div className='footer-buttons'>
                    <ResumeButton />
                    <EmailButton />
                </div>
            </div>}
            <SubSection>
                <div className='footer__icons'>
                    <Header>
                        Follow Me
                    </Header>
                    <div style={{display: 'flex', gap: '0.5rem'}}>
                        <a href='https://github.com/Ceriumin' target='_blank' rel='noreferrer' className='footer__icon-link'>
                            <Icon image={<GitHub/>}/>
                        </a>
                        <a href='https://www.linkedin.com/in/ceriumin/' target='_blank' rel='noreferrer' className='footer__icon-link'>
                            <Icon image={<LinkedIn/>}/>
                        </a>
                    </div>
                </div>
            </SubSection>
            <SubSection>
                <div className='footer__copy'>
                    <p>Gracjan. 2025 - 2077</p>
                    <p>Leeds • {fetchTime()}</p>
                </div>
            </SubSection>
        </div>
    );
}

export default Footer;