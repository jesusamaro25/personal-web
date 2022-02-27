import React, { useEffect } from 'react'
import * as eva from 'eva-icons';
import { connectConstant, contactMeConstant, contactTitleConstant, emailTitleConstant, fullStackConstant, myNameMinConstant, phoneTitleConstant, sendMessageConstant, shortDescriptionConstant, yourEmailConstant, yourNameConstant, yourPhoneConstant, yourSubjectConstant, yourTextConstant } from '../words.constants'
import { useForm } from '../hooks/useForm';

export const Contact = () => {


    const [formValues, handleInputChange] = useForm({
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
        console.log(contactname, contactnumber, contactemail, contactsubject, contactmessage)
    }


    return (
        <section className='pt-24' id="contactsection">
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
                                            <span className='font-medium text-sm pr-2'>{sendMessageConstant}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
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
