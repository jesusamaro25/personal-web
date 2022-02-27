import React, { useEffect } from 'react'
import * as eva from 'eva-icons';
import { backConstant, backDetailConstant, featureTitleConstant, frontConstant, frontDetailConstant, mobileConstant, mobileDetailConstant, whatIDoConstant } from '../words.constants'

export const Feature = () => {

    useEffect(() => {
        eva.replace();
    }, []);

    return (
        <section className='pt-24' id="featuresection">
            <hr className='border-lightbackgroundgray mx-auto w-9/12' />
            <div className='pt-24 w-full px-4 container mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 w-full px-3.5'>
                        <div>
                            <span className='text-terciary tracking-iswidermedium leading-3 font-medium text-xl'>{featureTitleConstant}</span>
                            <h2 className='mt-4 text-6xl font-bold'>{whatIDoConstant}</h2>
                        </div>
                    </div>
                </div>
                <div className='grid gap-x-6 grid-cols-3'>
                    <div className='col-span-3 mt-12 xl:col-span-1'>
                        <div className='cards-feature h-full rounded-lg padding-features'>
                            <div>
                                <div className='mb-7'>
                                    <i className='fill-secondary w-7 h-auto'
                                        data-eva="globe-outline"
                                        data-eva-animation="pulse"
                                        data-eva-hover="true"
                                        data-eva-infinite="false"
                                    />
                                </div>
                                <div>
                                    <h4 className='mb-5 text-2xl font-medium text-boldblack'>{frontConstant}</h4>
                                    <p className='text-terciary mb-5 text-base'>{frontDetailConstant}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 mt-12 xl:col-span-1'>
                        <div className='cards-feature h-full rounded-lg padding-features'>
                            <div>
                                <div className='mb-7'>
                                    <i className='fill-secondary w-7 h-auto'
                                        data-eva="code-outline"
                                        data-eva-animation="pulse"
                                        data-eva-hover="true"
                                        data-eva-infinite="false"
                                    />
                                </div>
                                <div>
                                    <h4 className='mb-5 text-2xl font-medium text-boldblack'>{backConstant}</h4>
                                    <p className='text-terciary mb-5 text-base'>{backDetailConstant}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-3 mt-12 xl:col-span-1'>
                        <div className='cards-feature h-full rounded-lg padding-features'>
                            <div>
                                <div className='mb-7'>
                                    <i className='fill-secondary w-7 h-auto'
                                        data-eva="smartphone-outline"
                                        data-eva-animation="pulse"
                                        data-eva-hover="true"
                                        data-eva-infinite="false"
                                    />
                                </div>
                                <div>
                                    <h4 className='mb-5 text-2xl font-medium text-boldblack'>{mobileConstant}</h4>
                                    <p className='text-terciary mb-5 text-base'>{mobileDetailConstant}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


// pt-24 w-full px-3.5 mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl