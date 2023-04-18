import { animated, useSpring } from '@react-spring/web';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect } from 'react';

const SplashScreen = ({ hasSplashAnimFinished, setHasSplashAnimFinished }) => {

    // integration of react-spring hooks here
    const splashProps = useSpring({
        from: { scaleY: 1 },
        to: { scaleY: 0 },
        delay: 2800,
        config: {
            tension: 150,
            friction: 30,
        },
        onRest: () => setHasSplashAnimFinished(true),
    });

    const zoomOutTextProps = useSpring({
        from: { scale: 1 },
        to: { scale: 0 },
        delay: 2300,
    });

    // enabling & disabling scroll on splash screen animation finished here
    useEffect(() => {
        if (hasSplashAnimFinished) {
            enableBodyScroll(document);
        } else {
            disableBodyScroll(document);
        }
    }, [hasSplashAnimFinished]);

    // animating the SVG here
    useEffect(() => {
        const paths = document.querySelectorAll('#find-aumi path');
        const polygons = document.querySelectorAll('#find-aumi polygon');
        const rectangle = document.querySelectorAll('#find-aumi rect');

        animateSvgElements(paths);
        animateSvgElements(polygons);
        animateSvgElements(rectangle);
    }, []);

    // this function is animating the SVG
    const animateSvgElements = element => {
        element.forEach(item => {
            const pathLength = item.getTotalLength();

            item.setAttribute('stroke-dasharray', pathLength);
            item.setAttribute('stroke-dashoffset', pathLength);

            item.innerHTML = `<animate attributeName='stroke-dashoffset' begin='0s' dur='2s' to='0' fill='freeze'/>`;
        });
    }

    // rendering the splash screen component here
    return (
        <animated.section style={splashProps} className='fixed top-0 left-0 bg-accent w-full h-screen flex justify-center items-center overflow-hidden z-[99999] origin-top'>
            <animated.div style={zoomOutTextProps} className='h-[180px] w-[400px]'>
                <svg id='find-aumi' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 202 90'>
                    <title>find-aumi</title>
                    <rect x='0.5' y='0.5' width='201' height='61' rx='6.7' fill='none' stroke='#111' strokeMiterlimit='10' />
                    <polygon points='28.61 17.9 28.61 19.42 16.78 19.42 16.78 31.14 27.11 31.14 27.11 32.66 16.78 32.66 16.78 45.98 15.1 45.98 15.1 31.94 15.1 17.9 21.85 17.9 28.61 17.9' fill='none' stroke='#111' />
                    <path d='M31.89,33a1.58,1.58,0,0,1-.41-1.14,1.62,1.62,0,0,1,.41-1.13,1.4,1.4,0,0,1,2,0,1.62,1.62,0,0,1,.41,1.13A1.58,1.58,0,0,1,33.91,33a1.42,1.42,0,0,1-2,0Z' transform='translate(1 -14)' fill='none' stroke='#111' />
                    <polygon points='34.72 24.26 34.72 35.12 34.72 45.98 33.05 45.98 33.05 35.12 33.05 24.26 34.72 24.26' fill='none' stroke='#111' />
                    <path d='M54.91,40.2q2.28,2.38,2.28,7.06V60H55.55V47.38a8.65,8.65,0,0,0-1.83-5.94,6.31,6.31,0,0,0-5-2.06,6.61,6.61,0,0,0-5.24,2.24c-1.31,1.49-2,3.71-2,6.64V60H39.88V38.26h1.68v4.6a7.12,7.12,0,0,1,2.85-3.74A8.23,8.23,0,0,1,49,37.82,7.76,7.76,0,0,1,54.91,40.2Z' transform='translate(1 -14)' fill='none' stroke='#111' />
                    <path d='M63.32,43.22a9.3,9.3,0,0,1,3.47-3.88A9.47,9.47,0,0,1,71.85,38a8.87,8.87,0,0,1,8.58,6V30.38h1.68V60H80.43V54.22a8.93,8.93,0,0,1-3.14,4.38,8.74,8.74,0,0,1-5.44,1.7A9.16,9.16,0,0,1,63.32,55a13.27,13.27,0,0,1-1.25-5.9A13.12,13.12,0,0,1,63.32,43.22Z' transform='translate(1 -14)' fill='none' stroke='#111' />
                    <path d='M79.33,44.08a8.27,8.27,0,0,0-3-3.36,7.84,7.84,0,0,0-4.25-1.18,8.16,8.16,0,0,0-4.33,1.14A7.7,7.7,0,0,0,64.83,44a11.75,11.75,0,0,0-1,5.12,11.75,11.75,0,0,0,1,5.12,7.79,7.79,0,0,0,2.93,3.32,8.12,8.12,0,0,0,11.59-3.38,11.25,11.25,0,0,0,1.08-5.06A11,11,0,0,0,79.33,44.08Z' transform='translate(1 -14)' fill='none' stroke='#111' />
                    <polygon points='114.59 38.78 102.17 38.78 99.67 45.98 97.84 45.98 102.65 32.26 107.47 18.54 109.33 18.54 114.13 32.26 118.92 45.98 117.09 45.98 114.59 38.78' fill='none' stroke='#111' />
                    <polygon points='114.07 37.26 111.23 29.08 108.4 20.9 106.97 24.99 105.55 29.08 102.69 37.26 108.38 37.26 114.07 37.26' fill='none' stroke='#111' />
                    <path d='M139.26,38.26V60h-1.68V55.26A7.15,7.15,0,0,1,134.72,59a8.15,8.15,0,0,1-4.57,1.3A7.87,7.87,0,0,1,124.24,58q-2.3-2.39-2.29-7.06V38.26h1.64V50.78a8.65,8.65,0,0,0,1.83,5.94,6.29,6.29,0,0,0,5,2.06,6.63,6.63,0,0,0,5.24-2.24q2-2.25,2-6.64V38.26Z' transform='translate(1 -14)' fill='none' stroke='#111' />
                    <path d='M175,40.2q2.2,2.38,2.21,7.06V60h-1.65V47.38a9,9,0,0,0-1.73-5.94,5.9,5.9,0,0,0-4.76-2.06,6.16,6.16,0,0,0-5,2.32q-1.91,2.32-1.91,6.72V60h-1.64V47.38a9,9,0,0,0-1.73-5.94A5.9,5.9,0,0,0,154,39.38a6.16,6.16,0,0,0-5,2.32q-1.91,2.32-1.91,6.72V60h-1.68V38.26h1.68V43a7.31,7.31,0,0,1,2.78-3.86,7.69,7.69,0,0,1,4.42-1.3A7.55,7.55,0,0,1,159,39.36a7.94,7.94,0,0,1,2.74,4.54,7.61,7.61,0,0,1,2.76-4.54,7.77,7.77,0,0,1,4.81-1.54A7.34,7.34,0,0,1,175,40.2Z' transform='translate(1 -14)' fill='none' stroke='#111' />
                    <path d='M183,33a1.58,1.58,0,0,1-.41-1.14,1.61,1.61,0,0,1,.41-1.12,1.33,1.33,0,0,1,1-.44,1.31,1.31,0,0,1,1,.44,1.57,1.57,0,0,1,.42,1.12A1.54,1.54,0,0,1,185,33a1.33,1.33,0,0,1-1,.42A1.35,1.35,0,0,1,183,33Z' transform='translate(1 -14)' fill='none' stroke='#111' />
                    <rect x='184.16' y='24.26' width='1.68' height='21.72' fill='none' stroke='#111' />
                </svg>
            </animated.div>
        </animated.section>
    );
};

export default SplashScreen;