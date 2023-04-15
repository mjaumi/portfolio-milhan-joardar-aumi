import React from 'react';
import emailjs from 'emailjs-com';
import { SiMinutemailer } from 'react-icons/si';
import SectionTitle from '../SectionTitle/SectionTitle';
import PortfolioButton from '../Buttons/PortfolioButton';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';

const Contact = () => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // handler function to handle message sending feature
    const sendMessageHandler = e => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then(res => console.log(res))
            .catch(err => console.log(err));

        e.target.reset();
    }

    // rendering contact component here
    return (
        <section className='w-[95%] md:w-4/5 mx-auto overflow-hidden mt-20'>
            <SectionTitle
                mainTitleText={'Get in Touch'}
                bgTitleText={'Contact'}
            />
            <animated.div ref={ref} style={animProps} className='py-20 w-[95%] md:w-3/5 mx-auto'>
                <div className='w-full bg-secondary p-6 rounded-lg shadow-xl text-neutral'>
                    <form onSubmit={sendMessageHandler}>
                        <div className='form-control w-full'>
                            <label className='label'>
                                <span className='label-text text-neutral'>Full Name <span className='text-red-600'>*</span></span>
                            </label>
                            <input type='text' name='fullName' placeholder='Your Full Name Here' className='input input-bordered input-accent bg-primary w-full' required />
                        </div>
                        <div className='form-control w-full mt-4'>
                            <label className='label'>
                                <span className='label-text text-neutral'>Email Address <span className='text-red-600'>*</span></span>
                            </label>
                            <input type='email' name='email' placeholder='Your Email Address Here' className='input input-bordered input-accent bg-primary w-full' required />
                        </div>
                        <div className='form-control w-full mt-4'>
                            <label className='label'>
                                <span className='label-text text-neutral'>Subject <span className='text-red-600'>*</span></span>
                            </label>
                            <input type='text' name='subject' placeholder='Your Subject Here' className='input input-bordered input-accent bg-primary w-full' required />
                        </div>
                        <div className='form-control mt-4'>
                            <label className='label'>
                                <span className='label-text text-neutral'>Message <span className='text-red-600'>*</span></span>
                            </label>
                            <textarea name='message' className='textarea textarea-bordered textarea-accent bg-primary h-24' placeholder='Type Your Message Here...' required></textarea>
                        </div>
                        <div className='mt-6'>
                            <PortfolioButton btnType={'submit'}>
                                <SiMinutemailer className='mr-2 w-4 h-4' />
                                Send Message
                            </PortfolioButton>
                        </div>
                    </form>
                </div>
            </animated.div>
        </section>
    );
};

export default Contact;