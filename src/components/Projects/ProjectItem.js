import React from 'react';
import projectThumbnail from '../../images/project-dummy.png';
import ProjectItemTag from './ProjectItemTag';
import { CgMediaLive } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { BiDownArrowAlt } from 'react-icons/bi';
import PortfolioAnchorButton from '../Buttons/PortfolioAnchorButton';

const ProjectItem = () => {

    // rendering the project item card component here
    return (
        <div className='group relative border-2 border-accent rounded-lg p-3 pb-10 cursor-pointer overflow-hidden'>
            <div className='rounded-lg overflow-hidden shadow-2xl'>
                <img src={projectThumbnail} alt='thumbnail' />
            </div>
            <div className='mt-4'>
                <h3 className='text-xl text-accent'>Byteware</h3>
                <p className='mt-2 text-sm text-white'>A warehouse management system made with MongoDB, React, Express.js and Node.js</p>
            </div>
            <div className='mt-4'>
                <ProjectItemTag />
                <ProjectItemTag />
                <ProjectItemTag />
            </div>
            <div className='absolute top-0 left-0 p-3 w-full h-full bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-500'>
                <h2 className='absolute text-accent text-2xl font-light left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <BiDownArrowAlt className='inline w-10 h-10' />
                    View Project
                </h2>
                <div className='absolute w-[calc(100%_-_24px)] mt-8 -bottom-[100%] group-hover:bottom-3 duration-500'>
                    <div className='mb-2'>
                        <PortfolioAnchorButton
                            refUrl={'#h'}
                            additionalClassNames={'w-full btn-sm text-secondary btn-accent border-accent hover:text-accent'}
                        >
                            <CgMediaLive className='mr-2' />
                            Live Preview
                        </PortfolioAnchorButton>
                    </div>
                    <div className='flex justify-between'>
                        <PortfolioAnchorButton
                            refUrl={'#h'}
                            additionalClassNames={'w-[calc(50%_-_4px)] btn-sm text-secondary btn-accent border-accent hover:text-accent'}
                        >
                            <BsGithub className='mr-2' />
                            Github (Client)
                        </PortfolioAnchorButton>
                        <PortfolioAnchorButton
                            refUrl={'#h'}
                            additionalClassNames={'w-[calc(50%_-_4px)] btn-sm text-secondary btn-accent border-accent hover:text-accent'}
                        >
                            <BsGithub className='mr-2' />
                            Github (Server)
                        </PortfolioAnchorButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;