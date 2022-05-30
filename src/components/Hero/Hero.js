import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faDownload } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import { saveAs } from 'file-saver';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const Hero = ({ currentSection }) => {
    // integration of react hooks
    const [showAnimation, setShowAnimation] = useState(false);



    useEffect(() => {
        if (currentSection === 'Home') {
            setShowAnimation(true);
        } else {
            setShowAnimation(false);
        }
    }, [currentSection]);

    const handleDownloadResume = () => {
        saveAs('https://drive.google.com/file/d/1P_qB7d6S5uvNK0Alas7Uz8O43bG6jKVz/view?usp=sharing', 'Resume of Milhan Joardar Aumi.pdf');
    }

    // rendering hero component here
    return (
        <section className='relative section'>
            <div className='w-full md:w-fit left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10'>
                <div className='flex flex-col items-center justify-center font-extralight'>
                    <div className={`${showAnimation ? 'animate-bottom-top-fade-in' : 'opacity-0 mt-[200px]'}`}>
                        <h3 className='text-base-100 text-xl md:text-5xl'>Hi There,</h3>
                        <h1 className='text-base-100 text-2xl md:text-6xl'>I am <span className='text-accent font-normal'>Milhan Joardar Aumi</span></h1>
                    </div>
                    <div className={`text-base-100 flex text-sm md:text-3xl mt-5 opacity-0 ${showAnimation ? 'animate-fade-in' : 'opacity-0'}`}>
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
                    <div className={`mt-20 opacity-0 ${showAnimation ? 'animate-fade-in' : 'opacity-0'}`}>
                        <a href='#Contact' className='btn btn-accent text-secondary gap-2 capitalize w-60'>
                            Hire Me
                            <FontAwesomeIcon icon={faClipboardList} />
                        </a>
                        <button onClick={() => handleDownloadResume()} className='btn gap-2 text-secondary capitalize mt-8 md:mt-0 md:ml-8 w-60'>
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