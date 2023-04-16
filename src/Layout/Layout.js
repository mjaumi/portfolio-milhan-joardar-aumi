import React from 'react';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const Layout = ({ children, bgTitleText, mainTitleText }) => {

    // rendering the web application's section layout here
    return (
        <section className='w-[95%] xl:w-4/5 mx-auto overflow-hidden mt-20'>
            <SectionTitle
                mainTitleText={mainTitleText}
                bgTitleText={bgTitleText}
            />
            {children}
        </section>
    );
};

export default Layout;