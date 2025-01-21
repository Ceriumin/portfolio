import React from 'react';
import { ProfilePicture, Header, Status, Button } from '../../components';
import './styles.css';

function Home() {
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
            <Button onClick={() => null}>Contact</Button>
        </div>
    );
}

export default Home;