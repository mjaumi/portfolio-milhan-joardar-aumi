import React from 'react';

const Expertise = ({ currentSection }) => {

    // rendering expertise component here
    return (
        <section className='relative border-t-4 border-accent/50 section fp-responsive md:h-screen'>
            <div className='sticky z-30 bg-primary w-full h-full overflow-hidden'>
                <h1 className={`hidden md:block absolute text-accent opacity-20 text-4xl md:text-8xl font-black -rotate-90 left-0 -translate-x-1/3 md:translate-x-0 duration-500 ${currentSection === 'Expertise' ? 'top-[42%] md:top-[45%] -translate-y-1/2' : 'md:top-[150%]'}`}>Expertise</h1>
                <div className={`w-[90%] md:w-[65%] md:mt-0 mx-auto h-full flex flex-col justify-center items-center pb-10 md:pb-0 border-l-2 border-accent ${currentSection === 'Expertise' ? 'md:animate-bottom-top-fade-in' : 'md:opacity-0'}`}>
                    <h2 className='my-10 text-accent font-bold text-3xl block md:hidden'>Expertise</h2>
                    <div className='relative text-left w-full pl-6'>
                        <span className='absolute h-6 w-6 bg-accent -left-3 rotate-45 top-2'></span>
                        <h3 className='font-bold text-3xl text-accent border-b-2 w-fit'>Expert With:</h3>
                        <p className='mt-3 text-neutral text-xl'>HTML5, CSS3, Bootstrap, Tailwind,JavaScript, ECMAScript6, Mobile First Responsive Design, DaisyUI.</p>
                    </div>
                    <div className='relative text-left w-full pl-6 mt-10'>
                        <span className='absolute h-6 w-6 bg-accent -left-3 rotate-45 top-2'></span>
                        <h3 className='font-bold text-3xl text-accent border-b-2 w-fit'>Comfortable With:</h3>
                        <p className='mt-3 text-neutral text-xl'>React.JS, Express.JS, Node.JS, MongoDB, JWT, REST API, React Router.</p>
                    </div>
                    <div className='relative text-left w-full pl-6 mt-10'>
                        <span className='absolute h-6 w-6 bg-accent -left-3 rotate-45 top-2'></span>
                        <h3 className='font-bold text-3xl text-accent border-b-2 w-fit'>Familiar With:</h3>
                        <p className='mt-3 text-neutral text-xl'>JQuery, React Query, Stripe Payment API, TypeScript, Next.js.</p>
                    </div>
                    <div className='relative text-left w-full pl-6 mt-10'>
                        <span className='absolute h-6 w-6 bg-accent -left-3 rotate-45 top-2'></span>
                        <h3 className='font-bold text-3xl text-accent border-b-2 w-fit'>Tools:</h3>
                        <p className='mt-3 text-neutral text-xl'>Git, Github, Firebase, Netlify, Heroku, Dev Tools, React Dev Tools, Figma.</p>
                    </div>
                    <div className='relative text-left w-full pl-6 mt-10'>
                        <span className='absolute h-6 w-6 bg-accent -left-3 rotate-45 top-2'></span>
                        <h3 className='font-bold text-3xl text-accent border-b-2 w-fit'>Languages:</h3>
                        <p className='mt-3 text-neutral text-xl'>English, Bengali, Hindi.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;