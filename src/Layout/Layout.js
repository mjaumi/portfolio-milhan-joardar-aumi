import React from 'react';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const Layout = ({ children, bgTitleText, mainTitleText }) => {

    // rendering the web application's section layout here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden'>
            <SectionTitle
                mainTitleText={mainTitleText}
                bgTitleText={bgTitleText}
            />
            {children}
        </section>
    );
};

export default Layout;