import React from 'react';
import { useSiteValue } from '../../../context/SiteContext';
import { Header, SubSection, Footer, Section, ProductList } from '../../../components';
import './styles.css';

function About() {

    const { products } = useSiteValue();

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
                    <h2>More About Me</h2>
                    <p>
                        I am currently pursuing a Bachelor's degree in Computer Science at the
                        University of Huddersfield and have a relentless drive for success and excellence.
                        I am Actively involved in the development community, as well as regularly participate in
                        hackathons, coding competitions, and sometimes contribute to open-source projects, as well as
                        developing my own passion projects.
                    </p>
                    <div style={{height: '10px'}}/>
                    <p>
                        When I am not immersed in code, I find solace in playing the Acoustic Guitar and
                        exploring coffee shops in the local area and city, as well as spending time with
                        my loved ones. Additionally, to keep healthy mentally and physically,
                        I enjoy lifting weights at my local, and university gym.
                    </p>
                    <h2>My Side Projects</h2>
                    <p>I have some passion side projects. I like to solve helpful problems and a lot of these projects are
                        intertwined with my interests and hobbies.
                    </p>
                    <div style={{height: '25px'}}/>
                    <SubSection>
                        <ProductList maxItems={3}/>
                    </SubSection>
                    <Footer bannerVisibility={true}/>
                </section>
            </div>  
        </Section>
    );
}

export default About;