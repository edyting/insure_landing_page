import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="px-24 flex items-center justify-between font-semibold uppercase py-6">
        {/* left */}
        <div className="">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        {/* right */}
        <div className=""> 
          <ul className='flex items-center gap-5 text-gray-700'>
            <li className='hover:text-gray-950'>
              <a href="#about">How we work</a>
            </li>
            <li className='hover:text-gray-950'>
              <a href="#blog">Blog</a>
            </li>
            <li className='hover:text-gray-950'>
              <a href="#account">Account</a>
                      </li>
                      {/* btn */}
            <li className='outline-2 hover:bg-gray-950 hover:text-gray-50 outline-gray-950 px-5 text-gray-950 py-2'>
              <a href="#plans">View plans</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
