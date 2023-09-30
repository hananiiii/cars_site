import React from 'react'
import Merc from '../assets/merc.png'
import './car.css'
const car = () => {
  return (
    <section className=' car-section'>
          <div className="container flex flex-wrap  items-center justify-center mx-auto md:px-32 md:flex-row">
           <div className=" lg:mb-0 lg:w-1/2 ">
              <h1 className='max-w-xl text-[2.7rem] leading-16  font-black font-sans text-center text-title text-3xl lg:text-left sm:leading-tight mb-5'>Mercedes-Benz sports car</h1>
              <div>
                <p className='max-w-xl  text-center text-title lg:text-left md:max-w-md  lg:text-lg md:text-md text-md '>
                The latest Mercedes-Benz sport car, a true embodiment of luxury and performance, represents the pinnacle of automotive engineering. With its sleek, aerodynamic design and powerful engine, this vehicle redefines the driving experience. Its state-of-the-art technology seamlessly integrates with the driver's needs
                </p>
              </div>
           </div>
           <div className="lg:w-1/2">
                  <img className="lg:ml-[50px] ml-auto mx-auto " src={Merc} alt=""/>
               </div>
           </div>
    </section>
  )
}

export default car