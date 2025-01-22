import React from 'react';
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
    Footer
} from '../../components';
import { Arrow } from '../../assets/icons';
import source from '../../assets/memoji.webp';
import './styles.css';

function Home() {

    const projects = [
        {id: 1, title: 'Resurgence', description: 'Video Game', image: 'image1', onClick: () => {}},
        {id: 2, title: 'Resurgence', description: 'Video Game', image: 'image1', onClick: () => {}},
        {id: 3, title: 'Resurgence', description: 'Flight Simulator', image: 'image1', onClick: () => {}},

    ]

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
                <ProfilePicture source={source} />
            </section>
            <div className='buttons'>
                <ResumeButton />
                <EmailButton />
            </div>
            <SubSection>
                <Header style={{marginBottom: '25px'}} content={<CustomButton leftIcon={<Arrow/>}>View All</CustomButton>}>
                    Pinned Projects
                </Header> 
                {projects.map(project => (
                    <div key={project.id} style={{marginBottom: '0.75rem'}}>
                        <ProjectButton 
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            onClick={project.onClick}
                        />
                    </div>
                ))}
            </SubSection>
            <SubSection>
                <Header style={{marginBottom: '25px'}}>
                    Products
                </Header>
                <ProductButton 
                    title='GuitarPal'
                    image='image1'
                    onClick={() => {}}
                />
            </SubSection>
            <Footer bannerVisibility={true}/>
        </div>
    );
}

export default Home;