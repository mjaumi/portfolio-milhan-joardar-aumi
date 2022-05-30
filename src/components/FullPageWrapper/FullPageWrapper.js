import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './FullPageWrapper.css';
import Hero from '../Hero/Hero';
import About from '../About/About';

const anchors = ['Home', 'About', 'Services'];

const FullPageWrapper = () => {
    // integration of react hooks
    const [currentSection, setCurrentSection] = useState('');

    // rendering full page component here
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            sectionsColor={['', '', '']}
            onLeave={(origin, destination, direction) => {

            }}
            afterLoad={(origin, destination, direction, trigger) => {
                if (direction === 'down') {
                    setCurrentSection(destination.anchor);
                }
            }}
            render={({ state, fullpageApi }) => {
                fullpageApi?.setScrollingSpeed(1200);
                if (state.direction === 'up' || state.direction === null) {
                    setCurrentSection(fullpageApi?.getActiveSection().anchor);
                }

                return (
                    <>
                        <Hero currentSection={currentSection} />
                        <About currentSection={currentSection} />
                    </>
                );
            }}
        />
    );
};

export default FullPageWrapper;