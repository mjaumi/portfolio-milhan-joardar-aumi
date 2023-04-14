import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectItem from './ProjectItem';

const Projects = () => {

    // rendering projects component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden mt-20'>
            <SectionTitle
                mainTitleText={'My Projects'}
                bgTitleText={'Projects'}
            />
            <div className='py-20 grid grid-cols-3 gap-5 w-[95%] md:w-4/5 mx-auto'>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </section>
    );
};

export default Projects;