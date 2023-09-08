import React from 'react'
import Cards from './cads'
const incards = () => {
  return (
    <div className='w-full py-24 text-text flex flex-col items-center mx-auto  justify-center'>
    <h1 className=' home_text font-bold lg:text-4xl sm:text-4xl text-3xl mb-[1rem] text-text'>
        New Rides
    </h1>
        <Cards/>
    </div>
  )
}

export default incards