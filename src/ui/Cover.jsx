import React, { useEffect } from 'react'
import * as eva from 'eva-icons';
import { descriptionConstant, helloConstant, myNameMinConstant, professionalNetworksConstant, professionConstant, socialMediasConstant, welcomeConstant } from '../words.constants'

export const Cover = () => {


    useEffect(() => {
        eva.replace();
    }, []);

    return (
        <section className='ml-auto mr-auto px-4 w-full container pt-8 sm:pt-14' id="coversection">
            <div className='grid grid-cols-3'>
                <div className='col-span-3 lg:col-span-2'>
                    <div>
                        <div className='mb-10 lg:mb-36'>
                            <span className='font-medium text-terciary text-base mb-5 block tracking-iswider'>{welcomeConstant}</span>
                            <h1 className='text-boldblack font-bold text-6xl mb-6'>{helloConstant}
                                <span className='text-secondary'>{myNameMinConstant}</span>
                                <br />
                                <span className="text-5xl">
                                    {professionConstant}.</span>
                            </h1>
                            <div>
                                <p className='text-terciary text-base opacity-90 pb-10 lg:pr-16 pb-0'>{descriptionConstant}</p>
                            </div>
                        </div>
                        <div className='grid grid-cols-2'>
                            <div className='col-span-2 sm:col-span-1'><div>
                            </div>
                                <span className='font-medium text-boldblack tracking-widest inline-block mb-5 text-sm'>{professionalNetworksConstant}</span>
                                <ul className='flex flex-wrap list-none'>
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
                                        <a href="https://github.com/jesusamaro25" target="_blank" rel="noopener noreferrer" className='block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
                                            <i
                                                data-eva="github-outline"
                                                data-eva-animation="pulse"
                                                data-eva-hover="true"
                                                data-eva-infinite="false"
                                            />
                                        </a>
                                    </li>
                                    <li className='margin-cards cursor-pointer'>
                                        <a  href="https://www.behance.net/jesus-amaro" target="_blank" rel="noopener noreferrer" className='block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
                                            <i
                                                data-eva="behance-outline"
                                                data-eva-animation="pulse"
                                                data-eva-hover="true"
                                                data-eva-infinite="false"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-span-2 sm:col-span-1'><div>
                            </div>
                                <span className='font-medium text-boldblack tracking-widest inline-block mb-5 text-sm'>{socialMediasConstant}</span>
                                <ul className='flex flex-wrap list-none'>
                                    <li className='margin-cards cursor-pointer'>
                                        <a href="https://twitter.com/jesusamaro_" target="_blank" rel="noopener noreferrer" className='resume-anchors block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
                                            <i
                                                data-eva="twitter-outline"
                                                data-eva-animation="pulse"
                                                data-eva-hover="true"
                                                data-eva-infinite="false"
                                            />
                                        </a>
                                    </li>
                                    <li className='margin-cards cursor-pointer'>
                                        <a href="https://instagram.com/jesusamaro_?r=nametag" target="_blank" rel="noopener noreferrer" className='resume-anchors block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
                                            <i
                                                data-eva="camera-outline"
                                                data-eva-animation="pulse"
                                                data-eva-hover="true"
                                                data-eva-infinite="false"
                                            />
                                        </a>
                                    </li>
                                    <li className='margin-cards cursor-pointer'>
                                        <a href="https://www.facebook.com/jesusamaro25" target="_blank" rel="noopener noreferrer" className='resume-anchors block w-16 h-16 leading-9 text-center relative rounded-md tracking-iswidermedium text-sm cards-styles flex justify-center items-center'>
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
                <div className='col-span-3 lg:col-span-1 mt-4 lg:mt-0'>
                    <div className='p-4 gradient-background lg:h-full'>
                        <img className="w-full lg:h-full" src="http://imgfz.com/i/uDa6PNe.jpeg" alt="Personal Portfolio" />
                    </div>
                </div>
            </div>
        </section>
    )
}
