import React, { useEffect, useState } from 'react';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import { FaFacebookSquare } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';

const Experiences = () => {
    // integration of react hooks here
    const [experiences, setExperiences] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState(0);

    // fetching the experiences from a json file here
    useEffect(() => {
        fetch('experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data));
    }, []);

    console.log(selectedExperience);

    // rendering experiences component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden mt-20'>
            <SectionTitle
                mainTitleText={'My Experiences'}
                bgTitleText={'Experiences'}
            />
            <div className='py-20 w-[95%] md:w-4/5 mx-auto flex flex-col md:flex-row'>
                <div className='relative w-full flex md:block md:w-fit border-b-2 md:border-b-0 md:border-r-2 border-base-100'>
                    {
                        experiences.map((experience, index) => <button
                            key={experience.id}
                            onClick={() => setSelectedExperience(index)}
                            className={`h-12 w-full md:text-left ${selectedExperience === index && 'text-neutral'}`}>
                            {experience.companyName}
                        </button>)
                    }
                    <div style={{ top: selectedExperience * 48 }} className='h-12 w-[2px] bg-accent absolute left-full duration-300 invisible md:visible' />
                    <div style={{ left: `calc(${selectedExperience} * 50%)` }} className='h-[2px] w-1/2 bg-accent absolute top-full duration-300 visible md:invisible' />
                </div>
                <div className='text-left w-full p-5 min-h-[350px]'>
                    <div>
                        <div className='flex text-2xl items-center'>
                            <h3 className='text-neutral'>
                                {experiences[selectedExperience]?.designation} @
                            </h3>
                            <a className='relative text-accent after:h-[2px] after:w-full after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:bg-accent hover:after:scale-x-100 after:duration-300 after:origin-left' href={experiences[selectedExperience]?.websiteUrl ? experiences[selectedExperience].websiteUrl : experiences[selectedExperience].linkedInPageUrl} target='_blank' rel='noreferrer'>
                                {experiences[selectedExperience]?.companyName}
                            </a>
                        </div>
                        <p className='text-sm mt-2 font-light'>
                            {experiences[selectedExperience]?.duration}
                            <br />
                            {experiences[selectedExperience]?.jobType}
                        </p>
                        <p className='mt-4'>{experiences[selectedExperience]?.jobDescription}</p>
                    </div>
                    <div className='mt-5 flex'>
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
            </div>
        </section>
    );
};

export default Experiences;