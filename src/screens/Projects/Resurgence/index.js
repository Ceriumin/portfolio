import React from 'react';
import { Section, SubSection, CustomButton, FakeButton } from '../../../components';
import { Diagonal_Arrow, Download } from '../../../assets/icons';
import './styles.css';

function Resurgence() {

    const file = 'https://drive.google.com/uc?export=download&id=1UAr06AqITAvl8tjMQU6xF8IQMLSnJXkB';

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
                            <span>Video Game</span>
                        </div>
                        <div className='page__info'>
                            <span>Tools</span>
                            <span>Unity 3D, C#</span>
                        </div>
                        <div className='page__info'>
                            <span>Year</span>
                            <span>2023</span>
                        </div>
                    </section>
            </SubSection>
            <h1>Resurgence</h1>
            <p>
                Resurgence is a 3D combat flight simulator created as a College Project 
                in Unity, which also helped me subsequently land the highest mark to help
                me get into university. It has a strong emphasis on flight mechanics and
                simulation as well as providing a balance between realism and an arcade 
                feel.
            </p>
            <div className='page__buttons'>
                <CustomButton 
                    href={file}
                    download
                    rightIcon={<Download stroke='grey'/>}
                >
                    Download
                </CustomButton>
            </div>
            {/*<p>
                I am a large fan of flight simulation software, such as the likes of Digital Combat Simulator,
                however some of the games are too expensive, too complicated or too simple, and never in the 
                middle. This is where Resurgence comes in, providing a balance between realism and arcade,
                and was the motivation behind the project.
            </p>*/}

        </Section>
    );
}

export default Resurgence;