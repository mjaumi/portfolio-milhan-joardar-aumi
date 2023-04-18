import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { animated, useSpring } from '@react-spring/web';

const SocialLinks = ({ hasSplashAnimFinished }) => {
    // integration of react-spring hooks here
    const socialLinksProps = useSpring({
        from: { right: '-200px' },
        to: { right: '20px' },
        config: {
            tension: 150,
            friction: 30,
        },
        pause: !hasSplashAnimFinished,
    });

    // rendering social links component here
    return (
        <animated.div style={socialLinksProps} className=' xl:fixed bottom-5'>
            <div className='flex xl:flex-col justify-center items-center mb-5 xl:mb-0'>
                <div className='hover:cursor-pointer hover:text-white duration-300'>
                    <a href='https://github.com/mjaumi' className='!cursor-pointer' target='_blank' rel='noreferrer'>
                        <BsGithub className='h-8 w-8' />
                    </a>
                </div>
                <div className='hover:cursor-pointer hover:text-white duration-300 ml-4 xl:ml-0 xl:mt-4'>
                    <a href='https://www.linkedin.com/in/mj-aumi/' className='!cursor-pointer' target='_blank' rel='noreferrer'>
                        <SiLinkedin className='h-7 w-7' />
                    </a>
                </div>
                <div className='hover:cursor-pointer hover:text-white duration-300 ml-4 xl:ml-0 xl:mt-4'>
                    <a href='https://www.facebook.com/mj.aumi/' className='!cursor-pointer' target='_blank' rel='noreferrer'>
                        <ImFacebook2 className='h-7 w-7' />
                    </a>
                </div>
                <div className='hover:cursor-pointer hover:text-white duration-300 ml-4 xl:ml-0 xl:mt-4'>
                    <a href='https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=mjaumi2864@gmail.com' className='!cursor-pointer' target='_blank' rel='noreferrer'>
                        <MdEmail className='h-9 w-9 xl:h-8 xl:w-8' />
                    </a>
                </div>
            </div>
        </animated.div>
    );
};

export default SocialLinks;