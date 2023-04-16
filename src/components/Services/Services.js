import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { RiCompasses2Fill } from 'react-icons/ri';
import { BsFillDatabaseFill } from 'react-icons/bs';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import Layout from '../../Layout/Layout';

const Services = () => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // rendering services component here
    return (
        <Layout mainTitleText={'My Services'} bgTitleText={'Services'}>
            <animated.div ref={ref} style={animProps} className='py-20 grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10 items-center w-[95%] xl:w-4/5 mx-auto'>
                <div className='bg-secondary p-6 rounded-lg shadow-xl flex flex-col justify-center items-center hover:cursor-pointer hover:scale-110 duration-300'>
                    <FaLaptopCode className='h-20 w-20 xl:h-32 xl:w-32 text-accent mb-3' />
                    <h4 className='text-accent text-lg xl:text-xl font-semibold'>Web Development</h4>
                    <p className='text-neutral text-sm mt-5'>Designing web application with MERN stack and also applying responsiveness.</p>
                </div>
                <div className='bg-secondary p-6 rounded-lg shadow-xl flex flex-col justify-center items-center hover:cursor-pointer hover:scale-110 duration-300 h-full'>
                    <RiCompasses2Fill className='h-20 w-20 xl:h-32 xl:w-32 text-accent mb-3' />
                    <h4 className='text-accent text-lg xl:text-xl font-semibold'>UI/UX Design</h4>
                    <p className='text-neutral text-sm mt-5'>Designing UI/UX with user friendliness in mind and precision.</p>
                </div>
                <div className='bg-secondary p-6 rounded-lg shadow-xl flex flex-col justify-center items-center hover:cursor-pointer hover:scale-110 duration-300'>
                    <BsFillDatabaseFill className='h-20 w-20 xl:h-32 xl:w-32 text-accent mb-3' />
                    <h4 className='text-accent text-lg xl:text-xl font-semibold'>Back-end Integration</h4>
                    <p className='text-neutral text-sm mt-5'>As a full stack developer I can take care of both front-end & back-end.</p>
                </div>
            </animated.div>
        </Layout>
    );
};

export default Services;