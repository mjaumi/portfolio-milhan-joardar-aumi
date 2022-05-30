import React from 'react';
import me from '../../images/me.jpg';

const About = ({ currentSection }) => {

    // rendering about component here
    return (
        <section className='relative border-t-4 border-accent/50 section fp-auto-height md:h-screen'>
            <div className='sticky z-30 bg-primary w-full h-full overflow-hidden'>
                <h1 className={`hidden md:block absolute text-accent opacity-20 text-4xl md:text-8xl font-black -rotate-90 left-0 -translate-x-1/3 md:translate-x-0 duration-500 ${currentSection === 'About' ? 'top-[42%] md:top-[45%] -translate-y-1/2' : 'top-[150%]'}`}>About Me</h1>
                <h2 className='mt-10 text-accent font-bold text-3xl block md:hidden'>About Me</h2>
                <div className={`w-[90%] md:w-[75%] mt-10 md:mt-0 md:pl-20 mx-auto h-full flex flex-col md:flex-row items-center justify-center ${currentSection === 'About' ? 'md:animate-bottom-top-fade-in' : 'md:opacity-0'}`}>
                    <div className='bg-secondary p-6 rounded-3xl shadow-xl h-[450px] md:w-[450px] flex items-center md:mt-52'>
                        <p className='text-base-100'>Greetings, I'm <span className='text-accent font-semibold'>Milhan Joardar Aumi</span>, a proactive and enthusiastic <span className='text-accent font-semibold'>Front-end Developer</span>. I am currently pursuing my undergraduate degree on <span className='text-accent font-semibold'>Computer Science & Engineering</span> from <span className='text-accent font-semibold'> Ahsanullah University of Science & Technology</span>. I have accomplished an online course named <span className='text-accent font-semibold'>Complete Web Development Course With Jhankar Mahbub</span> from <span className='text-accent font-semibold'>Programming Hero</span>. Throughout the course I have learned many things as well as completed 12 assignments. My goal is to become a Professional Front-end Developer in a renowned company and enhance my knowledge with learning new things</p>
                    </div>
                    <div className='overflow-hidden rounded-3xl shadow-xl mt-10 md:ml-10 h-fit md:h-[450px] w-full md:w-[450px] md:-mt-52 mb-20 md:mb-0'>
                        <img className='w-full' src={me} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;