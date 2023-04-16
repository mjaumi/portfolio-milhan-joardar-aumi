import { animated, useSpring } from '@react-spring/web';
import React from 'react';
import useIsMobileDevice from '../../hooks/useIsMobileDevice';

const Header = ({ hasSplashAnimFinished }) => {
    // integration of custom hooks here
    const isMobile = useIsMobileDevice();

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

    // rendering header component here
    return (
        <animated.header style={headerProps} className='fixed -top-[500px] z-[9999] bg-secondary text-accent px-4 shadow-2xl w-full xl:w-4/5 mx-auto rounded-lg left-1/2 -translate-x-1/2'>
            <div className='navbar'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost xl:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                        </label>
                        <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 bg-secondary rounded-box w-52 shadow-xl'>
                            <li className='hover:opacity-40 duration-300'><a href='#about'>About</a></li>
                            <li className='hover:opacity-40 duration-300'><a href='#Services'>Services</a></li>
                            <li className='hover:opacity-40 duration-300'><a href='#Expertise'>Expertise</a></li>
                            <li className='hover:opacity-40 duration-300'><a href='#Projects'>Projects</a></li>
                            <li className='hover:opacity-40 duration-300'><a href='#Blogs'>Blogs</a></li>
                            <li className='hover:opacity-40 duration-300'><a href='#Contact'>Contact</a></li>
                        </ul>
                    </div>
                    <li className='btn btn-ghost normal-case text-xl'>
                        <a href='#home'>
                            <p className='text-base text-neutral font-extralight'>Find<span className='text-2xl font-bold text-accent'>Aumi</span></p>
                        </a>
                    </li>
                </div>
                <div className='navbar-end hidden xl:flex'>
                    <ul className='menu menu-horizontal p-0'>
                        <li className='hover:opacity-40 duration-300'>
                            <a href='#home'>
                                About
                            </a>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <a href='#home'>
                                Experiences
                            </a>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <a href='#home'>
                                Services
                            </a>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <a href='#home'>
                                Expertise
                            </a>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <a href='#home'>
                                Projects
                            </a>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <a href='#home'>
                                Blogs
                            </a>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <a href='#home'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </animated.header>
    );
};

export default Header;