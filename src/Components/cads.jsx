import React from 'react';
import Car1 from '../assets/zachary-edmundson-YoBx_5o1PbM-unsplash.jpg';
import Car2 from '../assets/hakon-sataoen-qyfco1nfMtg-unsplash.jpg';
import Car3 from '../assets/brandon-atchison-_DzW3MT-iIY-unsplash.jpg';
import Car4 from '../assets/kahl-orr-ZdLFPE0AZBU-unsplash.jpg';
import Car5 from '../assets/philippe-oursel-j0x9zbpkTMc-unsplash.jpg';
import Car6 from '../assets/travis-essinger-3V0FGLkueyA-unsplash.jpg';

const Cards = () => {
  return (
    <div className=' px-8  py-8 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full h-full rounded-md gap-12'>
      {/* Card 1 */}
      <div className='cursor-pointer w-full h-[250px] rounded-md border border-title overflow-hidden'>
        <div className='w-full h-full rounded-md relative overflow-hidden'>
          <img src={Car1} className='w-full h-full rounded-md  transition-transform transform scale-100 hover:scale-105' alt="Car 1" />
          <button className='bg-secondary border-md text-text absolute bottom-4 left-4 px-4 py-2 rounded-md hover:bg-secondary hover:bg-secondary-dark hover:scale-105'>
            Learn more
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className='cursor-pointer w-full h-[250px] rounded-md border border-title overflow-hidden'>
        <div className='w-full h-full rounded-md relative overflow-hidden'>
          <img src={Car2} className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105' alt="Car 2" />
          <button className='bg-secondary border-md text-text absolute bottom-4 left-4 px-4 py-2 rounded-md hover:bg-secondary-dark hover:bg-secondary hover:bg-secondary-dark hover:scale-105'>
            Learn more
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className='cursor-pointer w-full h-[250px] rounded-md border border-title overflow-hidden'>
        <div className='w-full h-full rounded-md relative overflow-hidden'>
          <img src={Car3} className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105' alt="Car 2" />
          <button className='bg-secondary border-md text-text absolute bottom-4 left-4 px-4 py-2 rounded-md hover:bg-secondary-dark hover:bg-secondary hover:bg-secondary-dark hover:scale-105'>
            Learn more
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className=' cursor-pointer w-full h-[250px] rounded-md border border-title overflow-hidden'>
        <div className='w-full h-full rounded-md relative overflow-hidden'>
          <img src={Car4} className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105' alt="Car 2" />
          <button className='bg-secondary border-md text-text absolute bottom-4 left-4 px-4 py-2 rounded-md hover:bg-secondary-dark hover:bg-secondary hover:bg-secondary-dark hover:scale-105'>
            Learn more
          </button>
        </div>
      </div>

      {/* Card 5 */}
      <div className='cursor-pointer w-full h-[250px] rounded-md border border-title overflow-hidden'>
        <div className='w-full h-full rounded-md relative overflow-hidden'>
          <img src={Car5} className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105' alt="Car 2" />
          <button className='bg-secondary border-md text-text absolute bottom-4 left-4 px-4 py-2 rounded-md hover:bg-secondary-dark hover:bg-secondary hover:bg-secondary-dark hover:scale-105'>
            Learn more
          </button>
        </div>
      </div>

      {/* Card 6 */}
      <div className='cursor-pointer w-full h-[250px] rounded-md border border-title overflow-hidden'>
        <div className='w-full h-full rounded-md relative overflow-hidden'>
          <img src={Car6} className='w-full h-full rounded-md transition-transform transform scale-100 hover:scale-105' alt="Car 2" />
          <button className='bg-secondary border-md text-text absolute bottom-4 left-4 px-4 py-2 rounded-md hover:bg-secondary-dark hover:bg-secondary hover:bg-secondary-dark hover:scale-105'>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
