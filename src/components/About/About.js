import { animated } from '@react-spring/web';
import React from 'react';
import { InView } from 'react-intersection-observer';
import SectionLayout from '../../Layout/SectionLayout';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import me from '../../images/me.jpg';

const About = ({ setCurrentSection }) => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // rendering about component here
    return (
        <SectionLayout id={'about'} mainTitleText={'About me'} bgTitleText={'about'}>
            <InView as='div' threshold={1.0} onChange={inView => inView && setCurrentSection('About')}>
                <animated.div ref={ref} style={animProps} className='py-20 flex flex-col-reverse xl:flex-row items-center w-[95%] md:w-4/5 mx-auto'>
                    <div className='mt-10 xl:mt-0 xl:text-left xl:w-2/3'>
                        <p className='text-neutral text-sm md:text-base'>Hello, I'm <span className='text-accent font-semibold'>Milhan Joardar Aumi</span>, an eager and proactive <span className='text-accent font-semibold'>MERN Stack Developer</span> hailing from Dhaka, Bangladesh. I earned my <span className='text-accent font-semibold'>Computer Science & Engineering</span> degree from <span className='text-accent font-semibold'> Ahsanullah University of Science & Technology</span>. My journey into web development ignited during my university years, fueling my passion ever since. I've successfully tackled two online courses in web development and completed a rewarding internship in the field. My ambition is to excel as a Professional MERN Stack Developer in a prestigious company while continuously expanding my expertise through learning and growth.</p>
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