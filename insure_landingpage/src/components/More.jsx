import React from 'react'

const More = () => {
  return (
    <div className="px-24 py-16">
      <div className="bg-blue-950 h-[30vh]  w-full flex justify-between px-16  relative overflow-hidden -z-10">
        <img src="/assets/images/bg-pattern-how-we-work-desktop.svg" className='absolute right-0 opacity-50  w-[100px' alt="" />
        {/* left */}
        <div className="flex items-center">
          <div className="text-4xl font-semibold text-gray-50">
            <h2>Find out more</h2>
            <h2> about how we work</h2> 
          </div>
        </div>
        {/* right */}
        <div className="flex items-center">
          <button className="outline-2 hover:bg-gray-950 hover:text-gray-50 outline-white px-5 text-white py-2">
            View plans
          </button>
        </div>
      </div>
    </div>
  );
}

export default More
