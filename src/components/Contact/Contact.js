import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = ({ currentSection }) => {

    // rendering contact component here
    return (
        <section className='relative border-t-4 border-accent/50 section fp-responsive md:h-screen'>
            <div className='sticky z-30 bg-primary w-full h-full overflow-hidden'>
                <h1 className={`hidden md:block absolute text-accent opacity-20 text-4xl md:text-8xl font-black -rotate-90 left-0 -translate-x-1/3 md:translate-x-0 duration-500 ${currentSection === 'Contact' ? 'top-[42%] md:top-[45%] -translate-y-1/2' : 'top-[150%]'}`}>Contact</h1>
                <h2 className='mt-10 text-accent font-bold text-3xl block md:hidden'>Contact</h2>
                <div className={`w-[90%] md:w-[75%] mt-10 mb-20 md:mb-0 md:mt-0 md:pl-20 mx-auto h-full flex flex-col md:flex-row items-center justify-center ${currentSection === 'Contact' ? 'md:animate-bottom-top-fade-in' : 'md:opacity-0'}`}>
                    <div className='w-full flex flex-col md:flex-row bg-secondary p-6 rounded-3xl shadow-xl text-neutral'>
                        <div className='md:w-1/2 flex flex-col justify-center'>
                            <h2 className='text-4xl text-accent font-bold'>Want To Know More About Me?</h2>
                            <p className='mt-5 w-4/5 mx-auto'>Don't hesitate, just send me an email. I will try to reach you as early as possible.</p>
                        </div>
                        <div className='md:w-1/2 mt-10 md:mt-0 md:ml-10'>
                            <form>
                                <div className='form-control w-full'>
                                    <label className='label'>
                                        <span className='label-text text-neutral'>Your Email ID <span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type='email' placeholder='Your Email ID Here' className='input input-bordered input-accent bg-primary w-full' required />
                                </div>
                                <div className='form-control w-full mt-4'>
                                    <label className='label'>
                                        <span className='label-text text-neutral'>Subject <span className='text-red-600'>*</span></span>
                                    </label>
                                    <input type='text' placeholder='Your Subject Here' className='input input-bordered input-accent bg-primary w-full' required />
                                </div>
                                <div className='form-control mt-4'>
                                    <label className='label'>
                                        <span className='label-text text-neutral'>Your Email <span className='text-red-600'>*</span></span>
                                    </label>
                                    <textarea className='textarea textarea-bordered textarea-accent bg-primary h-24' placeholder='Type Your Email Here...' required></textarea>
                                </div>
                                <div className='mt-6'>
                                    <button className='btn btn-accent text-secondary gap-2 capitalize w-full md:w-60'>
                                        Send Email
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;