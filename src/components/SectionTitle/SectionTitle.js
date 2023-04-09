import React from 'react';

const SectionTitle = ({ mainTitleText, bgTitleText }) => {

    // rendering section title component here
    return (
        <div className='flex items-center'>
            <div className='w-1/3 h-px bg-accent'></div>
            <div className='relative w-3/4 md:w-1/4 mx-5'>
                <h3 className='font-light text-2xl md:text-4xl text-neutral uppercase'>{mainTitleText}</h3>
                <h2 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-5xl md:text-6xl uppercase z-0 text-accent/20'>{bgTitleText}</h2>
            </div>
            <div className='w-full h-px bg-accent'></div>
        </div>
    );
};

export default SectionTitle;