import React from 'react';
import { Section, SubSection, CustomButton, FakeButton } from '../../../components';
import { Diagonal_Arrow } from '../../../assets/icons';
import './styles.css';

function Dogshow() {

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
                            <span>PHP, mySQL</span>
                        </div>
                        <div className='page__info'>
                            <span>Year</span>
                            <span>2025</span>
                        </div>
                    </section>
            </SubSection>
            <h1>Poppleton Dog Show</h1>
            <p>
                The Poppleton Dog show was a university project, tasked to create a website for a fictional dog show.
                The website was designed to query a database of dogs and their owners, and display them in a user-friendly manner.
                The website was built using PHP and mySQL, and was designed to be simple and easy to navigate, and demonstrate
                back-end functionality.
            </p>
            <div className='page__buttons'>
                <CustomButton 
                    leftIcon={<Diagonal_Arrow stroke='grey'/>}
                    onClick={() => window.open('https://github.com/Ceriumin/dog-show')}
                >
                    Source Code
                </CustomButton>
            </div>
        </Section>
    );
}

export default Dogshow;