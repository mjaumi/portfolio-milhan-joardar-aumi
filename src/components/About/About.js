import React from 'react';

const About = () => {

    // rendering about component here
    return (
        <section className='relative h-screen border-t-4 border-accent/50'>
            <div className='absolute z-30 bg-primary w-full h-full'>
                <h1 className='mt-40 text-white'>About</h1>
            </div>
        </section>
    );
};

export default About;