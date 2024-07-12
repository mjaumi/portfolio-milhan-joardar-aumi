import { animated } from '@react-spring/web';
import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import SectionLayout from '../../Layout/SectionLayout';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import ExpertiseItem from './ExpertiseItem';

const Expertise = ({ setCurrentSection }) => {
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
        <SectionLayout id={'expertise'} mainTitleText={'my skills'} bgTitleText={'Expertise'}>
            <InView as='div' threshold={0.8} onChange={inView => inView && setCurrentSection('Expertise')}>
                <animated.div ref={ref} style={animProps} className='py-20 grid grid-cols-3 md:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-10 gap-5 w-[95%] xl:w-4/5 mx-auto'>
                    {
                        skillSet?.map((skill) => <ExpertiseItem
                            key={skill.id}
                            skill={skill}
                        />)
                    }
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default Expertise;