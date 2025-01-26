import React from 'react';
import { Section, SubSection, FakeButton } from '../../../components';
import { Padlock } from '../../../assets/icons';
import './styles.css';

function GuitarPal() {

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
                            <span>Mobile Application + Bluetooth Device</span>
                        </div>
                        <div className='page__info'>
                            <span>Tools</span>
                            <span>React Native</span>
                        </div>
                        <div className='page__info'>
                            <span>Year</span>
                            <span>N/A</span>
                        </div>
                    </section>
            </SubSection>
            <h1>GuitarPal</h1>
            <p>
                GuitarPal is an upcoming Low Energy Bluetooth device and mobile application designed to help guitarists, and in the future other musicians, monitor
                everything about their instruments' health, and their playing habits. The device will be able to monitor humidity, temperature, and be able to measure
                the tuning of the guitar, as well as interpret notes played by the user. 
            </p>
            <div className='page__buttons'>
                <FakeButton 
                    rightIcon={<Padlock stroke='grey'/>}
                >
                    Closed Source
                </FakeButton>
            </div>
        </Section>
    );
}

export default GuitarPal;