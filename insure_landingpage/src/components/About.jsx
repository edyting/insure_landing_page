import React from "react";

const About = () => {
  const data = [
    {
      icon: "/assets/images/icon-snappy-process.svg",
      title: "Snappy Process",
      description:
        "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.",
    },
    {
      icon: "/assets/images/icon-affordable-prices.svg",
      title: "Affordable Prices",
      description:
        "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
    },
    {
      icon: "/assets/images/icon-people-first.svg",
      title: "People First",
      description:
        "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need us.",
    },
  ];

  return (
    <div className="px-6 sm:px-12 lg:px-24 py-12">
      {/* top */}
      <div>
        <div className="h-0.5 w-24 sm:w-36 bg-gray-400"></div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pt-6 text-gray-950">
          We're different
        </h2>
      </div>

      {/* next */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-6 pt-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 text-center sm:text-left items-center sm:items-start max-w-sm mx-auto sm:mx-0"
          >
            <div className="w-12">
              <img src={item.icon} alt={item.title} className="w-full h-auto" />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-950">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
