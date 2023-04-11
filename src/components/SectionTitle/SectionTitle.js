import { animated, useInView, useSpring } from '@react-spring/web';
import React, { useState } from 'react';

const SectionTitle = ({ mainTitleText, bgTitleText }) => {
    // integration of react hooks here
    const [hasTitleAnimStarted, setHasTitleAnimStarted] = useState(false);

    // integration of react-spring hooks here
    const [ref, inView] = useInView();

    const titleProps = useSpring({
        from: { scale: 0 },
        to: { scale: 1 },
        config: {
            tension: 280,
            friction: 90,
            duration: 1000,
        },
        pause: !inView,
        delay: 500,
        onStart: () => setHasTitleAnimStarted(true),
    });

    const lineProps = useSpring({
        from: { scaleX: 0 },
        to: { scaleX: 1 },
        config: {
            tension: 280,
            friction: 90,
            duration: 1000,
        },
        pause: !hasTitleAnimStarted,
    });

    // rendering section title component here
    return (
        <div ref={ref} className='flex items-center'>
            <animated.div style={lineProps} className='w-1/3 h-px bg-accent origin-right'></animated.div>
            <animated.div style={titleProps} className='relative mx-5'>
                <h3 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 font-light text-lg md:text-4xl text-neutral uppercase w-full'>{mainTitleText}</h3>
                <h2 className='font-black text-3xl md:text-6xl uppercase text-accent/20'>{bgTitleText}</h2>
            </animated.div>
            <animated.div style={lineProps} className='w-full h-px bg-accent origin-left'></animated.div>
        </div>
    );
};

export default SectionTitle;