import React from "react";

const More = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-8">
      <div className="bg-blue-950 min-h-[20vh] w-full flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-12 relative overflow-hidden text-center md:text-left rounded-lg">
        {/* Background pattern */}
        <img
          src="/assets/images/bg-pattern-how-we-work-desktop.svg"
          className="absolute right-0 top-0 opacity-40 w-[100px] sm:w-[150px] md:w-[180px] pointer-events-none select-none"
          alt=""
        />

        {/* Left section */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-50 leading-snug">
            Find out more <br className="hidden sm:block" /> about how we work
          </h2>
        </div>

        {/* Right section */}
        <button className="border-2 border-white text-white px-5 py-2 font-medium tracking-wide hover:bg-white hover:text-blue-950 transition-colors duration-300">
          View plans
        </button>
      </div>
    </section>
  );
};

export default More;
