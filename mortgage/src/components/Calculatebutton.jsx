import React from 'react'
import image1 from '../assets/icon-calculator.svg'

const Calculatebutton = () => {
  return (
    <div className="mt-5 bg-lime py-3 px-4 w-[80%] rounded-full">
      <button className="flex items-center gap-1 text-semibold">
        <div className="flex items-center">
          <img src={image1} alt="" className="w-4/5" />
        </div>
        <div className="font-semibold text-sm">Calculate Repayments</div>
      </button>
    </div>
  );
}

export default Calculatebutton
