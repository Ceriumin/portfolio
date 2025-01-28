import React from 'react';
import { 
    Header, 
    SubSection,
    Section,
    Footer,
    ProductList,
    ProjectList
} from '../../../components';
import { Link } from 'react-router-dom';
import { useSiteValue } from '../../../context/SiteContext';

function Projects() {
    
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
                    <ProjectList maxItems={20}/>
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
                    <ProductList maxItems={20}/>
                </SubSection>
                <Footer bannerVisibility={true}/>
            </div>
        </Section>
    );
}

export default Projects;

