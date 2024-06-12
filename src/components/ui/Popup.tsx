"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePopupClose = () => {
    setShowPopup(false);
    localStorage.setItem('hasVisited', 'true');
  };

  useEffect(() => {
    const handleUserActivity = () => {
      clearTimeout(activityTimeout);
      activityTimeout = setTimeout(() => {
        setShowPopup(true);
      }, 2 * 60 * 1000); // 2 minutos en milisegundos
    };

    let activityTimeout = setTimeout(() => {
      setShowPopup(true);
    }, 2 * 60 * 1000); // 2 minutos en milisegundos

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);
    window.addEventListener('mousedown', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);

    const hasVisited = localStorage.getItem('hasVisited');
    const sessionFlag = sessionStorage.getItem('sessionActive');

    if (!hasVisited && !sessionFlag) {
      setShowPopup(true);
    }

    sessionStorage.setItem('sessionActive', 'true');

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      window.removeEventListener('mousedown', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      clearTimeout(activityTimeout);
    };
  }, []);
  return <>
  {
    showPopup && <div className="z-50 fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-start pt-[10vh] md:pt-8">
      <div className="w-[98%] md:w-[640px] h-[412px] md:h-[640px] bg-white relative">
        <Image className='absolute hidden md:block' src={'/images/popup-desktop.jpg'} width={640} height={640} alt='Fondo popup'/>
        <Image className='absolute md:hidden' src={'/images/popup-mobile.jpg'} width={640} height={640} alt='Fondo popup'/>
        <span className="absolute right-4 top-2 text-5xl cursor-pointer z-50" onClick={handlePopupClose}>&times;</span>
        <span className='absolute p-14 md:p-20 z-40 text-midnight-green'>
          <span className='text-3xl md:text-6xl font-semibold text-left'>¡Clinicannabis </span><br />
          <p className='flex'>
            <span className='text-xl md:text-3xl '>es ahora </span> 
            <span className='text-4xl md:text-7xl ml-2 text-caribbean-green'> CliniVital!</span>
          </p>
          <p className='text-xl md:text-3xl text-center py-14'>
            Estamos creciendo y crecer 
            <strong> implica cambios.</strong>
          </p>
          <p className='text-2xl md:text-5xl text-white text-center'>¿Estás listo para
          <strong> conocerlos?</strong></p>
          <section className="w-full flex justify-center mt-10">
          <Link href={'/blog/clinicannabis-es-ahora-cliniVital'} className='px-12 py-2 border-2 rounded-3xl text-white text-2xl border-white mx-auto'>Ver más</Link>
          </section>
        </span>
      </div>
    </div>
  }
  
  </>;
}

export default Popup;