import { animated, useSpring } from '@react-spring/web';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect, useState } from 'react';

const SplashScreen = ({ hasSplashAnimFinished, setHasSplashAnimFinished }) => {
    // integration of react hooks here
    const [reverseAnim, setReverseAnim] = useState(false);

    // integration of react-spring hooks here
    const splashProps = useSpring({
        from: { scaleY: 1 },
        to: { scaleY: 0 },
        delay: 3000,
        config: {
            tension: 150,
            friction: 30,
        },
        onRest: () => setHasSplashAnimFinished(true),
    });

    const pulseTextProps = useSpring({
        from: { scale: 0.8 },
        to: { scale: 1.2 },
        reverse: reverseAnim,
        onRest: () => setReverseAnim(!reverseAnim),
    });

    // enabling & disabling scroll on splash screen animation finished here
    useEffect(() => {
        if (hasSplashAnimFinished) {
            enableBodyScroll(document);
        } else {
            disableBodyScroll(document);
        }
    }, [hasSplashAnimFinished]);

    // rendering the splash screen component here
    return (
        <animated.section style={splashProps} className='absolute bg-accent w-full h-screen flex justify-center items-center overflow-hidden z-[99999] origin-top'>
            <animated.div style={pulseTextProps} className='border-2 border-primary p-4 rounded-lg'>
                <h1 className='font-extralight text-5xl text-primary'>Find Aumi</h1>
            </animated.div>
        </animated.section>
    );
};

export default SplashScreen;