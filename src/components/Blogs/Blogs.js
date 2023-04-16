import React from 'react';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import Layout from '../../Layout/Layout';

const Blogs = () => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // rendering blogs component here
    return (
        <Layout mainTitleText={'My Blogs'} bgTitleText={'Blogs'}>
            <animated.div ref={ref} style={animProps} className='py-40'>
                <h3 className='text-4xl xl:text-5xl font-extralight text-accent opacity-20'>Coming Soon. Stay Tuned...</h3>
            </animated.div>
        </Layout>
    );
};

export default Blogs;