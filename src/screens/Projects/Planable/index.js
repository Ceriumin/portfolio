import React from 'react';
import { Section, SubSection, CustomButton, FakeButton } from '../../../components';
import { Diagonal_Arrow } from '../../../assets/icons';
import './styles.css';

function Planable() {

    return (
        <Section className='page'>
            <SubSection style={{marginTop: '-15px'}}>
                <section className='page__info-container'>
                        <div className='page__info'>
                            <span>Contributors</span>
                            <span>Gracjan Baryla, Joshua Andrew, Harry Atkinson, Rohil Ali, Shaun Akuezumba</span>
                        </div>
                        <div className='page__info'>
                            <span>Type</span>
                            <span>Mobile Application</span>
                        </div>
                        <div className='page__info'>
                            <span>Tools</span>
                            <span>MAUI, C#, .NET</span>
                        </div>
                        <div className='page__info'>
                            <span>Year</span>
                            <span>2024</span>
                        </div>
                    </section>
            </SubSection>
            <h1>Planable</h1>
            <p>
                Planable is a student finance planner application, designed to help students manage their finances and budgeting.
                The application is designed to be simple and easy to use, with a focus on student-friendly features. Helped lead
                the development of the application, and worked on the front-end design and back-end functionality.
            </p>
            <div className='page__buttons'>
                <CustomButton 
                    leftIcon={<Diagonal_Arrow stroke='grey'/>}
                    onClick={() => window.open('https://github.com/Ceriumin/Planable')}
                >
                    Source Code
                </CustomButton>
            </div>

        </Section>
    );
}

export default Planable;