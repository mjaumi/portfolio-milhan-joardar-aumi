import { animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import { InView } from 'react-intersection-observer';
import SectionLayout from '../../Layout/SectionLayout';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import useIsMobileDevice from '../../hooks/useIsMobileDevice';

const Experiences = ({ setCurrentSection }) => {
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
        <SectionLayout id={'experiences'} mainTitleText={'My Experiences'} bgTitleText={'Experiences'}>
            <InView as='div' threshold={1.0} onChange={inView => inView && setCurrentSection('Experiences')}>
                <animated.div ref={ref} style={animProps} className='py-20 w-[95%] xl:w-4/5 mx-auto flex flex-col xl:flex-row'>
                    <div className='w-full xl:w-1/4 2xl:w-1/5 overflow-x-auto xl:overflow-x-hidden overflow-y-hidden'>
                        <div style={{ width: `${(isMobile && experiences.length > 2) ? '700px' : '100%'}` }} className='relative h-full flex xl:block border-b-2 xl:border-b-0 xl:border-r-2 border-base-100 mx-auto'>
                            {
                                experiences.map((experience, index) => <button
                                    key={experience.id}
                                    onClick={() => setSelectedExperience(index)}
                                    className={`h-12 w-full xl:text-left text-sm xl:text-base ${selectedExperience === index && 'text-neutral'}`}>
                                    {experience.companyName}
                                </button>)
                            }
                            <div style={{ top: selectedExperience * 48 }} className='h-12 w-[2px] bg-accent absolute left-full duration-300 invisible xl:visible' />
                            <div style={{
                                left: `calc(${selectedExperience} * ${100 / experiences.length}%)`,
                                width: `${100 / experiences.length}%`
                            }} className='h-[2px] bg-accent absolute top-full duration-300 visible xl:invisible' />
                        </div>
                    </div>
                    <div className='text-left w-full p-5 mt-10 xl:mt-0 xl:min-h-[350px]'>
                        <div>
                            <div className='flex flex-col xl:flex-row text-xl xl:text-2xl items-center'>
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
                            <p className='text-sm mt-2 font-light text-center xl:text-left'>
                                {experiences[selectedExperience]?.duration}
                                <br />
                                {experiences[selectedExperience]?.jobType}
                            </p>
                            <p className='mt-4 text-center xl:text-left text-sm xl:text-base'>{experiences[selectedExperience]?.jobDescription}</p>
                        </div>
                        <div className='mt-5 flex justify-center xl:justify-start space-x-3'>
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
                                <a href={experiences[selectedExperience].facebookPageUrl} className='hover:text-neutral duration-300' target='_blank' rel='noreferrer'>
                                    <FaFacebookSquare className='h-8 w-8' />
                                </a>
                            }
                            {
                                experiences[selectedExperience]?.instagramPageUrl &&
                                <a href={experiences[selectedExperience].instagramPageUrl} className='hover:text-neutral duration-300' target='_blank' rel='noreferrer'>
                                    <BsInstagram className='h-8 w-8' />
                                </a>
                            }
                        </div>
                    </div>
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default Experiences;