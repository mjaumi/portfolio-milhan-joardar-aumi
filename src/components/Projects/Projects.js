import { animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { InView } from 'react-intersection-observer';
import SectionLayout from '../../Layout/SectionLayout';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import ProjectItem from './ProjectItem';

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
                <animated.div ref={ref} style={animProps} className='w-[95%] xl:w-4/5 mx-auto py-20'>
                    <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5'>
                        {
                            projects.map((project) => <ProjectItem
                                key={project.id}
                                project={project}
                            />)
                        }
                    </div>
                    <div className='flex justify-center mt-16'>
                        <a href='https://github.com/mjaumi?tab=repositories' className='group flex items-center text-accent text-lg lg:w-52' target='_blank' rel='noreferrer'>
                            View All Projects
                            <BsArrowRight className='ml-2 h-5 w-5 group-hover:ml-8 duration-300' />
                        </a>
                    </div>
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default Projects;