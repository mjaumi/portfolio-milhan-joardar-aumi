import React from 'react';

const Blogs = ({ currentSection }) => {

    // rendering blogs component here
    return (
        <section className='relative border-t-4 border-accent/50 section fp-responsive md:h-screen'>
            <div className='sticky z-30 bg-primary w-full h-full overflow-hidden'>
                <h1 className={`hidden md:block absolute text-accent opacity-20 text-4xl md:text-8xl font-black -rotate-90 left-0 -translate-x-1/3 md:translate-x-0 duration-500 ${currentSection === 'Blogs' ? 'top-[42%] md:top-[45%] -translate-y-1/2' : 'top-[150%]'}`}>My Blogs</h1>
                <h2 className='mt-10 text-accent font-bold text-3xl block md:hidden'>My Blogs</h2>
                <div className={`w-[90%] md:w-[75%] mt-10 mb-20 md:mb-0 md:mt-0 mx-auto h-full flex flex-col md:flex-row items-center justify-center ${currentSection === 'Blogs' ? 'md:animate-bottom-top-fade-in' : 'md:opacity-0'}`}>
                    <h3 className='text-4xl md:text-5xl font-bold text-accent opacity-20'>Coming Soon. Stay Tuned...</h3>
                </div>
            </div>
        </section>
    );
};

export default Blogs;