import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ProfilePicture, 
    Header, 
    Status, 
    EmailButton, 
    ResumeButton, 
    CustomButton,
    ProjectButton,
    SubSection,
    ProductButton,
    Footer,
    Section
} from '../../../components';
import { Underglow, Placeholder, Planable, Resurgence } from '../../../assets/projects/index';
import { Arrow } from '../../../assets/icons';
import source from '../../../assets/memoji.webp';
import './styles.css';

function Home() {
    
    const projects = [
        {id: 1, title: 'Planable', description: 'Application', image: Planable},
        {id: 2, title: 'Underglow', description: 'Video Game', image: Underglow},
        {id: 3, title: 'Resurgence', description: 'Video Game', image: Resurgence},
    ]

    const navigate = () => {
        window.location.href = '/projects';
    };

    return (
        <Section>
            <div className='home'>
                <Header content={<Status>Looking for Internship</Status>}>
                    Software Developer
                </Header>
                <section className='description'>
                    <div>
                        <h1>I'm Gracjan</h1>
                        <p>Software Developer from Poland. </p>
                        <p>Currently studying at The University of Huddersfield.</p>
                    </div>
                    <ProfilePicture source={source} />
                </section>
                <div className='buttons'>
                    <ResumeButton />
                    <EmailButton />
                </div>
                <SubSection>
                    <Header style={{marginBottom: '25px'}} content={<CustomButton onClick={navigate} leftIcon={<Arrow/>}>View All</CustomButton>}>
                        Pinned Projects
                    </Header> 
                    {projects.map(project => (
                        <div key={project.id} style={{marginBottom: '0.75rem'}}>
                            <Link to={`/projects/${project.title.toLowerCase()}`}>
                                <ProjectButton 
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    onClick={project.onClick}
                                />
                            </Link>
                        </div>
                    ))}
                </SubSection>
                <div style={{height: '15px'}}/>
                <SubSection>
                    <Header style={{marginBottom: '25px'}}>
                        Products
                    </Header>
                    <ProductButton 
                        title='GuitarPal'
                        image={Placeholder}
                        onClick={() => {}}
                    />
                </SubSection>
                <Footer bannerVisibility={true}/>
            </div>
        </Section>
    );
}

export default Home;