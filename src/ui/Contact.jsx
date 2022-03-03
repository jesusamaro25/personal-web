import React, { useEffect, useState } from 'react'
import * as eva from 'eva-icons';
import { connectConstant, contactMeConstant, contactTitleConstant, emailTitleConstant, fullStackConstant, myNameMinConstant, phoneTitleConstant, sendMessageConstant, shortDescriptionConstant, yourEmailConstant, yourNameConstant, yourPhoneConstant, yourSubjectConstant, yourTextConstant } from '../words.constants'
import { useForm } from '../hooks/useForm';
import emailjs from '@emailjs/browser';
import { SuccessToast } from '../toasts/SuccessToast';
import { ErrorToast } from '../toasts/ErrorToast';

export const Contact = () => {

    const [loadingState, setLoadingState] = useState(false);

    const [errorState, setErrorState] = useState(false);

    const [successState, setSuccessState] = useState(false);

    const [formValues, handleInputChange, reset] = useForm({
        contactname: '',
        contactnumber: '',
        contactemail: '',
        contactsubject: '',
        contactmessage: ''
    })

    const { contactname, contactnumber, contactemail, contactsubject, contactmessage } = formValues;

    useEffect(() => {
        eva.replace();
    }, []);

    const handleSend = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: contactname,
            from_phone: contactnumber,
            from_email: contactemail,
            from_subject: contactsubject,
            message: contactmessage
        };
        setLoadingState(true);
            emailjs.send(process.env.REACT_APP_SERVICEEMAIL, process.env.REACT_APP_TEMPLATEEMAIL, templateParams, process.env.REACT_APP_USEREMAIL)
            .then((response) => {
                if (response.status === 200) {
                    setSuccessState(true);
                    reset();
                    setTimeout(() => {
                        setSuccessState(false);
                    }, 3000);
                }
                else {
                    setErrorState(true);
                    setTimeout(() => {
                        setErrorState(false);
                    }, 8000);
                }
                setLoadingState(false);
            }, (err) => {
                setLoadingState(false);
                setErrorState(true);
                setTimeout(() => {
                    setErrorState(false);
                }, 8000);
            });
    }


    return (

        <section className='pt-24' id="contactsection">

            {
                successState === true && <SuccessToast />
            }

            {
                errorState === true && <ErrorToast />
            }
            <hr className='border-lightbackgroundgray mx-auto w-9/12' />
            <div className='pt-24 w-full px-4 container mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 w-full'>
                        <div className='text-center'>
                            <span className='text-secondary tracking-iswidermedium leading-3 font-medium text-xl'>{contactTitleConstant}</span>
                            <h2 className='mt-4 text-6xl font-bold'>{contactMeConstant}</h2>
                        </div>
                    </div>
                </div>
                <div className='grid gap-x-6 grid-cols-3 pt-12'>
                    <div className='col-span-3 p-7 rounded-lg cards-withouthover lg:col-span-1'>
                        <div className='rounded-lg mb-7'>
                            <img className="w-full" src="http://imgfz.com/i/PHyIKTp.jpeg" alt="contact photo" />
                        </div>
                        <div className='mb-3.5'>
                            <h4 className='boldblack mb-2 text-3xl font-bold'>{myNameMinConstant}</h4>
                            <span className='text-terciary'>{fullStackConstant}</span>
                        </div>
                        <div className='mb-9'>
                            <p className='text-terciary font-normal mb-5 text-lg'>{shortDescriptionConstant}</p>
                            <div>
                                <span className='text-terciary'>{phoneTitleConstant}</span>
                            </div>
                            <div>
                                <span className='text-terciary'>{emailTitleConstant}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className='font-medium text-boldblack tracking-widest inline-block mb-5 text-sm'>{connectConstant}</span>
                            </div>
                            <div className='mt-6'>
                                <div className='grid grid-cols-3'>
                                    <div className='col-span-3'>
                                        <ul className='flex flex-wrap list-none'>
                                            <li className='margin-cards cursor-pointer'>
                                                <a href="https://twitter.com/jesusamaro_" target="_blank" rel="noopener noreferrer" className='block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
                                                    <i
                                                        data-eva="twitter-outline"
                                                        data-eva-animation="pulse"
                                                        data-eva-hover="true"
                                                        data-eva-infinite="false"
                                                    />
                                                </a>
                                            </li>
                                            <li className='margin-cards cursor-pointer'>
                                                <a href="https://www.linkedin.com/in/jesus-amaro-developer/" target="_blank" rel="noopener noreferrer" className='block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
                                                    <i
                                                        data-eva="linkedin-outline"
                                                        data-eva-animation="pulse"
                                                        data-eva-hover="true"
                                                        data-eva-infinite="false"
                                                    />
                                                </a>
                                            </li>
                                            <li className='margin-cards cursor-pointer'>
                                                <a href="https://www.facebook.com/jesusamaro25" target="_blank" rel="noopener noreferrer" className='block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
                                                    <i
                                                        data-eva="facebook-outline"
                                                        data-eva-animation="pulse"
                                                        data-eva-hover="true"
                                                        data-eva-infinite="false"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 pt-7 lg:col-span-2 lg:pt-0'>
                        <div className='p-7 rounded-lg cards-withouthover h-full ml-0 lg:ml-5'>
                            <div>
                                <form className='grid grid-cols-12 gap-x-6' onSubmit={handleSend}>
                                    <div className='col-span-12 lg:col-span-6'>
                                        <div className='mb-5 lg:mb-9'>
                                            <label htmlFor='contactname' className='text-terciary text-xs font-medium tracking-tighter text-left block mb-3.5'>{yourNameConstant}</label>
                                            <input autoComplete='off' className='border-input text-sm rounded-md h-14 bg-whitecontact w-full' value={contactname} onChange={handleInputChange} name='contactname' id='contactname' type='text' />
                                        </div>
                                    </div>
                                    <div className='col-span-12 lg:col-span-6'>
                                        <div className='mb-5 lg:mb-9'>
                                            <label htmlFor='contactnumber' className='text-terciary text-xs font-medium tracking-tighter text-left block mb-3.5'>{yourPhoneConstant}</label>
                                            <input autoComplete='off' className='border-input text-sm rounded-md h-14 bg-whitecontact w-full' value={contactnumber} onChange={handleInputChange} name='contactnumber' id='contactnumber' type='text' />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='mb-5 lg:mb-9'>
                                            <label htmlFor='contactemail' className='text-terciary text-xs font-medium tracking-tighter text-left block mb-3.5'>{yourEmailConstant}</label>
                                            <input autoComplete='off' className='border-input text-sm rounded-md h-14 bg-whitecontact w-full' value={contactemail} onChange={handleInputChange} name='contactemail' id='contactemail' type='text' />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='mb-5 lg:mb-9'>
                                            <label htmlFor='contactsubject' className='text-terciary text-xs font-medium tracking-tighter text-left block mb-3.5'>{yourSubjectConstant}</label>
                                            <input autoComplete='off' className='border-input text-sm rounded-md h-14 bg-whitecontact w-full' value={contactsubject} onChange={handleInputChange} name='contactsubject' id='contactsubject' type='text' />
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='mb-5 lg:mb-20'>
                                            <label htmlFor='contactmessage' className='text-terciary text-xs font-medium tracking-tighter text-left block mb-3.5'>{yourTextConstant}</label>
                                            <textarea autoComplete='off' className='height-area border-input text-sm rounded-md h-14 bg-whitecontact w-full' value={contactmessage} onChange={handleInputChange} name='contactmessage' id='contactmessage' type='text'></textarea>
                                        </div>
                                    </div>
                                    <div className='col-span-12'>
                                        <button name="submit" type="submit" id="submit" className='font-medium text-sm rounded-md w-full button-send h-12 flex items-center justify-center text-secondary'>
                                            {
                                                (loadingState === false) ?
                                                    <>
                                                        <span className='font-medium text-sm pr-2'>{sendMessageConstant}</span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                    </>
                                                    :
                                                    <svg role="status" className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
