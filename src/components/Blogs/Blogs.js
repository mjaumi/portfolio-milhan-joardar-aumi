import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';

const Blogs = () => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // rendering blogs component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden mt-20'>
            <SectionTitle
                mainTitleText={'My Blogs'}
                bgTitleText={'Blogs'}
            />
            <animated.div ref={ref} style={animProps} className='py-40'>
                <h3 className='text-4xl md:text-5xl font-extralight text-accent opacity-20'>Coming Soon. Stay Tuned...</h3>
            </animated.div>
        </section>
    );
};

export default Blogs;