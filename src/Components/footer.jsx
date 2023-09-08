import React from 'react';
import LOgo from '../Components/Logo'
const Footer = () => {
  return (
    <footer className="bg-secondary w-screen h-auto text-title mt-32 items-center">
      <div className="container mx-auto px-8 pt-4 flex flex-col lg:flex-row lg:gap-0 gap-8 justify-center  md:justify-between ">
       <span >
          <LOgo/>
       </span>
       <div className=" text-center ">
        <p>&copy; 2023 Your Car Website. All Rights Reserved.</p>
      </div>
      <span className='text-title flex flex-row gap-4  text-xl lg:pr-8'>
             <ion-icon name="logo-facebook"></ion-icon>
             <ion-icon name="logo-instagram"></ion-icon>
             <ion-icon name="logo-twitter"></ion-icon>

      </span>
        
      </div>
      
    </footer>
  );
};

export default Footer;
