import React, { useEffect, useState } from 'react';
import './logos.css';
import Cr1 from '../assets/téléchargement__1_-removebg-preview.png';
import Cr2 from '../assets/téléchargement__2_-removebg-preview.png';
import Cr3 from '../assets/téléchargement__3_-removebg-preview.png';
import Cr4 from '../assets/24322-9-mercedes-benz-logo-file-removebg-preview.png';

const types = [
    {
        log: Cr1,
        text: "PORSH",
    },
    {
        log: Cr2,
        text: "AUDDI",
    },
    {
        log: Cr3,
        text: "SHEVROLET",
    },
    {
        log: Cr4,
        text: "MERCEDES",
    },
];

const Logos = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const logosContainer = document.querySelector('.logos-container');
            if (!logosContainer) return;

            const logosPosition = logosContainer.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

          
            if (logosPosition.top + 100 < windowHeight) {
                setIsVisible(true);
            }
        };

      
        window.addEventListener('scroll', handleScroll);
       
        handleScroll();

        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='flex items-center justify-center mt-6 container mx-auto'>
            <div className={`logos-container grid grid-cols-2 lg:gap-12 sm:gap-12 gap-8 ${isVisible ? 'animated-logo' : ''}`}>
                {types.map((item, index) => (
                    <div key={index} className='rounded-md shadow-lg bg-title transform hover:scale-105 transition-transform duration-300'>
                        <div className='h-full w-full px-5 py-1 flex flex-col'>
                            <div className='  overflow-hidden mb-2 '>
                                <img
                                    src={item.log}
                                    alt={item.text}
                                    className='animated-logo-element'
                                />
                            </div>
                            <h5 className='sm:text-2xl text-xl lg::text-3xl font-medium mb-3 text-body_color flex justify-center'>
                                {item.text}
                            </h5>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Logos;
