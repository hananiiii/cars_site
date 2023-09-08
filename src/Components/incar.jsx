import React from 'react'
import Car from './car'
const incar = () => {
  return (
    <div className='w-full  text-text flex flex-col '>
           <h1 className='py-8 home_text font-bold lg:text-4xl sm:text-4xl text-3xl mb-[1rem] text-text items-center mx-auto  justify-center'>
                Lastest Cars
            </h1>
           <Car/>
    </div>
  )
}

export default incar