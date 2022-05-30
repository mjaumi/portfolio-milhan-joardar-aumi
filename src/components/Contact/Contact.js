import React from 'react';

const Contact = ({ currentSection }) => {

    // rendering contact component here
    return (
        <section className='relative border-t-4 border-accent/50 section'>
            <div className='sticky z-30 bg-primary w-full h-full overflow-hidden'>
                <h1 className={`absolute text-accent opacity-20 text-4xl md:text-8xl font-black -rotate-90 left-0 -translate-x-1/3 md:translate-x-0 duration-500 ${currentSection === 'Contact' ? 'top-[42%] md:top-[45%] -translate-y-1/2' : 'top-[150%]'}`}>Contact</h1>
            </div>
        </section>
    );
};

export default Contact;