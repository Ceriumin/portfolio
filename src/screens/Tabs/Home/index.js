import React, {useState, useEffect} from 'react';
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
    Section,
    Modal
} from '../../../components';
import { useSiteValue } from '../../../context/SiteContext';
import { Arrow } from '../../../assets/icons';
import source from '../../../assets/memoji.webp';
import './styles.css';

function Home() {

    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const isModalDismissed = localStorage.getItem('isModalDismissed');
        if (!isModalDismissed) {
            setModalVisible(true);
        }
    }, []);

    const handleCloseModal = () => {
        setModalVisible(false);
    };


    const { projects, products } = useSiteValue();

    const navigate = () => {
        window.location.href = '/projects';
    };

    const filteredProjects = projects
        .sort((a, b) => a.id - b.id)
        .slice(0, 3);

    const filteredProducts = products
        .sort((a, b) => a.id - b.id)
        .slice(0, 3);

    return (
        <Section>
            <Modal isVisible={isModalVisible} onClose={handleCloseModal}/>
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
                    {filteredProjects.map(project => (
                        <div key={project.id} style={{marginBottom: '0.75rem'}}>
                            <Link to={`/projects/${project.title.toLowerCase()}`}>
                                <ProjectButton 
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                    status={project.status}
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
                    {filteredProducts.map(products => (
                        <Link key={products.id} to={`/projects/${products.title.toLowerCase()}`}>
                            <ProductButton
                                title={products.title}
                                description={products.description}
                                image={products.image}
                                link={products.link}
                            />
                        </Link>
                    ))}
                </SubSection>
                <Footer bannerVisibility={true}/>
            </div>
        </Section>
    );
}

export default Home;