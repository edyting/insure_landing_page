import React from 'react'

const About = () => {
    const data = [
        {
            icon: "/assets/images/icon-snappy-process.svg",
            title: "Snappy Process",
            description: "Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms."
        },
        {
            icon: "/assets/images/icon-affordable-prices.svg",
            title: "Affordable Prices",
            description: "We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
        },
        {
            icon: "/assets/images/icon-people-first.svg",
            title: "People First",
            description: "Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need us."
        }
    ]
  return (
    <div className='px-24'>
          {/* top */}
          <div className="">
              <div className="h-0.5 w-36 bg-gray-400"></div>
              <div className="text-4xl font-semibold pt-6 text-gray-950">
                  <h2>We're different</h2>
              </div>
          </div>
          {/* next */}
          <div className="flex gap-5 ">
              {
                  data.map((item) => (
                      <div className="flex flex-col  gap-5 pt-12">
                          <div className="w-12 ">
                              <img src={item.icon} alt="" />
                          </div>
                          <div className="text-2xl font-semibold text-gray-950">
                              <h2>{item.title}</h2>
                          </div>
                          <div className="text-gray-700">
                              <p>{item.description}</p>
                          </div>
                      </div>
                  ))
              }
          </div>
    </div>
  )
}

export default About
