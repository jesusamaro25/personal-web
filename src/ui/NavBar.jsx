import React, { useEffect } from 'react';
import { contactConstant, featuresConstant, homeConstant, myNameConstant, portfolioConstant, resumeConstant } from '../words.constants';

export const NavBar = () => {

    useEffect(() => {

        //Active Class

        let sections = document.querySelectorAll('section');
        let navLinks = document.querySelectorAll('nav .container ul li a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            })
            navLinks.forEach(anchor => {
                anchor.classList.remove('active');
                if (anchor.classList.contains(current)) {
                    anchor.classList.add('active')
                }
            })
        })

        // Sticky Menu Area
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    /* Method that will fix header after a specific scrollable */
    const isSticky = (e) => {
        const header = document.querySelector('.header-section');
        const image = document.querySelector('.image-header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        scrollTop >= 250 ? image.classList.add('apply-margin') : image.classList.remove('apply-margin');
    };


    return (
        <header id="homesection">
            <nav className="header-section main-background border-gray-200 px-2 sm:px-4 py-7 rounded dark:bg-gray-800 flex h-fit">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#homesection" className="flex">
                        <img className="image-header w-full h-20 rounded-full mr-3" src="http://imgfz.com/i/uDa6PNe.jpeg" alt="user photo" />
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">{myNameConstant}</span>
                    </a>
                    <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                            <li>
                                <a href="#coversection" className="coversection font-semibold block py-2 pr-4 pl-3 text-terciary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-terciary dark:hover:text-white md:dark:hover:bg-transparent dark:border-terciary">{homeConstant}</a>
                            </li>
                            <li>
                                <a href="#featuresection" className="featuresection font-semibold block py-2 pr-4 pl-3 text-terciary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-terciary dark:hover:text-white md:dark:hover:bg-transparent dark:border-terciary">{featuresConstant}</a>
                            </li>
                            <li>
                                <a href="#portfoliosection" className="portfoliosection font-semibold block py-2 pr-4 pl-3 text-terciary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-terciary dark:hover:text-white md:dark:hover:bg-transparent dark:border-terciary">{portfolioConstant}</a>
                            </li>
                            <li>
                                <a href="#resumesection" className="resumesection font-semibold block py-2 pr-4 pl-3 text-terciary border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-terciary dark:hover:text-white md:dark:hover:bg-transparent dark:border-terciary">{resumeConstant}</a>
                            </li>
                            <li>
                                <a href="#contactsection" className="contactsection cursor-pointer font-semibold block py-2 pr-4 pl-3 text-terciary hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-terciary dark:hover:text-white md:dark:hover:bg-transparent">{contactConstant}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
