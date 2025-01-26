import React from 'react';
import { Section, SubSection, CustomButton, FakeButton } from '../../../components';
import { Diagonal_Arrow } from '../../../assets/icons';
import './styles.css';

function Portfolio() {

    return (
        <Section className='page'>
            <SubSection style={{marginTop: '-15px'}}>
                <section className='page__info-container'>
                        <div className='page__info'>
                            <span>Contributors</span>
                            <span>Gracjan Baryla</span>
                        </div>
                        <div className='page__info'>
                            <span>Type</span>
                            <span>Website</span>
                        </div>
                        <div className='page__info'>
                            <span>Tools</span>
                            <span>React.js</span>
                        </div>
                        <div className='page__info'>
                            <span>Year</span>
                            <span>2025</span>
                        </div>
                    </section>
            </SubSection>
            <h1>My Portfolio</h1>
            <p>
                This is my personal portfolio, showcasing my projects and skills. The website is built using React.js and is designed to be simple and easy to navigate,
                whilst also considering aesthetics to provide more context to the projects I have worked on. You are viewing my portfolio right now!
            </p>
            <div className='page__buttons'>
                <CustomButton 
                    leftIcon={<Diagonal_Arrow stroke='grey'/>}
                    onClick={() => window.open('https://github.com/Ceriumin/portfolio')}
                >
                    Source Code
                </CustomButton>
            </div>
        </Section>
    );
}

export default Portfolio;