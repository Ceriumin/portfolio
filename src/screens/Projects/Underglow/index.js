import React from 'react';
import { Section, SubSection, CustomButton, FakeButton } from '../../../components';
import { Diagonal_Arrow, Download } from '../../../assets/icons';
import './styles.css';

function Underglow() {

    const file = 'https://drive.google.com/uc?export=download&id=1Sy7YeWiuVkiYWqCFmT3fu9A-CEWJY3ob';

    return (
        <Section className='page'>
            <SubSection style={{marginTop: '-15px'}}>
                <section className='page__info-container'>
                        <div className='page__info'>
                            <span>Contributors</span>
                            <span>Gracjan Baryla, Thomas Jowsey</span>
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
                            <span>2022</span>
                        </div>
                    </section>
            </SubSection>
            <h1>Underglow</h1>
            <p>Underglow is an underground street racing prototype, 
                created in ~10 days for a game jam, along with a 
                friend of mine. The game is a 3D racing game containing
                an emphasis on vehicle physics and unique mechanics.
                Developed in Unity.
            </p>
            <div className='page__buttons'>
                <CustomButton 
                    href={file}
                    download
                    rightIcon={<Download stroke='grey'/>}
                >
                    Download
                </CustomButton>
                <CustomButton 
                    onClick={() => window.open('https://compiled.itch.io/underglow')}
                    leftIcon={<Diagonal_Arrow stroke='white'/>}
                    style={{backgroundColor: 'black', color: 'white'}}
                >
                    Visit Site
                </CustomButton>
            </div>

        </Section>
    );
}

export default Underglow;