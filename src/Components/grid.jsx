import React, { useState } from 'react';
import Carr1 from '../assets/carr1.jpeg';
import Carr1Alt from '../assets/carr2.jpeg'; 
import Carr2 from '../assets/aaron-huber-8qYE6LGHW-c-unsplash.jpg';
import Carr2Alt from '../assets/meik-schneider-e9zSM8orIfA-unsplash.jpg'; 
import Carr3 from '../assets/jannis-lucas-5B0EXiwdJrg-unsplash.jpg';
import Carr3Alt from '../assets/jack-lucas-smith-crhK6sKfaAY-unsplash.jpg'; 

const Grid = () => {
  const [hoveredGrid, setHoveredGrid] = useState(null);

  const handleMouseEnter = (gridNumber) => {
    setHoveredGrid(gridNumber);
  }

  const handleMouseLeave = () => {
    setHoveredGrid(null);
  }

  const getCarImage = (gridNumber) => {
    switch (gridNumber) {
      case 1:
        return hoveredGrid === 1 ? Carr1Alt : Carr1;
      case 2:
        return hoveredGrid === 2 ? Carr2Alt : Carr2;
      case 3:
        return hoveredGrid === 3 ? Carr3Alt : Carr3;
      default:
        return null;
    }
  }

  return (
    <section className='px-24  py-8 text-title grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 mt-44'>
      {/* Grid 1 */}
      <div
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        className='cursor-pointer w-auto lg:h-[450px] rounded-md border border-title overflow-hidden'
      >
        <div className='w-full h-[225px] rounded-md relative overflow-hidden'>
          <img
            src={getCarImage(1)}
            className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105 hover:duration-300'
            alt="Car 1"
          />
        </div>
        <div className='px-4 py-6'>
          <h2 className='text-xl font-bold mt-4'>Car Model 1</h2>
          <ul className='list-disc pl-6 mt-2 '>
            <li className='mb-2'>Engine: V8, 500hp</li>
            <li className='mb-2'>0-60 mph: 4.5 seconds</li>
            <li className='mb-2'>Fuel Efficiency: 20 mpg</li>
            <li className='mb-2'>Features: Leather seats, sunroof, GPS</li>
          </ul>
        </div>
      </div>
      <div
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        className='cursor-pointer w-auto lg:h-[450px] rounded-md border border-title overflow-hidden'
      >
        <div className='w-full h-[225px] rounded-md relative overflow-hidden'>
          <img
            src={getCarImage(2)}
            className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105 hover:duration-300'
            alt="Car 1"
          />
        </div>
        <div className='px-4 py-6'>
          <h2 className='text-xl font-bold mt-4'>Car Model 1</h2>
          <ul className='list-disc pl-6 mt-2 '>
            <li className='mb-2'>Engine: V8, 500hp</li>
            <li className='mb-2'>0-60 mph: 4.5 seconds</li>
            <li className='mb-2'>Fuel Efficiency: 20 mpg</li>
            <li className='mb-2'>Features: Leather seats, sunroof, GPS</li>
          </ul>
        </div>
      </div>
      <div
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        className='cursor-pointer w-auto lg:h-[450px] rounded-md border border-title overflow-hidden'
      >
        <div className='w-full h-[225px] rounded-md relative overflow-hidden'>
          <img
            src={getCarImage(3)}
            className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105 hover:duration-300'
            alt="Car 1"
          />
        </div>
        <div className='px-4 py-6'>
          <h2 className='text-xl font-bold mt-4'>Car Model 1</h2>
          <ul className='list-disc pl-6 mt-2 '>
            <li className='mb-2'>Engine: V8, 500hp</li>
            <li className='mb-2'>0-60 mph: 4.5 seconds</li>
            <li className='mb-2'>Fuel Efficiency: 20 mpg</li>
            <li className='mb-2'>Features: Leather seats, sunroof, GPS</li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Grid;
