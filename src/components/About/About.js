import React from 'react';
import me from '../../images/me.jpg';

const About = () => {

    // rendering about component here
    return (
        <section>
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <div className='flex items-center'>
                    <div className='w-1/3 h-px bg-accent'></div>
                    <div className='relative w-3/4 md:w-1/4 mx-5'>
                        <h3 className='font-light text-2xl md:text-4xl text-neutral uppercase'>About Me</h3>
                        <h2 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-5xl md:text-6xl uppercase z-0 text-accent/20'>About</h2>
                    </div>
                    <div className='w-full h-px bg-accent'></div>
                </div>
                <div className='py-20 flex flex-col md:flex-row items-center w-[95%] md:w-4/5 mx-auto'>
                    <div className='overflow-hidden rounded-3xl shadow-xl md:w-1/2'>
                        <img className='w-full' src={me} alt="me" />
                    </div>
                    <div className='mt-10 md:mt-0 md:ml-20 md:text-left md:w-1/2'>
                        <p className='text-neutral'>Greetings, I'm <span className='text-accent font-semibold'>Milhan Joardar Aumi</span>, a proactive and enthusiastic <span className='text-accent font-semibold'>Front-end Developer</span>. I am currently pursuing my undergraduate degree on <span className='text-accent font-semibold'>Computer Science & Engineering</span> from <span className='text-accent font-semibold'> Ahsanullah University of Science & Technology</span>. I have accomplished an online course named <span className='text-accent font-semibold'>Complete Web Development Course With Jhankar Mahbub</span> from <span className='text-accent font-semibold'>Programming Hero</span> on May 31, 2022. Throughout the course I have learned many things as HTML5, CSS3, JavaScript, ECMAScript, REST API, Chrome Dev Tools, React.js, React Router, MongoDB, Node.js, Express.js, React Query etc. I have completed 12 assignments through out the course as well. My goal is to become a Professional Front-end Developer in a renowned company and enhance my knowledge with learning new things.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;