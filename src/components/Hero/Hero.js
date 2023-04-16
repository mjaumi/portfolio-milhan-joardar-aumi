import React from 'react';
import { BsClipboardCheckFill } from 'react-icons/bs';
import { ImDownload } from 'react-icons/im';
import { saveAs } from 'file-saver';
import { animated, useSpring } from '@react-spring/web';
import PortfolioButton from '../Buttons/PortfolioButton';

const Hero = ({ hasSplashAnimFinished }) => {
    // integration of react-spring hooks here
    const heroAnimProps = useSpring({
        from: { translateY: '120vh' },
        to: { translateY: '0' },
        config: {
            tension: 150,
            friction: 30,
        },
        pause: !hasSplashAnimFinished,
    });

    const handleDownloadResume = () => {
        saveAs('https://drive.google.com/file/d/1P_qB7d6S5uvNK0Alas7Uz8O43bG6jKVz/view?usp=sharing', 'Resume of Milhan Joardar Aumi.pdf');
    }

    // rendering hero component here
    return (
        <section className='h-screen mb-20 overflow-hidden'>
            <div className='w-full h-full flex justify-center items-center'>
                <animated.div style={heroAnimProps} className='flex flex-col items-center justify-center font-extralight'>
                    <div>
                        <h3 className='text-neutral text-xl md:text-3xl xl:text-5xl'>Hi There,</h3>
                        <h1 className='text-neutral text-2xl md:text-4xl xl:text-6xl'>I am <span className='text-accent font-normal'>Milhan Joardar Aumi</span></h1>
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
                    <div className='mt-20'>
                        <a href='#Contact' className='relative btn btn-neutral text-primary capitalize w-60 border-2 border-neutral overflow-hidden after:w-full after:scale-x-0 after:h-full after:bg-primary after:absolute after:origin-left after:top-0 hover:after:scale-x-100 hover:text-neutral after:duration-300'>
                            <div className='absolute flex z-10'>
                                <BsClipboardCheckFill className='mr-2' />
                                Hire Me
                            </div>
                        </a>
                        <PortfolioButton
                            onClickHandler={handleDownloadResume}
                        >
                            <ImDownload className='mr-2' />
                            Download My Resume
                        </PortfolioButton>
                    </div>
                </animated.div>
            </div>
        </section>
    );
};

export default Hero;