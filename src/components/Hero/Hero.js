import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faDownload } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const Hero = () => {

    // rendering hero component here
    return (
        <section className='h-screen relative'>
            <div className='w-full md:w-fit left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10'>
                <div className='flex flex-col items-center justify-center font-extralight'>
                    <div className='animate-bottom-top-fade-in'>
                        <h3 className='text-base-100 text-xl md:text-5xl'>Hi There,</h3>
                        <h1 className='text-base-100 text-2xl md:text-6xl'>I am <span className='text-accent font-normal'>Milhan Joardar Aumi</span></h1>
                    </div>
                    <div className='text-base-100 flex text-sm md:text-3xl mt-5 opacity-0 animate-fade-in'>
                        <p className='mr-2'>I'm a</p>
                        <Typewriter
                            options={{
                                strings: ['Front-end Developer.', 'Web Developer.', 'React Developer.', 'Full Stack Developer.'],
                                autoStart: true,
                                loop: true,
                                delay: 50,
                                deleteSpeed: 50,
                                wrapperClassName: 'text-accent Typewriter__wrapper',
                                cursorClassName: 'text-accent Typewriter__cursor'
                            }}
                        />
                    </div>
                    <div className='mt-20 opacity-0 animate-fade-in'>
                        <button className='btn btn-accent text-secondary gap-2 capitalize w-60'>
                            Hire Me
                            <FontAwesomeIcon icon={faClipboardList} />
                        </button>
                        <button className='btn gap-2 text-secondary capitalize mt-8 md:mt-0 md:ml-8 w-60'>
                            Download My Resume
                            <FontAwesomeIcon icon={faDownload} />
                        </button>
                    </div>
                </div>
            </div>
            <ParticleBackground />
        </section>
    );
};

export default Hero;