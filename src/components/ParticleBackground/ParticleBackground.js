import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {

    // memoizing the particle options for optimization
    const options = useMemo(() => {
        return {
            particles: {
                number: {
                    value: 180,
                    density: {
                        enable: true,
                        value_area: 1800
                    }
                }, color: {
                    value: '#00293a'
                },
                shape: {
                    type: 'polygon',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 12
                    },
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.05,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 4,
                    direction: 'none',
                    random: true,
                    straight: false,
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'window',
            },
            retina_detect: true
        }
    }, []);

    // initializing particles
    const particlesInit = useCallback((engine) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        loadFull(engine);
    }, []);

    // rendering particle background component here
    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            options={options}
        />
    );
};

export default ParticleBackground;