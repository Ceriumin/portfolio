import React from 'react';
import { StatusBar, ProfilePicture, Device } from '../../components';
import { Underglow, Resurgence } from '../../assets/devices';
import './styles.css';

const Home = () => {

    const devices = [
        { id: 1, type: 'Video Game', title: 'Underglow', img: Underglow },
        { id: 1, type: 'Video Game', title: 'Resurgence', img: Resurgence },

    ];

    return (
        <div className = 'home'>
            <ProfilePicture />
            <div className = 'description'>
                <h3>HI, I AM GRACJAN</h3>
                <h1>Software + Application Developer from Poland. Studying CS at the University of Huddersfield.</h1>
                <p>I specialize in making various mobile applications and websites, mainly using React.</p>
                <p>I also have made video games in the past and love to make different types of software </p>
                <StatusBar />
            </div>
            <div className = 'devices'>
                {devices.map(device => (
                    <Device 
                        key = {device.id} 
                        type = {device.type}
                        title = {device.title}
                        img = {device.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;