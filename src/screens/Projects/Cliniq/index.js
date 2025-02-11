import React from 'react';
import { Section, SubSection, CustomButton, FakeButton } from '../../../components';
import { Diagonal_Arrow } from '../../../assets/icons';
import './styles.css';

function Cliniq() {

    return (
        <Section className='page'>
            <SubSection style={{marginTop: '-15px'}}>
                <section className='page__info-container'>
                        <div className='page__info'>
                            <span>Contributors</span>
                            <span>Gracjan Baryla, Daaneyal Khan, Youssef Mohamed Sobhy Aladly, Tazain Khan, Eamon Miah, Kharis Akhlaq, Syed Waqas Ali Bukhari</span>
                        </div>
                        <div className='page__info'>
                            <span>Type</span>
                            <span>Mobile Application</span>
                        </div>
                        <div className='page__info'>
                            <span>Tools</span>
                            <span>React Native, Node.js, Expo</span>
                        </div>
                        <div className='page__info'>
                            <span>Year</span>
                            <span>2025</span>
                        </div>
                    </section>
            </SubSection>
            <h1>CliniQ</h1>
            <p>

            </p>
            <div className='page__buttons'>
                <CustomButton 
                    leftIcon={<Diagonal_Arrow stroke='grey'/>}
                    onClick={() => window.open('https://github.com/Ceriumin/medical-app')}
                >
                    Source Code
                </CustomButton>
            </div>
        </Section>
    );
}

export default Cliniq;