import React from 'react';
import * as BootstrapIcons from 'react-icons/bs';
import * as FontAwesomeIcons from 'react-icons/fa';
import * as IonIcons from 'react-icons/io5';
import * as SimpleIcons from 'react-icons/si';
import * as TablerIcons from 'react-icons/tb';

const ExpertiseItem = ({ skill }) => {
    // destructuring the skill object here
    const { skillName, icon, color, url } = skill || {};

    // choosing the logo here
    let Logo = null;

    switch (icon.slice(0, 2)) {
        case 'Fa':
            Logo = FontAwesomeIcons[icon];
            break;

        case 'Tb':
            Logo = TablerIcons[icon];
            break;

        case 'Io':
            Logo = IonIcons[icon];
            break;

        case 'Si':
            Logo = SimpleIcons[icon];
            break;

        case 'Bs':
            Logo = BootstrapIcons[icon];
            break;

        default:
            break;
    }

    // rendering expertise item component here
    return (
        <div className='border-2 border-accent rounded-lg py-3 hover:cursor-pointer hover:scale-110 duration-300'>
            <a href={url} target='_blank' rel='noreferrer'>
                <div className='flex flex-col items-center justify-center'>
                    <Logo style={{ color: `${color}` }} className='w-10 h-10' />
                    <p style={{ color: `${color}` }} className='mt-2 font-light text-sm'>{skillName}</p>
                </div>
            </a>
        </div>
    );
};

export default ExpertiseItem;