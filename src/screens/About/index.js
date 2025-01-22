import React from 'react';
import { Placeholder } from '../../assets/projects';
import { Header, ProductButton, SubSection, Footer, Section } from '../../components';
import './styles.css';

function About() {
    return (
        <Section>
            <div className="about">
                <Header>
                    About
                </Header>
                <section className="about-content">
                    <h1>It's Me Gracjan</h1>
                    <p>
                        I'm Gracjan, a student currently residing and studying in the United Kingdom.
                        I have a deep passion for developing purposeful software solutions and Products
                        that can help solve real-world problems. I have a strong foundation in software
                        development and I am always looking to learn new technologies and frameworks to
                        improve my skills and knowledge, whilst also contributing to the tech community.
                    </p>
                    <h1>More About Me</h1>
                    <p>
                        Gracjan is currently pursuing a Bachelor's degree in Computer Science at the
                        University of Huddersfield and has a relentless drive for success and excellence.
                        Actively involved in the development community, Gracjan regularly participates in
                        hackathons, coding competitions, and contributes to open-source projects, as well as
                        developing his own.
                    </p>
                    <div style={{height: '10px'}}/>
                    <p>
                        When he's not immersed in code, he finds solace in playing the Acoustic Guitar and
                        exploring coffee shops in the local area and city, as well as spending time with
                        family and with his girlfriend.
                    </p>
                    <h1>My Side Projects</h1>
                    <p>I have some passion side projects. I like to solve helpful problems and a lot of these projects are
                        intertwined with my interests and hobbies.
                    </p>
                    <div style={{height: '25px'}}/>
                    <SubSection>
                        <ProductButton title="GuitarPal" image={Placeholder} onClick={() => {}} />
                    </SubSection>
                    <Footer bannerVisibility={true}/>
                </section>
            </div>  
        </Section>
    );
}

export default About;