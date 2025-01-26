import React from 'react';
import { 
    Header, 
    ProjectButton,
    ProductButton,
    SubSection,
    Section,
    Footer
} from '../../../components';
import { Link } from 'react-router-dom';
import { useSiteValue } from '../../../context/SiteContext';

function Projects() {
    
    const { projects, products  } = useSiteValue();

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
                            <Link to={`/projects/${project.title.toLowerCase()}`}>
                                <ProjectButton 
                                    title={project.title}
                                    description={project.description}
                                    status={project.status}
                                    image={project.image}
                                    onClick={project.onClick}
                                />
                            </Link>
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
                    {products.map(product => (
                        <Link key={product.id} to={`/projects/${product.title.toLowerCase()}`}>
                            <ProductButton
                                title={product.title}
                                description={product.description}

                                source={product.source}
                                link={product.link}
                            />
                        </Link>
                    ))}
                </SubSection>
                <Footer bannerVisibility={true}/>
            </div>
        </Section>
    );
}

export default Projects;

