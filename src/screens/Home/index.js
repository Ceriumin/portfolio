import React from 'react';
import { StatusBar, ProfilePicture, Device } from '../../components';
import { Underglow, Resurgence, Planable } from '../../assets/devices';
import './styles.css';

const Home = () => {

    const devices = [
        { id: 5, type: 'Application', title: 'Planable', img: Planable, isFinished: true, className: 'devices__phone' },
        { id: 4, type: 'Video Game', title: 'Underglow', img: Underglow, isFinished: true, className: 'devices__laptop' },
        { id: 3, type: 'Video Game', title: 'Resurgence', img: Resurgence, isFinished: true, className: 'devices__laptop' },
        { id: 2, type: 'Website', title: 'Dog Show', img: undefined, isFinished: true },
        { id: 1, type: 'Application', title: 'CliniQ', img: undefined, isFinished: false },
        { id: 0, type: 'Application', title: 'Guitarpal', img: undefined, isFinished: false },
    ];

    return (
        <div className = 'home'>
            <ProfilePicture />
            <div className = 'description'>
                <h3>HI, I AM GRACJAN</h3>
                <h1>Software & Application Developer from Poland. Studying CS at the University of Huddersfield.</h1>
                <p>I specialize in making various mobile applications and websites, mainly using React.</p>
                <p>I also have made video games in the past and love to make different types of software </p>
                <StatusBar />
            </div>
            <div className = 'devices'>
                {devices.slice().reverse().map(device => (
                    <Device 
                        key = {device.id} 
                        type = {device.type}
                        title = {device.title}
                        img = {device.img}
                        isFinished = {device.isFinished}
                        className = {device.className}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;