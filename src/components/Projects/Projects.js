import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import Layout from '../../Layout/Layout';

const Projects = () => {
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
        <Layout mainTitleText={'My Projects'} bgTitleText={'Projects'}>
            <animated.div ref={ref} style={animProps} className='py-20 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 w-[95%] xl:w-4/5 mx-auto'>
                {
                    projects.map(project => <ProjectItem
                        key={project.id}
                        project={project}
                    />)
                }
            </animated.div>
        </Layout>
    );
};

export default Projects;