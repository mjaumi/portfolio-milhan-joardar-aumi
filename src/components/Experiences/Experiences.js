import React, { useEffect, useState } from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebookSquare } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import useIsMobileDevice from '../../hooks/useIsMobileDevice';

const Experiences = () => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // integration of react hooks here
    const [experiences, setExperiences] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState(0);

    // integration of custom hooks here
    const isMobile = useIsMobileDevice();

    // fetching the experiences from a json file here
    useEffect(() => {
        fetch('experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data.reverse()));
    }, []);

    // rendering experiences component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden mt-20'>
            <SectionTitle
                mainTitleText={'My Experiences'}
                bgTitleText={'Experiences'}
            />
            <animated.div ref={ref} style={animProps} className='py-20 w-[95%] md:w-4/5 mx-auto flex flex-col md:flex-row'>
                <div className='w-full md:w-1/5 overflow-x-auto md:overflow-x-hidden overflow-y-hidden'>
                    <div style={{ width: `${(isMobile && experiences.length > 2) ? '700px' : '100%'}` }} className='relative h-full flex md:block border-b-2 md:border-b-0 md:border-r-2 border-base-100'>
                        {
                            experiences.map((experience, index) => <button
                                key={experience.id}
                                onClick={() => setSelectedExperience(index)}
                                className={`h-12 w-full md:text-left text-sm md:text-base ${selectedExperience === index && 'text-neutral'}`}>
                                {experience.companyName}
                            </button>)
                        }
                        <div style={{ top: selectedExperience * 48 }} className='h-12 w-[2px] bg-accent absolute left-full duration-300 invisible md:visible' />
                        <div style={{
                            left: `calc(${selectedExperience} * ${100 / experiences.length}%)`,
                            width: `${100 / experiences.length}%`
                        }} className='h-[2px] bg-accent absolute top-full duration-300 visible md:invisible' />
                    </div>
                </div>
                <div className='text-left w-full p-5 min-h-[350px]'>
                    <div>
                        <div className='flex flex-col md:flex-row text-xl md:text-2xl items-center'>
                            <h3 className='text-neutral'>
                                {experiences[selectedExperience]?.designation}
                            </h3>
                            <h3 className='ml-2'>
                                @
                                <a className='relative text-accent after:h-[2px] after:w-full after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:bg-accent hover:after:scale-x-100 after:duration-300 after:origin-left' href={experiences[selectedExperience]?.websiteUrl ? experiences[selectedExperience].websiteUrl : experiences[selectedExperience]?.linkedInPageUrl} target='_blank' rel='noreferrer'>
                                    {experiences[selectedExperience]?.companyName}
                                </a>
                            </h3>
                        </div>
                        <p className='text-sm mt-2 font-light text-center md:text-left'>
                            {experiences[selectedExperience]?.duration}
                            <br />
                            {experiences[selectedExperience]?.jobType}
                        </p>
                        <p className='mt-4 text-center md:text-left text-sm md:text-base'>{experiences[selectedExperience]?.jobDescription}</p>
                    </div>
                    <div className='mt-5 flex justify-center md:justify-start'>
                        {
                            experiences[selectedExperience]?.linkedInPageUrl &&
                            <a href={experiences[selectedExperience].linkedInPageUrl} className='hover:text-neutral duration-300' target='_blank' rel='noreferrer'>
                                <BsLinkedin className='h-8 w-8' />
                            </a>
                        }
                        {
                            experiences[selectedExperience]?.websiteUrl &&
                            <a href={experiences[selectedExperience].websiteUrl} className='hover:text-neutral duration-300' target='_blank' rel='noreferrer'>
                                <TbWorldWww className='h-8 w-8' />
                            </a>
                        }
                        {
                            experiences[selectedExperience]?.facebookPageUrl &&
                            <a href={experiences[selectedExperience].facebookPageUrl} className='hover:text-neutral duration-300 ml-3' target='_blank' rel='noreferrer'>
                                <FaFacebookSquare className='h-8 w-8' />
                            </a>
                        }
                        {
                            experiences[selectedExperience]?.instagramPageUrl &&
                            <a href={experiences[selectedExperience].instagramPageUrl} className='hover:text-neutral duration-300 ml-3' target='_blank' rel='noreferrer'>
                                <BsInstagram className='h-8 w-8' />
                            </a>
                        }
                    </div>
                </div>
            </animated.div>
        </section>
    );
};

export default Experiences;