import React from 'react';

const PortfolioNavbarButton = ({ sectionId, children }) => {
    // handler function to handle scroll to particular section
    const scrollToSectionHandler = sectionId => {
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: (sectionId === 'projects' || sectionId === 'contact') ? 'start' : 'center',
            });
        }
    }

    // rendering navbar button component here
    return (
        <li className='list-none hover:opacity-40 duration-300'>
            <button onClick={() => scrollToSectionHandler(sectionId)} className='w-[120px] !rounded-none hover:bg-transparent focus:bg-transparent'>
                {children}
            </button>
        </li>
    );
};

export default PortfolioNavbarButton;