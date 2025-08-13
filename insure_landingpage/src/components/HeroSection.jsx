import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Decorative images */}
      <img
        src="/assets/images/bg-pattern-intro-right-desktop.svg"
        alt=""
        className="hidden md:block w-[350px] absolute right-0 top-0"
      />
      <img
        src="/assets/images/bg-pattern-intro-left-desktop.svg"
        alt=""
        className="hidden md:block w-[120px] absolute left-0 bottom-0"
      />

      {/* Main content */}
      <div className="bg-blue-950 pt-16 md:pt-20 min-h-[90vh] flex flex-col md:flex-row gap-10 md:gap-5 justify-between w-full px-6 sm:px-10 md:px-24">
        {/* Left */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Line */}
          <div className="hidden md:block h-0.5 w-40 bg-white"></div>

          {/* Title */}
          <div className="text-4xl sm:text-5xl md:text-6xl text-white font-semibold pt-6 md:pt-12">
            <h2>Humanizing</h2>
            <h2>your insurance.</h2>
          </div>

          {/* Paragraph */}
          <p className="text-white pt-6 md:pt-12 text-base sm:text-lg leading-relaxed">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start items-center gap-5 pt-6 md:pt-12">
            <button className="outline outline-2 hover:bg-gray-950 hover:text-gray-50 outline-white px-5 py-2 text-white">
              View plans
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="md:w-2/5 flex justify-center md:justify-end">
          <img
            src="/assets/images/image-intro-desktop.jpg"
            alt=""
            className="w-full max-w-sm md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
