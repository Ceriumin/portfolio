import React from 'react';
import { 
    Header, 
    ProjectButton,
    ProductButton,
    SubSection,
    Section,
    Footer
} from '../../../components';
import { Underglow, Placeholder, Portfolio } from '../../../assets/projects/index';

function Projects() {
    
    const projects = [
        {id: 1, title: 'Planable', description: 'Mobile Application', image: Placeholder, onClick: () => {}},
        {id: 3, title: 'Underglow', description: 'Video Game', image: Underglow, onClick: () => {}},
        {id: 4, title: 'Resurgence', description: 'Video Game', image: Placeholder, onClick: () => {}},
        {id: 5, title: 'Portfolio', description: 'Website', image: Portfolio, onClick: () => {}},
        {id: 5, title: 'Poppleton Dog Show', description: 'Website', image: Placeholder, onClick: () => {}},
        {id: 2, title: 'CliniQ', description: 'Mobile Application', image: Placeholder, onClick: () => {}, status: true},
    ]

    return (
        <Section>
            <div className='projects'>
                <Header>
                    Projects
                </Header>
                <div style={{marginBottom: '3rem'}}>
                    <h1>My Works</h1>
                    <p>
                        Discover my portfolio, both academic and personal work. My work strives to enhance experiences and inspire, and
                        demonstrates my ability to create and innovate.
                    </p>
                </div>
                <SubSection>
                    {projects.map(project => (
                        <div key={project.id} style={{marginBottom: '0.75rem'}}>
                            <ProjectButton 
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                onClick={project.onClick}
                                status={project.status}
                            />
                        </div>
                    ))}
                </SubSection>
                <div style={{marginBottom: '3rem'}}>
                    <h1>Explore my Products</h1>
                    <p>
                        Some of my personal projects with the aim of helping solve real-world problems. These projects are a result of my
                        passion for technology.
                    </p>
                </div>
                <SubSection>
                    <Header style={{marginBottom: '1rem'}}>
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

export default Projects;

