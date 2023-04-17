import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import SectionLayout from '../../Layout/SectionLayout';
import { InView } from 'react-intersection-observer';

const Projects = ({ setCurrentSection }) => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // integration of react hooks here
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    // rendering projects component here
    return (
        <SectionLayout id={'projects'} mainTitleText={'My Projects'} bgTitleText={'Projects'}>
            <InView as='div' threshold={0.2} onChange={inView => inView && setCurrentSection('Projects')}>
                <animated.div ref={ref} style={animProps} className='py-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-[95%] xl:w-4/5 mx-auto'>
                    {
                        projects.map(project => <ProjectItem
                            key={project.id}
                            project={project}
                        />)
                    }
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default Projects;