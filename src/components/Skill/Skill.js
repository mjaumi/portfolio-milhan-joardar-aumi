import React from 'react';

const Skill = ({ skillName, value }) => {

    // rendering skill component here
    return (
        <div className='relative pt-1 mt-3'>
            <div className='flex mb-2 items-center justify-between'>
                <div>
                    <span className='text-xs font-semibold inline-block py-1 px-5 rounded-full text-accent bg-secondary'>
                        {skillName}
                    </span>
                </div>
                <div className='text-right'>
                    <span className='text-xs font-semibold inline-block text-accent'>
                        {value}%
                    </span>
                </div>
            </div>
            <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-secondary'>
                <div style={{ width: `${value}%` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-accent`}></div>
            </div>
        </div>
    );
};

export default Skill;