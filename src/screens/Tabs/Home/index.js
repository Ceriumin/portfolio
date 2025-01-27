import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { 
    ProfilePicture, 
    Header, 
    Status, 
    EmailButton, 
    ResumeButton, 
    CustomButton,
    SubSection,
    Footer,
    Section,
    Modal,
    ProjectList,
    ProductList
} from '../../../components';
import { Arrow } from '../../../assets/icons';
import source from '../../../assets/memoji.webp';
import { useNavigate } from 'react-router-dom';
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
        localStorage.setItem('isModalDismissed', true);
    };

    const navigate = useNavigate();

    const handleNavigation = () => {
      navigate('/projects');
    };
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
                    <Header style={{marginBottom: '25px'}} content={<CustomButton onClick={handleNavigation} leftIcon={<Arrow/>}>View All</CustomButton>}>
                        Pinned Projects
                    </Header> 
                    <ProjectList maxItems={3}/>
                </SubSection>
                <div style={{height: '15px'}}/>
                <SubSection>
                    <Header style={{marginBottom: '25px'}}>
                        Products
                    </Header>
                    <ProductList maxItems={3}/>
                </SubSection>
                <Footer bannerVisibility={true}/>
            </div>
        </Section>
    );
}

export default Home;