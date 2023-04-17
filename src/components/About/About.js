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
                        <p className='text-neutral text-sm md:text-base'>Greetings, I'm <span className='text-accent font-semibold'>Milhan Joardar Aumi</span>, a proactive and enthusiastic <span className='text-accent font-semibold'>Front-end Developer</span>. I am currently pursuing my undergraduate degree on <span className='text-accent font-semibold'>Computer Science & Engineering</span> from <span className='text-accent font-semibold'> Ahsanullah University of Science & Technology</span>. I have accomplished an online course named <span className='text-accent font-semibold'>Complete Web Development Course With Jhankar Mahbub</span> from <span className='text-accent font-semibold'>Programming Hero</span> on May 31, 2022. Throughout the course I have learned many things as HTML5, CSS3, JavaScript, ECMAScript, REST API, Chrome Dev Tools, React.js, React Router, MongoDB, Node.js, Express.js, React Query etc. I have completed 12 assignments through out the course as well. My goal is to become a Professional Front-end Developer in a renowned company and enhance my knowledge with learning new things.</p>
                    </div>
                    <div className='xl:ml-20 overflow-hidden rounded-lg shadow-xl xl:w-1/3'>
                        <img className='w-full' src={me} alt='me' />
                    </div>
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default About;