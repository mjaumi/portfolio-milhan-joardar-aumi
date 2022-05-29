import React from 'react';

const Header = () => {

    // rendering header component here
    return (
        <header className='sticky top-0 z-[99999] bg-secondary text-base-100 py-3'>
            <div className='navbar w-full md:w-4/5 mx-auto'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label tabIndex='0' className='btn btn-ghost lg:hidden'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h8m-8 6h16' /></svg>
                        </label>
                        <ul tabIndex='0' className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52'>
                            <li className='hover:opacity-40 duration-300'><a>About</a></li>
                            <li className='hover:opacity-40 duration-300'><a>Services</a></li>
                            <li className='hover:opacity-40 duration-300'><a>Expertise</a></li>
                            <li className='hover:opacity-40 duration-300'><a>Projects</a></li>
                            <li className='hover:opacity-40 duration-300'><a>Blogs</a></li>
                            <li className='hover:opacity-40 duration-300'><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className='btn btn-ghost normal-case text-xl'>
                        <p className='text-base font-thin'>Find<span className='text-2xl font-medium text-accent'>Aumi</span></p>
                    </a>
                </div>
                <div className='navbar-end hidden lg:flex'>
                    <ul className='menu menu-horizontal p-0'>
                        <li className='hover:opacity-40 duration-300'><a>About</a></li>
                        <li className='hover:opacity-40 duration-300'><a>Services</a></li>
                        <li className='hover:opacity-40 duration-300'><a>Expertise</a></li>
                        <li className='hover:opacity-40 duration-300'><a>Projects</a></li>
                        <li className='hover:opacity-40 duration-300'><a>Blogs</a></li>
                        <li className='hover:opacity-40 duration-300'><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;