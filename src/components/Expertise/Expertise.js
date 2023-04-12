import React, { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import ExpertiseItem from './ExpertiseItem';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';

const Expertise = () => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // integration of react hooks here
    const [skillSet, setSkillSet] = useState([]);

    // fetching the expertise from a json file here
    useEffect(() => {
        fetch('/expertise.json')
            .then(res => res.json())
            .then(data => setSkillSet(data));
    }, []);

    // rendering expertise component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden mt-20'>
            <SectionTitle
                mainTitleText={'my skills'}
                bgTitleText={'Expertise'}
            />
            <animated.div ref={ref} style={animProps} className='py-20 grid grid-cols-3 md:grid-cols-10 gap-5 items-center w-[95%] md:w-4/5 mx-auto'>
                {
                    skillSet?.map(skill => <ExpertiseItem
                        key={skill.id}
                        skill={skill}
                    />)
                }
            </animated.div>
        </section>
    );
};

export default Expertise;