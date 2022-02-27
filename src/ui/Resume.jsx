import React from 'react'
import { resumeConstant, yearsExperienceConstnat } from '../words.constants'

export const Resume = () => {
    return (
        <section className='pt-24' id="resumesection">
            <hr className='border-lightbackgroundgray mx-auto w-9/12' />
            <div className='pt-24 w-full px-4 container mx-auto'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 w-full'>
                        <div className='text-center'>
                            <span className='text-secondary tracking-iswidermedium leading-3 font-medium text-xl'>{yearsExperienceConstnat}</span>
                            <h2 className='mt-4 text-6xl font-bold'>{resumeConstant}</h2>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-12 pt-16'>
                    <div className='col-span-12 w-full'>
                        <ul id='myTabs' role='tablist' className='rounded-lg grid gap-x-6 gap-y-6 grid-cols-3'>
                            <li className='resume-tabs col-span-3 text-center borders-li text-tabcolor text-lg lg:col-span-1'>
                                <a className='resume-anchors text-boldblack text-lg block font-medium space-tabs cursor-pointer' id="skill-tab" data-toggle="tab" role="tab" aria-controls="skill" aria-selected="true">Professional Skills</a>
                            </li>
                            <li className='resume-tabs col-span-3 text-center borders-li text-tabcolor text-lg lg:col-span-1'>
                                <a className='resume-anchors text-boldblack text-lg block font-medium space-tabs cursor-pointer' id="experience-tab" data-toggle="tab" role="tab" aria-controls="experience" aria-selected="true">Experience</a>
                            </li>
                            <li className='resume-tabs col-span-3 text-center borders-li text-tabcolor text-lg lg:col-span-1'>
                                <a className='resume-anchors text-boldblack text-lg block font-medium space-tabs cursor-pointer' id="education-tab" data-toggle="tab" role="tab" aria-controls="education" aria-selected="true">Education</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
