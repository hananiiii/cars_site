import React from 'react'
import './hero.css'
import Car_1 from '../assets/car1.png'
import Car_2 from '../assets/car2.png'
import Car_3 from '../assets/car3.png'
import Car_4 from '../assets/car4.png'
import Car from '../assets/car.png'
const hero = () => {
  return (
    <section className='home section text-text' id="home">
       <div className='home__container  lg:pt-[3rem] sm:pt-[3rem] pt-[4rem]  container grid'>
        <div className='home_data text-center sm:ml-16 lg:ml-0'>
            <h1 className='home_text font-bold text-4xl  mb-[1rem] text-text'>
              Find Your Ride

            </h1>
            <h2 className="home_substitle font-semibold text-xl mb-[.25rem] ">
              Chevrolet Corvette
            </h2>
            <h3 className='home_elec font-normal  text-lg text-title inline-flex items-center gap-[.25rem]'>
                <i class="ri-flashlight-line text-primary"></i>Sports Car
            </h3>
        </div>
        <img src={Car} alt='' className='home_img w-[600px] mt-8 lg:mt-0 sm:mt-0 flex justify-center items-center  lg:mx-auto my-auto sm:mx-14 '/>
        <div className='home_car mt-8 lg:mt-0 sm:mt-0 flex justify-center items-center lg:gap-32 sm:gap-32 gap-16  my-auto lg:mx-auto sm:ml-12 '>
             <div className='home__car-data '>
                <div className='home__car-icon flex flex-row gap-2 justify-center items-center mb-2'>
                <i class="ri-temp-cold-line text-primary"></i>
                <h2 className='home__car-number text-title'>
                        27°
                  </h2>
                </div>
                 
                  <h3 className='home__car-name font-normal text-lg text-title'>
                    TEMPERATEUR
                  </h3>

             </div>
             <div className='home__car-data'>
                <div className='home__car-icon flex flex-row gap-2 justify-center items-center mb-2'>
                <i class="ri-dashboard-3-line text-primary"></i>
                <h2 className='home__car-number text-title'>
                       850
                  </h2>
                </div>
                  
                  <h3 className='home__car-name text-title'>
                    MILEAGE
                  </h3>

             </div>
             <div className='home__car-data'>
                <div className='home__car-icon flex flex-row gap-2 justify-center items-center mb-2'>
                <i class="ri-battery-charge-fill text-primary"></i>
                <h2 className='home__car-number text-title'>
                       94%
                  </h2>
                </div>
                 
                  <h3 className='home__car-name text-title'>
                    BATTERY
                  </h3>

             </div>
        </div>
        <a href="#" className='home__button home__button-next'>Next</a>
       </div>

    </section>
  )
}

export default hero