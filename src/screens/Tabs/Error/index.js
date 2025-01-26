import React from 'react';
import { Header, Section, Footer, ProfilePicture, CustomButton } from '../../../components';
import error from '../../../assets/error.webp';
import { Arrow_Back } from '../../../assets/icons';
import './styles.css';

function Error() {
    return (
        <Section>
            <div className='error'>
                <Header>
                    Oops! 404
                </Header>
                <ProfilePicture source={error} style={{width: 250, height: 250}}/>
                <div style={{textAlign: 'center'}}>
                    <h1>Page not Found.</h1>
                    <p>This page does not exist</p>
                </div>
                <div className='error__buttons'>
                    <CustomButton onClick={() => window.location.href = '/'}>Back to Home</CustomButton>
                </div>
            </div>
            <Footer bannerVisibility={false}/>
        </Section>
    );
}

export default Error;