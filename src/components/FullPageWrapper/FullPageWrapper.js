import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './FullPageWrapper.css';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import Expertise from '../Expertise/Expertise';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const anchors = ['Home', 'About', 'Services', 'Expertise', 'Projects', 'Blogs', 'Contact', 'Footer'];

const FullPageWrapper = () => {
    // integration of react hooks
    const [currentSection, setCurrentSection] = useState('');

    // rendering full page component here
    return (
        <ReactFullpage
            anchors={anchors}
            navigation
            navigationTooltips={anchors}
            responsiveWidth={750}
            onLeave={(origin, destination, direction) => {

            }}
            afterLoad={(origin, destination, direction, trigger) => {
                if (destination.anchor !== 'Home') {
                    if (destination.anchor === 'Footer') {
                        setCurrentSection('Contact');
                    } else {
                        setCurrentSection(destination.anchor);
                    }
                }
            }}
            render={({ state, fullpageApi }) => {
                fullpageApi?.setScrollingSpeed(1200);
                if ((state.direction === 'up' && fullpageApi?.getActiveSection().anchor === 'Home') || state.direction === null) {
                    setCurrentSection(fullpageApi?.getActiveSection().anchor);
                }

                return (
                    <>
                        <Hero currentSection={currentSection} />
                        <About currentSection={currentSection} />
                        <Services currentSection={currentSection} />
                        <Expertise currentSection={currentSection} />
                        <Projects currentSection={currentSection} />
                        <Blogs currentSection={currentSection} />
                        <Contact currentSection={currentSection} />
                        <Footer />
                    </>
                );
            }}
        />
    );
};

export default FullPageWrapper;