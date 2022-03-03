import React, { useEffect, useState } from 'react'
import { Education } from '../resume/Education'
import { Experience } from '../resume/Experience'
import { Skill } from '../resume/Skill'
import { downloadConstant, resumeConstant, yearsExperienceConstnat } from '../words.constants'
export const Resume = () => {

    const [tabState, setTabState] = useState('skill-tab')

    /** 
     * Actice class
     */
    useEffect(() => {
        let navLinks = document.querySelectorAll('#myTabs li a');
        navLinks.forEach(anchor => {
            anchor.classList.remove('active-tabs');
            if (anchor.classList.contains(tabState)) {
                anchor.classList.add('active-tabs')
            }
        })
    }, [tabState])


    /**
     * Cambiar contenido del div
     * @param {*} tab 
     */
    const handleActiveTab = (tab) => {
        setTabState(tab);
    }

    const handleDownload = () => {
        window.open('https://online.flippingbook.com/view/874350975/', '_blank');
    }


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
                                <a className='skill-tab resume-anchors text-boldblack text-lg block font-medium space-tabs cursor-pointer' id="skill-tab" data-toggle="tab" role="tab" aria-controls="skill" aria-selected="true" onClick={() => handleActiveTab('skill-tab')} >Professional Skills</a>
                            </li>
                            <li className='resume-tabs col-span-3 text-center borders-li text-tabcolor text-lg lg:col-span-1'>
                                <a className='experience-tab resume-anchors text-boldblack text-lg block font-medium space-tabs cursor-pointer' id="experience-tab" data-toggle="tab" role="tab" aria-controls="experience" aria-selected="true" onClick={() => handleActiveTab('experience-tab')}>Experience</a>
                            </li>
                            <li className='resume-tabs col-span-3 text-center borders-li text-tabcolor text-lg lg:col-span-1'>
                                <a className='education-tab resume-anchors text-boldblack text-lg block font-medium space-tabs cursor-pointer' id="education-tab" data-toggle="tab" role="tab" aria-controls="education" aria-selected="true" onClick={() => handleActiveTab('education-tab')}>Education</a>
                            </li>
                        </ul>
                        <div className='mt-16'>

                            {
                                (tabState === 'skill-tab') ?
                                    <Skill />
                                    :
                                    (tabState === 'experience-tab') ?
                                        <Experience />
                                        :
                                        (tabState === 'education-tab') && <Education />
                            }
                            <div className='col-span-12 be-center pt-14'>
                                <button className='font-medium text-sm rounded-md w-4/12 button-send h-12 flex items-center justify-center text-secondary' onClick={handleDownload}>
                                    <span className='font-medium text-sm pr-2'>{downloadConstant}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
