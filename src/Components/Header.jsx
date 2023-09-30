import React from 'react'
import Nav from './nav'
import Logo from './Logo'


const Header = () => {
  return (
    <div className='w-screen px-12 py-4 flex justify-between items-center text-center  border-b-2 border-[#C0C0C0] border-opacity-30 shadow-sm  '>
         <Logo/>
         <Nav/>
       
    </div>
  )
}

export default Header