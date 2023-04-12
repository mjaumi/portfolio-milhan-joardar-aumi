import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';

const SocialLinks = () => {

    // rendering social links component here
    return (
        <div className=' md:fixed bottom-5 right-5'>
            <div className='flex md:flex-col justify-center items-center mb-5 md:mb-0'>
                <div className='hover:cursor-pointer hover:text-white duration-300'>
                    <a href='https://github.com/mjaumi' target='_blank' rel='noreferrer'>
                        <BsGithub className='h-8 w-8' />
                    </a>
                </div>
                <div className='hover:cursor-pointer hover:text-white duration-300 ml-4 md:ml-0 md:mt-4'>
                    <a href='https://www.linkedin.com/in/mj-aumi/' target='_blank' rel='noreferrer'>
                        <SiLinkedin className='h-7 w-7' />
                    </a>
                </div>
                <div className='hover:cursor-pointer hover:text-white duration-300 ml-4 md:ml-0 md:mt-4'>
                    <a href='https://www.facebook.com/mj.aumi/' target='_blank' rel='noreferrer'>
                        <ImFacebook2 className='h-7 w-7' />
                    </a>
                </div>
                <div className='hover:cursor-pointer hover:text-white duration-300 ml-4 md:ml-0 md:mt-4'>
                    <a href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=mjaumi2864@gmail.com' target='_blank' rel='noreferrer'>
                        <MdEmail className='h-9 w-9 md:h-8 md:w-8' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;