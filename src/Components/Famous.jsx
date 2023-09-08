import React, { useState } from 'react';
import Logs from './logs';
import Percentage from './percentage';

const Famous = () => {
    const [selectedLogo, setSelectedLogo] = useState(null);

    return (
        <div className='w-full py-32 text-text flex flex-col items-center mx-auto  justify-center'>
            <h1 className=' home_text font-bold lg:text-4xl sm:text-4xl text-3xl mb-[1rem] text-text'>
                Famous & high rated cars
            </h1>
            <Logs setSelectedLogo={setSelectedLogo} />
            {selectedLogo !== null && <Percentage selectedLogo={selectedLogo} />}
        </div>
    );
}

export default Famous;
