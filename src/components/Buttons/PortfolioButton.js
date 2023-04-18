import React from 'react';

const PortfolioButton = ({ additionalClassNames, children, isLoading, onClickHandler }) => {

    // rendering portfolio button component here
    return (
        <button onClick={onClickHandler} className={`btn relative capitalize mt-8 md:mt-0 md:ml-8 w-60 border-2 overflow-hidden after:w-full after:scale-x-0 after:h-full after:bg-primary after:absolute after:origin-left after:top-0 hover:after:scale-x-100 after:duration-300 ${additionalClassNames} disabled:cursor-not-allowed disabled:opacity-70 !cursor-pointer`} disabled={isLoading}>
            <div className='absolute flex z-10'>
                {children}
            </div>
        </button>
    );
};

export default PortfolioButton;