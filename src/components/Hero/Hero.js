import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faDownload } from '@fortawesome/free-solid-svg-icons';
import { saveAs } from 'file-saver';
import { Element } from 'react-scroll';

const Hero = () => {


    const handleDownloadResume = () => {
        saveAs('https://drive.google.com/file/d/1P_qB7d6S5uvNK0Alas7Uz8O43bG6jKVz/view?usp=sharing', 'Resume of Milhan Joardar Aumi.pdf');
    }

    // rendering hero component here
    return (
        <Element name='home'>
            <section className='h-screen'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='flex flex-col items-center justify-center font-extralight'>
                        <div>
                            <h3 className='text-neutral text-xl md:text-5xl'>Hi There,</h3>
                            <h1 className='text-neutral text-2xl md:text-6xl'>I am <span className='text-accent font-normal'>Milhan Joardar Aumi</span></h1>
                        </div>
                        <div className={`text-primary flex justify-center w-[210px] md:w-[420px] text-center text-sm md:text-3xl mt-5`}>
                            <p className='mr-2 text-neutral'>I'm a</p>
                            <span className='relative text-left h-[20px] md:h-[36px] overflow-hidden flex-1'>
                                <span className='absolute animate-scroll-sm md:animate-scroll text-accent w-fit'>
                                    <p>Front-end Developer.</p>
                                    <p>Web Developer.</p>
                                    <p>React Developer.</p>
                                    <p>Full Stack Developer.</p>
                                    <p>MERN Stack Developer.</p>
                                </span>
                            </span>
                        </div>
                        <div className={`mt-20`}>
                            <a href='#Contact' className='btn btn-neutral text-secondary gap-2 capitalize w-60'>
                                Hire Me
                                <FontAwesomeIcon icon={faClipboardList} />
                            </a>
                            <button onClick={() => handleDownloadResume()} className='btn gap-2 text-secondary btn-accent capitalize mt-8 md:mt-0 md:ml-8 w-60'>
                                Download My Resume
                                <FontAwesomeIcon icon={faDownload} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Hero;