import React from 'react'
import { footerDetailConstant, myNameConstant } from '../words.constants'

export const Footer = () => {
  return (
    <div className='pt-24 pb-24'>
    <hr className='border-lightbackgroundgray mx-auto w-9/12' />
    <div className='pt-24 w-full px-4 container mx-auto'>
        <div className='grid grid-cols-12'>
            <div className='col-span-12 w-full'>
                <div className='text-center-webkit'>
                    <div className='w-32'>
                    <a href="#coversection" className="flex flex-col">
                    <img className="w-full rounded-full" src="http://imgfz.com/i/uDa6PNe.jpeg" alt="user" />
                    <span className="pt-4 self-center text-lg font-semibold whitespace-nowrap dark:text-white">{myNameConstant}</span>
                </a>
                    </div>
                    <p className='mt-7 text-base text-terciary'>{footerDetailConstant}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
  )
}
