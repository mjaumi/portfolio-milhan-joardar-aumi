import React from 'react';

const PortfolioDrawerButton = ({ currentSection, isDrawerVisible, setIsDrawerVisible, children, sectionId }) => {
    // handler function to handle scroll to particular section
    const scrollToSectionHandler = sectionId => {
        const section = document.getElementById(sectionId);

        if (section) {
            console.log(section);
            section.scrollIntoView({
                behavior: 'smooth',
                block: (sectionId === 'projects' || sectionId === 'contact') ? 'start' : 'center',
            });

            // setting drawer invisible here
            document.getElementById('portfolio-drawer').click();
            setTimeout(() => setIsDrawerVisible(!isDrawerVisible), 1000);
        }
    }

    // rendering portfolio drawer button component here
    return (
        <button onClick={() => scrollToSectionHandler(sectionId)} className={`block py-3 w-full hover:cursor-pointer hover:opacity-40 ${currentSection === children && 'bg-accent text-secondary !cursor-pointer'}`}>
            {children}
        </button>
    );
};

export default PortfolioDrawerButton;