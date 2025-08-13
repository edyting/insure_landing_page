import React from 'react'

import Calculatebutton from './Calculatebutton';
import RightsideToggle from './RightsideToggle';

const Calculatorcontainer = () => {
  return (
    // main width changes
    <div className=" w-2/4 h-[70%] flex  bg-white shadow rounded-2xl">
      {/* left */}
      <div className=" w-2/4 p-4 rounded-2xl">
        {/* top */}
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">Mortgage Calculator</h2>
          <a href="#" className="text-gray-500 underline">
            clear all
          </a>
        </div>
        {/* form */}
        <div className="pt-4">
          <form action="">
            {/* top */}
            <div className="">
              <h3 className="text-sm text-gray-500">Mortgage Amount</h3>

              <div className="border border-gray-100 rounded mt-3  flex">
                <div className="bg-slate-200 py-1 px-3 text-gray-600 rounded-l">
                  £
                </div>
                <input
                  type="text"
                  className=" rounded-r outline-none w-full py-1"
                />
              </div>
            </div>
            {/* middle */}
            <div className="flex justify-between items-center gap-5 mt-5">
              {/* left */}
              <div className="text-sm w-2/4 text-gray-500">
                <h2>Mortgage Term</h2>
                <div className="flex mt-2 border border-gray-100 rounded">
                  <div className="">
                    <input
                      type="text"
                      className="outline-none bg-slate-20 w-3/4 py-1"
                    />
                  </div>
                  <div className="bg-slate-200 py-1 px-3 text-gray-500">
                    <h2 className="text-gray-500">years</h2>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="text-sm w-2/4 text-gray-500">
                <h2>Interest Rate</h2>
                <div className="flex mt-2 border border-gray-100 rounded">
                  <div className="">
                    <input
                      type="text"
                      className="outline-none bg-slate-20 w-3/4 py-1"
                    />
                  </div>
                  <div className="bg-slate-200 py-1 px-3 text-gray-500">
                    <h2 className="text-gray-500">%</h2>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom */}
            <div className="mt-4 text-sm ">
              <h2 className="text-gray-500">Mortgage Type</h2>
              <div className="text-gray-900 group peer-checked:bg-lime border-gray-300 px-3 flex gap-1 rounded py-1 border mt-2 text-base ">
                <input
                  type="radio"
                  name="Repayment"
                  id="repay"
                  className="peer"
                />
                <label htmlFor="repay" className=' peer-checked:text-lime'>Repayment</label>
              </div>
              <div className="text-gray-900 border-gray-300 px-3 flex gap-1 rounded py-1 border mt-2 text-base">
                <input type="radio" name="Repayment" id="interest" className='peer' />
                <label htmlFor="interest" className='peer-checked:text-lime'>Interest Only</label>
              </div>
            </div>

            {/* button */}
            <div className="">
              <Calculatebutton />
            </div>
          </form>
        </div>
      </div>
      {/* right */}
      <div className="w-2/4 flex justify-center items-center bg-slate-700 rounded-r-2xl rounded-bl-[15%] p-4">
        <RightsideToggle /> 
      </div>
    </div>
  );
}

export default Calculatorcontainer
