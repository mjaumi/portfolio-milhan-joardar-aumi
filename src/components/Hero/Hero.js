import React from 'react';
import { BsClipboardCheckFill } from 'react-icons/bs';
import { ImDownload } from 'react-icons/im';
import { animated, useSpring } from '@react-spring/web';
import PortfolioButton from '../Buttons/PortfolioButton';
import { InView } from 'react-intersection-observer';

const Hero = ({ hasSplashAnimFinished, setCurrentSection }) => {
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

    // handler function to handle resume download redirection
    const downloadResumeHandler = () => {
        window.open('https://drive.google.com/file/d/1Ak_QrWT_ybWDYQw7AN0GgaI4hlTY0iCc/view?usp=sharing', '_blank', 'noreferrer');
    }

    // handler function to handle scroll to contact section
    const scrollToContactHandler = () => {
        const section = document.getElementById('contact');

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    // rendering hero component here
    return (
        <section id='home' className='h-screen mb-20 overflow-hidden'>
            <div className='w-full h-full flex justify-center items-center'>
                <InView as='div' onChange={inView => inView && setCurrentSection('Home')}>
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
                            <PortfolioButton
                                onClickHandler={scrollToContactHandler}
                                additionalClassNames={'btn-neutral text-primary hover:text-neutral border-neutral'}
                            >
                                <BsClipboardCheckFill className='mr-2' />
                                Hire Me
                            </PortfolioButton>

                            <PortfolioButton
                                onClickHandler={downloadResumeHandler}
                                additionalClassNames={'text-primary btn-accent hover:text-accent border-accent'}
                            >
                                <ImDownload className='mr-2' />
                                Download My Resume
                            </PortfolioButton>
                        </div>
                    </animated.div>
                </InView>
            </div>
        </section>
    );
};

export default Hero;