import React from 'react'
import { aprilaugustConstant, binauralDescriptionConstant, binauralTitleConstant, ccoDescriptionConstant, ccoTitleConstant, drDescriptionConstant, drTitleConstant, innpactiaDescriptionConstant, innpactiaTitleConstant, julyConstant, marnaDescriptionConstant, marnaTitleConstant, octoberConstant, septemberaugustConstant, twothousandandeighteenConstant, twothousandandnineteenConstant, uclaDescriptionConstant, uclaTitleConstant } from '../words.constants'

export const Experience = () => {
  return (



    <ol className="relative border-l border-gray-400 dark:border-gray-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{twothousandandeighteenConstant}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{marnaTitleConstant}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{marnaDescriptionConstant}</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{twothousandandnineteenConstant}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{uclaTitleConstant}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{uclaDescriptionConstant}</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{aprilaugustConstant}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{binauralTitleConstant}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{binauralDescriptionConstant}</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{septemberaugustConstant}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{ccoTitleConstant}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{ccoDescriptionConstant}</p>
      </li>
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{octoberConstant}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{drTitleConstant}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{drDescriptionConstant}</p>
      </li>
      <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-400 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{julyConstant}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{innpactiaTitleConstant}</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">{innpactiaDescriptionConstant}</p>
      </li>
    </ol>



  )
}
