import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDraftingCompass, faDatabase } from '@fortawesome/free-solid-svg-icons';

const Services = ({ currentSection }) => {

    // rendering services component here
    return (
        <section className='relative border-t-4 border-accent/50 section md:h-screen'>
            <div className='sticky z-30 bg-primary w-full h-full overflow-hidden'>
                <h1 className={`hidden md:block absolute text-accent opacity-20 text-4xl md:text-8xl font-black -rotate-90 left-0 -translate-x-1/3 md:translate-x-0 duration-500 ${currentSection === 'Services' ? 'top-[42%] md:top-[45%] -translate-y-1/2' : 'top-[150%]'}`}>Services</h1>
                <h2 className='mt-10 text-accent font-bold text-3xl block md:hidden'>Services</h2>
                <div className={`w-[90%] md:w-[75%] mt-10 md:mt-0 md:pl-20 mx-auto h-full flex flex-col md:flex-row justify-center items-center ${currentSection === 'Services' ? 'md:animate-bottom-top-fade-in' : 'md:opacity-0'}`}>
                    <div className='bg-secondary p-6 rounded-3xl shadow-xl h-[450px] md:w-[450px] flex flex-col justify-center items-center md:mt-52'>
                        <FontAwesomeIcon icon={faLaptopCode} className='h-40 w-40 text-accent' />
                        <h4 className='text-accent text-xl font-semibold'>Web Development</h4>
                        <p className='text-base-100 mt-5'>Designing web application with MERN stack and also applying responsiveness.</p>
                    </div>
                    <div className='bg-secondary p-6 rounded-3xl shadow-xl h-[450px] md:w-[450px] flex flex-col justify-center items-center mt-10 md:mt-30 md:ml-10'>
                        <FontAwesomeIcon icon={faDraftingCompass} className='h-40 w-40 text-accent mb-6' />
                        <h4 className='text-accent text-xl font-semibold'>UI/UX Design</h4>
                        <p className='text-base-100 mt-5'>Designing UI/UX with user friendliness in mind and precision.</p>
                    </div>
                    <div className='bg-secondary p-6 rounded-3xl shadow-xl h-[450px] md:w-[450px] flex flex-col justify-center items-center mt-10 md:-mt-52 md:ml-10 mb-20 md:mb-0'>
                        <FontAwesomeIcon icon={faDatabase} className='h-40 w-40 text-accent mb-6' />
                        <h4 className='text-accent text-xl font-semibold'>Back-end Integration</h4>
                        <p className='text-base-100 mt-5'>As a full stack developer I can take care of both front-end & back-end.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;