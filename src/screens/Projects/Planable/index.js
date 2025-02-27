import React from 'react';
import { Section, SubSection, CustomButton } from '../../../components';
import { Diagonal_Arrow } from '../../../assets/icons';
import './styles.css';

function Planable() {

    return (
        <Section className='page'>
            <SubSection style={{marginTop: '-15px'}}>
                <section className='page__info-container'>
                        <div className='page__info'>
                            <span>Contributors</span>
                            <span>Gracjan Baryla, Joshua Andrew, Harry Atkinson, Rohil Ali, Shaun Akuezumba</span>
                        </div>
                        <div className='page__info'>
                            <span>Type</span>
                            <span>Mobile Application</span>
                        </div>
                        <div className='page__info'>
                            <span>Tools</span>
                            <span>MAUI, C#, .NET</span>
                        </div>
                        <div className='page__info'>
                            <span>Year</span>
                            <span>2024</span>
                        </div>
                    </section>
            </SubSection>
            <h1>Planable</h1>
            <p>
                Planable is a student finance planner application, designed to help students manage their finances and budgeting.
                The application is designed to be simple and easy to use, with a focus on student-friendly features. Helped lead
                the development of the application, and worked on the front-end design and back-end functionality.
            </p>
            <div className='page__buttons'>
                <CustomButton 
                    leftIcon={<Diagonal_Arrow stroke='grey'/>}
                    onClick={() => window.open('https://github.com/Ceriumin/Planable')}
                >
                    Source Code
                </CustomButton>
            </div>
            <div>
                <img className='planable__image' src={require('../../../assets/renders/Planable.png')} alt='Planable 1'/>
            </div>
            <h2>
                The Problems to Solve
            </h2>
                <p>
                    The main problem we wanted to solve was the lack of student-friendly finance applications. Many applications
                    are either too complex, or not designed with students in mind. To tackle this, we wanted to create an application that was
                    simple to use, and focused on the needs of students. We also wanted to practice and hone our project management skills, and
                    learn how to develop a mobile application from start to finish similar to a real-world industry project.
                </p>
            <h2>
                The Solution
            </h2>
                <p>
                    We developed Planable, a student finance planner application that is designed to be simple and easy to use. The application
                    consists of a dashboard that displays the user's current balance, and allows them to add transactions, view their transaction history,
                    and set budgets. The application also includes a feature that allows users to set savings goals, and contains a finance calculator
                    that allows users to calculate their monthly expenses. The application is designed to be user-friendly, and includes a clean and
                    intuitive interface.
                </p>
        </Section>
    );
}

export default Planable;