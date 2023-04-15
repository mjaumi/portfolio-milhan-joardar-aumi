import React from 'react';
import ProjectItemTag from './ProjectItemTag';
import { CgMediaLive } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { BiDownArrowAlt } from 'react-icons/bi';
import PortfolioAnchorButton from '../Buttons/PortfolioAnchorButton';

const ProjectItem = ({ project }) => {
    // destructuring the project object here
    const { title, thumbnail, description, tags, livePreviewUrl, githubClientUrl, githubServerUrl } = project || {};

    // rendering the project item card component here
    return (
        <div className='group relative border-2 border-accent rounded-lg p-3 cursor-pointer overflow-hidden'>
            <div className='rounded-lg overflow-hidden shadow-2xl'>
                <img src={thumbnail} alt='thumbnail' />
            </div>
            <div className='mt-4 grid grid-rows-project-card-grid'>
                <h3 className='text-xl text-accent'>{title}</h3>
                <p className='my-3 text-sm text-white'>{description}</p>
                <div className='mt-4 grid grid-cols-2 md:grid-cols-3 gap-2'>
                    {
                        tags.map(tag => <ProjectItemTag
                            key={tag}
                            tag={tag}
                        />)
                    }
                </div>
            </div>
            <div className='absolute top-0 left-0 p-3 w-full h-full bg-primary/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 duration-500'>
                <h2 className='absolute text-accent text-2xl font-light left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <BiDownArrowAlt className='inline w-10 h-10' />
                    View Project
                </h2>
                <div className='absolute w-[calc(100%_-_24px)] mt-8 -bottom-[100%] group-hover:bottom-3 duration-500'>
                    <div className='mb-2'>
                        <PortfolioAnchorButton
                            refUrl={livePreviewUrl}
                            additionalClassNames={'w-full btn-sm text-secondary btn-accent border-accent hover:text-accent'}
                        >
                            <CgMediaLive className='mr-2' />
                            Live Preview
                        </PortfolioAnchorButton>
                    </div>
                    <div className='flex justify-between'>
                        {
                            githubClientUrl &&
                            <PortfolioAnchorButton
                                refUrl={githubClientUrl}
                                additionalClassNames={`${githubServerUrl ? 'w-[calc(50%_-_4px)]' : 'w-full'} btn-sm text-secondary btn-accent border-accent hover:text-accent`}
                            >
                                <BsGithub className='mr-2' />
                                Github (Client)
                            </PortfolioAnchorButton>
                        }
                        {
                            githubServerUrl &&
                            <PortfolioAnchorButton
                                refUrl={githubServerUrl}
                                additionalClassNames={'w-[calc(50%_-_4px)] btn-sm text-secondary btn-accent border-accent hover:text-accent'}
                            >
                                <BsGithub className='mr-2' />
                                Github (Server)
                            </PortfolioAnchorButton>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;