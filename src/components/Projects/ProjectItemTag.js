import React from 'react';

const ProjectItemTag = ({ tag }) => {

    // rendering project item tag component here
    return (
        <span className='border-2 border-accent px-2 py-px rounded-full text-sm text-accent font-light'>
            {tag}
        </span>
    );
};

export default ProjectItemTag;