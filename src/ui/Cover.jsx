import React from 'react'
import { descriptionConstant, helloConstant, myNameMinConstant, professionalNetworksConstant, professionConstant, socialMediasConstant, welcomeConstant } from '../words.constants'

export const Cover = () => {
    return (
        <div className='ml-auto mr-auto px-4 w-full container pt-8 sm:pt-14'>
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
                            <div className='col-span-2 sm: col-span-1 bg-red-300'><div>
                            </div>
                            <span className='font-medium text-boldblack tracking-widest inline-block mb-5 text-sm'>{professionalNetworksConstant}</span>
                            </div>
                            <div className='col-span-2 sm: col-span-1 bg-red-400'><div>
                            </div>
                            <span className='font-medium text-boldblack tracking-widest inline-block mb-5 text-sm'>{socialMediasConstant}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-3 bg-red-400 lg:col-span-1'>
                    <div>
                        <div className='p-4 gradient-background'>
                            <img className="w-full" src="http://imgfz.com/i/uDa6PNe.jpeg" alt="Personal Portfolio Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
