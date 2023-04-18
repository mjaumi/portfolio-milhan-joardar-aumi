import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { SiMinutemailer } from 'react-icons/si';
import PortfolioButton from '../Buttons/PortfolioButton';
import { animated } from '@react-spring/web';
import useDivFadeInAnimation from '../../hooks/useDivFadeInAnimation';
import { TailSpin } from 'react-loading-icons'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SectionLayout from '../../Layout/SectionLayout';
import { InView } from 'react-intersection-observer';

const Contact = ({ setCurrentSection }) => {
    // integration of custom hooks hooks here
    const { ref, animProps } = useDivFadeInAnimation();

    // integration of react-hook-form hooks here
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // integration of react hooks here
    const [isMessageSending, setIsMessageSending] = useState(false);

    // handler function to handle message sending feature
    const sendMessageHandler = data => {

        setIsMessageSending(true);

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            data,
            process.env.REACT_APP_PUBLIC_KEY
        )
            .then(res => {
                toast.success('Got Your Message. Will Contact With You Soon. Thank You!!');
                setIsMessageSending(false);
            })
            .catch(err => {
                toast.error('There Was An Error While Sending The Message!!');
                setIsMessageSending(false);
            });

        reset({
            fullName: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    // rendering contact component here
    return (
        <SectionLayout id={'contact'} mainTitleText={'Get in Touch'} bgTitleText={'Contact'}>
            <InView as='div' threshold={0.5} onChange={inView => inView && setCurrentSection('Contact')}>
                <animated.div ref={ref} style={animProps} className='py-20 w-[95%] xl:w-4/5 2xl:w-3/5 mx-auto'>
                    <div className='w-full bg-secondary p-6 rounded-lg shadow-xl text-neutral'>
                        <form onSubmit={handleSubmit(sendMessageHandler)}>
                            <div className='form-control w-full'>
                                <label className='label'>
                                    <span className='label-text text-neutral'>Full Name <span className='text-red-600'>*</span></span>
                                </label>
                                <input type='text' placeholder='Your Full Name Here' className={`input input-bordered bg-primary !cursor-pointer w-full ${errors.fullName ? 'border-red-600 focus:outline-red-600' : 'input-accent'}`} {...register('fullName', {
                                    required: {
                                        value: true,
                                        message: 'Name Required!!',
                                    }
                                })} />
                                <label className='label'>
                                    {errors.fullName?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.fullName.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full mt-4'>
                                <label className='label'>
                                    <span className='label-text text-neutral'>Email Address <span className='text-red-600'>*</span></span>
                                </label>
                                <input type='email' placeholder='Your Email Address Here' className={`input input-bordered bg-primary !cursor-pointer w-full ${errors.email ? 'border-red-600 focus:outline-red-600' : 'input-accent'}`}  {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email Required!!',
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Invalid Email Address!!',
                                    }
                                })} />
                                <label className='label'>
                                    {errors.email?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-600'>{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className='form-control w-full mt-4'>
                                <label className='label'>
                                    <span className='label-text text-neutral'>Subject <span className='text-red-600'>*</span></span>
                                </label>
                                <input type='text' placeholder='Your Subject Here' className={`input input-bordered bg-primary !cursor-pointer w-full ${errors.subject ? 'border-red-600 focus:outline-red-600' : 'input-accent'}`} {...register('subject', {
                                    required: {
                                        value: true,
                                        message: 'Subject Required!!',
                                    }
                                })} />
                                <label className='label'>
                                    {errors.subject?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.subject.message}</span>}
                                </label>
                            </div>
                            <div className='form-control mt-4'>
                                <label className='label'>
                                    <span className='label-text text-neutral'>Message <span className='text-red-600'>*</span></span>
                                </label>
                                <textarea className={`textarea textarea-bordered bg-primary !cursor-pointer h-32 ${errors.message ? 'border-red-600 focus:outline-red-600' : 'textarea-accent'}`} placeholder='Type Your Message Here...' {...register('message', {
                                    required: {
                                        value: true,
                                        message: 'Message Required!!',
                                    }
                                })} ></textarea>
                                <label className='label'>
                                    {errors.message?.type === 'required' && <span className='label-text-alt text-red-600'>{errors.message.message}</span>}
                                </label>
                            </div>
                            <div className='mt-6'>
                                <PortfolioButton
                                    btnType={'submit'}
                                    isLoading={isMessageSending}
                                    additionalClassNames={'text-primary btn-accent hover:text-accent border-accent'}
                                >
                                    {
                                        !isMessageSending ?
                                            <SiMinutemailer className='mr-2 w-4 h-4' />
                                            :
                                            <TailSpin stroke='#D4D4D4' width={'16px'} height={'16px'} className='mr-2' />
                                    }
                                    Send Message
                                </PortfolioButton>
                            </div>
                        </form>
                    </div>
                </animated.div>
            </InView>
        </SectionLayout>
    );
};

export default Contact;