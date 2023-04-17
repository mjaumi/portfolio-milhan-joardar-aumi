import { animated, useSpring } from '@react-spring/web';
import React, { useState } from 'react';
import useIsMobileDevice from '../../hooks/useIsMobileDevice';
import PortfolioNavbarButton from '../Buttons/PortfolioNavbarButton';
import PortfolioDrawerButton from '../Buttons/PortfolioDrawerButton';

const Header = ({ currentSection, hasSplashAnimFinished }) => {
    // integration of custom hooks here
    const isMobile = useIsMobileDevice();

    // integration of react hooks here
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    // integration of react-spring hooks here
    const headerProps = useSpring({
        from: { top: '-500px' },
        to: { top: isMobile ? '0px' : '20px' },
        config: {
            tension: 150,
            friction: 30,
        },
        pause: !hasSplashAnimFinished,
    });

    // setting the navbar underline styling here
    let underLineLeft = '120px';

    switch (currentSection) {
        case 'About':
            underLineLeft = '0px';
            break;

        case 'Experiences':
            underLineLeft = '120px';
            break;

        case 'Services':
            underLineLeft = '240px';
            break;

        case 'Expertise':
            underLineLeft = '360px';
            break;

        case 'Projects':
            underLineLeft = '480px';
            break;

        case 'Blogs':
            underLineLeft = '600px';
            break;

        case 'Contact':
            underLineLeft = '720px';
            break;

        default:
            underLineLeft = '-120px';
            break;
    }

    // rendering header component here
    return (
        <>
            <animated.header style={headerProps} className='fixed -top-[500px] z-[9999] bg-secondary text-accent px-4 shadow-2xl w-full xl:w-4/5 mx-auto rounded-lg left-1/2 -translate-x-1/2'>
                <div className='navbar justify-between'>
                    <div className='navbar-start !w-2/5'>
                        <div className='dropdown'>
                            <label onClick={() => setIsDrawerVisible(!isDrawerVisible)} htmlFor='portfolio-drawer' tabIndex='0' className='btn btn-ghost xl:hidden'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                            </label>
                        </div>
                        <PortfolioNavbarButton sectionId={'home'} >
                            <p className='text-base text-neutral font-extralight'>Find<span className='text-2xl font-bold text-accent'>Aumi</span></p>
                        </PortfolioNavbarButton>
                    </div>
                    <div className='relative hidden xl:flex w-fit overflow-hidden'>
                        <ul className='menu menu-horizontal p-0 text-sm'>
                            <PortfolioNavbarButton sectionId={'about'} >
                                <span className={`w-full ${currentSection === 'About' ? 'text-accent' : 'text-neutral'}`}>About</span>
                            </PortfolioNavbarButton>
                            <PortfolioNavbarButton sectionId={'experiences'} >
                                <span className={`w-full ${currentSection === 'Experiences' ? 'text-accent' : 'text-neutral'}`}>Experiences</span>
                            </PortfolioNavbarButton>
                            <PortfolioNavbarButton sectionId={'services'} >
                                <span className={`w-full ${currentSection === 'Services' ? 'text-accent' : 'text-neutral'}`}>Services</span>
                            </PortfolioNavbarButton>
                            <PortfolioNavbarButton sectionId={'expertise'} >
                                <span className={`w-full ${currentSection === 'Expertise' ? 'text-accent' : 'text-neutral'}`}>Expertise</span>
                            </PortfolioNavbarButton>
                            <PortfolioNavbarButton sectionId={'projects'} >
                                <span className={`w-full ${currentSection === 'Projects' ? 'text-accent' : 'text-neutral'}`}>Projects</span>
                            </PortfolioNavbarButton>
                            <PortfolioNavbarButton sectionId={'blogs'} >
                                <span className={`w-full ${currentSection === 'Blogs' ? 'text-accent' : 'text-neutral'}`}>Blogs</span>
                            </PortfolioNavbarButton>
                            <PortfolioNavbarButton sectionId={'contact'} >
                                <span className={`w-full ${currentSection === 'Contact' ? 'text-accent' : 'text-neutral'}`}>Contact</span>
                            </PortfolioNavbarButton>
                        </ul>
                        <div style={{ left: underLineLeft }} className='absolute bottom-0 h-[2px] w-[120px] bg-accent duration-300'></div>
                    </div>
                </div>
            </animated.header>
            <div className={`fixed drawer xl:hidden ${isDrawerVisible && 'z-[99999]'}`}>
                <input id='portfolio-drawer' type='checkbox' className='drawer-toggle' />
                <div className='drawer-side'>
                    <label onClick={() => setTimeout(() => setIsDrawerVisible(!isDrawerVisible), 1000)
                    } htmlFor='portfolio-drawer' className='drawer-overlay !bg-primary/60 backdrop-blur-sm'></label>
                    <ul className='flex flex-col justify-center w-3/5 bg-secondary text-base-content'>
                        <PortfolioDrawerButton
                            currentSection={currentSection}
                            isDrawerVisible={isDrawerVisible}
                            setIsDrawerVisible={setIsDrawerVisible}
                            sectionId={'about'}
                        >
                            About
                        </PortfolioDrawerButton>
                        <PortfolioDrawerButton
                            currentSection={currentSection}
                            isDrawerVisible={isDrawerVisible}
                            setIsDrawerVisible={setIsDrawerVisible}
                            sectionId={'experiences'}
                        >
                            Experiences
                        </PortfolioDrawerButton>
                        <PortfolioDrawerButton
                            currentSection={currentSection}
                            isDrawerVisible={isDrawerVisible}
                            setIsDrawerVisible={setIsDrawerVisible}
                            sectionId={'services'}
                        >
                            Services
                        </PortfolioDrawerButton>
                        <PortfolioDrawerButton
                            currentSection={currentSection}
                            isDrawerVisible={isDrawerVisible}
                            setIsDrawerVisible={setIsDrawerVisible}
                            sectionId={'expertise'}
                        >
                            Expertise
                        </PortfolioDrawerButton>
                        <PortfolioDrawerButton
                            currentSection={currentSection}
                            isDrawerVisible={isDrawerVisible}
                            setIsDrawerVisible={setIsDrawerVisible}
                            sectionId={'projects'}
                        >
                            Projects
                        </PortfolioDrawerButton>
                        <PortfolioDrawerButton
                            currentSection={currentSection}
                            isDrawerVisible={isDrawerVisible}
                            setIsDrawerVisible={setIsDrawerVisible}
                            sectionId={'blogs'}
                        >
                            Blogs
                        </PortfolioDrawerButton>
                        <PortfolioDrawerButton
                            currentSection={currentSection}
                            isDrawerVisible={isDrawerVisible}
                            setIsDrawerVisible={setIsDrawerVisible}
                            sectionId={'contact'}
                        >
                            Contact
                        </PortfolioDrawerButton>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Header;