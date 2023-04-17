import React from 'react';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import SectionLayout from '../../Layout/SectionLayout';
import { InView } from 'react-intersection-observer';

const Blogs = ({ setCurrentSection }) => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // rendering blogs component here
    return (
        <SectionLayout id={'blogs'} mainTitleText={'My Blogs'} bgTitleText={'Blogs'}>
            <InView as='div' threshold={1.0} onChange={inView => inView && setCurrentSection('Blogs')}>
                <animated.div ref={ref} style={animProps} className='py-40'>
                    <h3 className='text-4xl xl:text-5xl font-extralight text-accent opacity-20'>Coming Soon. Stay Tuned...</h3>
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default Blogs;