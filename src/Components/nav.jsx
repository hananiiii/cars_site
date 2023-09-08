import React from 'react'
import './nav.css'
const nav = () => {
  return (
    <div className='navbar text-[#C0C0C0]  lg:block sm:block hidden '>
      <ul className='text-with-gradual-underline font-medium text-center text-lg flex flex-row gap-12 '>
        <a className='text-with-gradual-underline cursor-pointer hover:text-primary hover:-translate-y-1 duration-300 transform  shadow-sm  ' href='#Home'>Home</a>
        <a className=' text-with-gradual-underline cursor-pointer hover:text-primary hover:-translate-y-1 duration-300 transform  shadow-sm ' href='#New'>New</a>
        <a className='text-with-gradual-underline cursor-pointer hover:text-primary hover:-translate-y-1 duration-300 transform  shadow-sm ' href='#Features'>Features</a>
        <a className='text-with-gradual-underline cursor-pointer hover:text-primary hover:-translate-y-1 duration-300 transform  shadow-sm ' href='#About'>About</a>
      </ul>
    </div>
  )
}

export default nav