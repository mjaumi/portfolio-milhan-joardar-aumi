import React from 'react';
import projectThumbnail from '../../images/project-dummy.png';
import ProjectItemTag from './ProjectItemTag';
import { CgMediaLive } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import PortfolioAnchorButton from '../Buttons/PortfolioAnchorButton';

const ProjectItem = () => {

    // rendering the project item card component here
    return (
        <div className='border-2 border-accent rounded-lg p-3'>
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
            <div className='mt-8'>
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
    );
};

export default ProjectItem;