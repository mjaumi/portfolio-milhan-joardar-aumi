import { useInView, useSpring } from '@react-spring/web';

// custom hook to handle div fade in animation
const useDivFadeInAnimation = () => {
    // integration of react-spring hooks here
    const [ref, inView] = useInView();

    const animProps = useSpring({
        from: {
            opacity: 0,
            translateY: '20vh',
        },
        to: {
            opacity: 1,
            translateY: '0',
        },
        config: {
            tension: 480,
            friction: 200,
            duration: 1000,
        },
        delay: 300,
        pause: !inView,
    });

    return {
        ref,
        animProps
    };
}

export default useDivFadeInAnimation;
