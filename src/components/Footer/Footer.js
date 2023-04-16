import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

const Footer = ({ hasSplashAnimFinished }) => {

    // rendering footer component here
    return (
        <footer className='w-[95%] md:w-4/5 mx-auto overflow-hidden mt-20 py-10 border-t border-accent'>
            <div>
                <SocialLinks hasSplashAnimFinished={hasSplashAnimFinished} />
            </div>
            <div className='text-accent'>
                <p className='text-sm'>ⒸAll Rights Reserved. Milhan Joardar Aumi.2022.</p>
            </div>
        </footer>
    );
};

export default Footer;