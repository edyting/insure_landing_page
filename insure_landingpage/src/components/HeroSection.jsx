import React from 'react'

const HeroSection = () => {
  return (
    <div className="h-[120vh] relative ">

        <img 
          src="/assets/images/bg-pattern-intro-right-desktop.svg"
          alt=""
          className="w-[350px] absolute right-0 -top-0 "
        />
      
          <img src="/assets/images/bg-pattern-intro-left-desktop.svg" alt="" className='w-[120px] absolute left-0 bottom-0' />
          
      <div className="bg-blue-950  pt-20 h-[90vh] flex gap-5 justify-between w-full px-24">
        {/* left */}
        <div className="w-2/4">
          {/* line */}
          <div className="h-0.5 w-40 bg-white"></div>
          {/* title */}
          <div className="text-6xl text-white semi-bold pt-12">
            <h2>Humanizing </h2>
            <h2>your insurance.</h2>
          </div>
          <p className="text-white pt-12">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>

          {/* btn */}
          <div className="flex items-center gap-5 pt-12">
            <button className="outline-2 hover:bg-gray-950 hover:text-gray-50 outline-white px-5 text-white py-2">
              View plans
            </button>
          </div>
        </div>
        {/* right */}
        <div className="w-2/5">
          <div className="pl-4">
            <img src="/assets/images/image-intro-desktop.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
