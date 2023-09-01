import React from 'react';
import loadable from '@loadable/component'

const ExpertiseItem = ({ skill }) => {
    // destructuring the skill object here
    const { skillName, icon, color, url } = skill || {};

    // splitting the library and iconName here
    const [library, iconName] = icon.split('/');

    // choosing the logo here
    let ReactIcons = null;

    // dynamically importing icon libraries to reduce memory usage
    switch (library) {
        case 'fa':
            ReactIcons = loadable.lib(() => import('react-icons/fa'));
            break;

        case 'tb':
            ReactIcons = loadable.lib(() => import('react-icons/tb'));
            break;

        case 'io5':
            ReactIcons = loadable.lib(() => import('react-icons/io5'));
            break;

        case 'si':
            ReactIcons = loadable.lib(() => import('react-icons/si'));
            break;

        case 'bs':
            ReactIcons = loadable.lib(() => import('react-icons/bs'));
            break;

        default:
            break;
    }

    console.log(ReactIcons);

    // rendering expertise item component here
    return (
        <div className='border-2 border-accent rounded-lg py-3 hover:cursor-pointer hover:scale-110 duration-300'>
            <a href={url} target='_blank' rel='noreferrer'>
                <div className='flex flex-col items-center justify-center'>
                    <ReactIcons>
                        {
                            ({ [iconName]: Icon }) =>
                                <Icon style={{ color: `${color}` }} className='w-10 h-10' />

                        }
                    </ReactIcons>
                    <p style={{ color: `${color}` }} className='mt-2 font-light text-sm'>{skillName}</p>
                </div>
            </a>
        </div>
    );
};

export default ExpertiseItem;