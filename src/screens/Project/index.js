import React from "react";
import { Section } from "../../components";
import { useParams } from 'react-router-dom';

function Project() {
    const {id} = useParams();
    
    return (
        <Section>
            <div>
                <h1>Project {id}</h1>
            </div>
        </Section>
    );
}

export default Project;