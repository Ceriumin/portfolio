import React from 'react';
import { ProfilePicture } from '../../components';
import './styles.css';

function Home() {
    return (
        <div className='home'>
            <section className='description'>
                <div>
                    <h1>I'm Gracjan</h1>
                    <p>Software Developer from Poland.</p>
                    <p>Currently studying at The University of Huddersfield</p>
                </div>
                <ProfilePicture />
            </section>
        </div>
    );
}

export default Home;