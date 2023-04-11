import React from 'react';
import me from '../../images/me.jpg';
import SectionTitle from '../SectionTitle/SectionTitle';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';

const About = () => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // rendering about component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden'>
            <SectionTitle
                mainTitleText={'About me'}
                bgTitleText={'about'}
            />
            <animated.div ref={ref} style={animProps} className='py-20 flex flex-col-reverse md:flex-row items-center w-[95%] md:w-4/5 mx-auto'>
                <div className='mt-10 md:mt-0 md:text-left md:w-2/3'>
                    <p className='text-neutral text-sm md:text-base'>Greetings, I'm <span className='text-accent font-semibold'>Milhan Joardar Aumi</span>, a proactive and enthusiastic <span className='text-accent font-semibold'>Front-end Developer</span>. I am currently pursuing my undergraduate degree on <span className='text-accent font-semibold'>Computer Science & Engineering</span> from <span className='text-accent font-semibold'> Ahsanullah University of Science & Technology</span>. I have accomplished an online course named <span className='text-accent font-semibold'>Complete Web Development Course With Jhankar Mahbub</span> from <span className='text-accent font-semibold'>Programming Hero</span> on May 31, 2022. Throughout the course I have learned many things as HTML5, CSS3, JavaScript, ECMAScript, REST API, Chrome Dev Tools, React.js, React Router, MongoDB, Node.js, Express.js, React Query etc. I have completed 12 assignments through out the course as well. My goal is to become a Professional Front-end Developer in a renowned company and enhance my knowledge with learning new things.</p>
                </div>
                <div className='md:ml-20 overflow-hidden rounded-3xl shadow-xl md:w-1/3'>
                    <img className='w-full' src={me} alt='me' />
                </div>
            </animated.div>
        </section>
    );
};

export default About;