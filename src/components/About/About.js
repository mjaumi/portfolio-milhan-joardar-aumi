import React from 'react';
import me from '../../images/me.jpg';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import SectionLayout from '../../Layout/SectionLayout';
import { InView } from 'react-intersection-observer';

const About = ({ setCurrentSection }) => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // rendering about component here
    return (
        <SectionLayout id={'about'} mainTitleText={'About me'} bgTitleText={'about'}>
            <InView as='div' threshold={1.0} onChange={inView => inView && setCurrentSection('About')}>
                <animated.div ref={ref} style={animProps} className='py-20 flex flex-col-reverse xl:flex-row items-center w-[95%] md:w-4/5 mx-auto'>
                    <div className='mt-10 xl:mt-0 xl:text-left xl:w-2/3'>
                        <p className='text-neutral text-sm md:text-base'>Greetings, I'm <span className='text-accent font-semibold'>Milhan Joardar Aumi</span>, a proactive and enthusiastic <span className='text-accent font-semibold'>MERN Stack Developer</span> from Dhaka, Bangladesh. I have completed my graduation on <span className='text-accent font-semibold'>Computer Science & Engineering</span> from <span className='text-accent font-semibold'> Ahsanullah University of Science & Technology</span>. My passion for web development started from the very first year of my university life. I have completed two online courses based on web development and also completed an internship on it. My goal is to become a Professional MERN Stack Developer in a renowned company and enhance my knowledge with learning new things.</p>
                    </div>
                    <div className='xl:ml-20 flex justify-center shadow-xl xl:w-1/3'>
                        <img className='w-1/2 xl:w-full rounded-lg' src={me} alt='me' />
                    </div>
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default About;