import React, { useState } from 'react';
import './logos.css';
import Cr1 from '../assets/tesla.png';
import Cr2 from '../assets/téléchargement__2_-removebg-preview.png';
import Cr3 from '../assets/téléchargement__3_-removebg-preview.png';
import Cr4 from '../assets/24322-9-mercedes-benz-logo-file-removebg-preview.png';
import Cr5 from '../assets/hyun.png';


const types = [
    {
        log: Cr1,
    },
    {
        log: Cr2,
    },
    {
        log: Cr3,
    },
    {
        log: Cr4,
    },
    {
        log: Cr5,
    },
];

const logs = ({ setSelectedLogo }) => {
    const [selectedLogoIndex, setSelectedLogoIndex] = useState(null);

    const handleLogoClick = (index) => {
        setSelectedLogoIndex(index);
        setSelectedLogo(index);
    };

    return (
        <div className='w-full flex flex-row mt-8 gap-8 justify-center lg:ml-32 items-center'>
            {types.map((item, index) => (
                <div
                    key={index}
                    className={`lg:w-full sm:w-full w-full p-2 animated-logo transform hover:scale-150 transition-transform duration-300 ${
                        selectedLogoIndex === index ? 'selected' : ''
                    }`}
                    onClick={() => handleLogoClick(index)}
                >
                    <div className="image-container">
                        <img
                            src={item.log}
                            alt={`Car ${index + 1}`}
                            className='w-[100px] hover:border-b cursor-pointer shadow-md transform hover:scale-105 transition-transform duration-300'
                        />
                        <a href="#" className="text-with-gradual-underline">
                            {item.text}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default logs;
