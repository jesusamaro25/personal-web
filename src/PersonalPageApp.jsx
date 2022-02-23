import React from 'react';
import { Contact } from './ui/Contact';
import { Cover } from './ui/Cover';
import { Feature } from './ui/Feature';
import { Footer } from './ui/Footer';
import { NavBar } from './ui/NavBar';
import { Portfolio } from './ui/Portfolio';
import { Resume } from './ui/Resume';

export const PersonalPageApp = () => {
  return (
    <div className='main-background principal-height'>
      <NavBar />
      <Cover />
      <Feature />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}
