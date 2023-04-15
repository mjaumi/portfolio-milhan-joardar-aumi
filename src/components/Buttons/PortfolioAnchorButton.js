import React from 'react';

const PortfolioAnchorButton = ({ refUrl, additionalClassNames, children }) => {

    // rendering portfolio anchor button component here
    return (
        <a href={refUrl} className={`relative btn rounded-md capitalize border-2 overflow-hidden after:w-full after:scale-x-0 after:h-full after:bg-primary after:absolute after:origin-left after:top-0 hover:after:scale-x-100 after:duration-300 ${additionalClassNames}`} target='_blank' rel='noreferrer'>
            <div className='absolute flex z-10'>
                {children}
            </div>
        </a>
    );
};

export default PortfolioAnchorButton;