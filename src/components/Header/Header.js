import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {

    // rendering header component here
    return (
        <header className='sticky top-0 z-[99999] bg-secondary text-accent py-3 shadow-xl'>
            <div className='navbar w-full md:w-4/5 mx-auto'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost lg:hidden'>
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
                        <Link activeClass='active' to='home' spy={true} smooth={true} offset={50} duration={500}>
                            <p className='text-base text-neutral font-extralight'>Find<span className='text-2xl font-bold text-accent'>Aumi</span></p>
                        </Link>
                    </li>
                </div>
                <div className='navbar-end hidden lg:flex'>
                    <ul className='menu menu-horizontal p-0'>
                        <li className='hover:opacity-40 duration-300'>
                            <Link activeClass='active' to='about' spy={true} smooth={true} offset={50} duration={500}>
                                About
                            </Link>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <Link activeClass='active' to='services' spy={true} smooth={true} offset={50} duration={500}>
                                Services
                            </Link>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <Link activeClass='active' to='expertise' spy={true} smooth={true} offset={50} duration={500}>
                                Expertise
                            </Link>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <Link activeClass='active' to='projects' spy={true} smooth={true} offset={50} duration={500}>
                                Projects
                            </Link>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <Link activeClass='active' to='blogs' spy={true} smooth={true} offset={50} duration={500}>
                                Blogs
                            </Link>
                        </li>
                        <li className='hover:opacity-40 duration-300'>
                            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;