import React from 'react';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const SectionLayout = ({ id, children, bgTitleText, mainTitleText }) => {

    // rendering the web application's section layout here
    return (
        <section id={id} className='w-[95%] xl:w-4/5 mx-auto overflow-hidden pt-24'>
            <SectionTitle
                mainTitleText={mainTitleText}
                bgTitleText={bgTitleText}
            />
            {children}
        </section>
    );
};

export default SectionLayout;