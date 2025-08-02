import React from 'react'

const Footer = () => {
    const data = [
        {
            title: "Our company",
            list: [
                {
                    name: "How we work",
                    link: "#"
                },
                {
                    name: "Why Insure?",
                    link: "#"
                },
                {
                    name: "View plans",
                    link: "#"
                },
                {
                    name: "Reviews",
                    link: "#"
                }
            ]
        },
        {
            title: "Help me",
            list: [
                {
                    name: "FAQ",
                    link: "#"
                },
                {
                    name: "Terms of use",
                    link: "#"
                },
                {
                    name: "Privacy policy",
                    link: "#"
                },
                {
                    name: "Cookies",
                    link: "#"
                }
            ]
        },
        {
            title: "Contact",
            list: [
                {
                    name: "Sales",
                    link: "#"
                },
                {
                    name: "Support",
                    link: "#"
                },
                {
                    name: "Live chat",
                    link: "#"
                }
            ]
        },
        {
            title: "Others",
            list: [
                {
                    name: "Careers",
                    link: "#"
                },
                {
                    name: "Press",
                    link: "#"
                },
                {
                    name: "Licenses",
                    link: "#"
                }
            ]
        }
    ]

    const date = new Date()
    const year = date.getFullYear()

  return (
      <div className='bg-gray-50 px-24 pb-4 relative'>
          <img src="/assets/images/bg-pattern-footer-desktop.svg" className='w-[450px] absolute left-0 opacity-80' alt="" />
          {/* top */}
          <div className="pt-12 flex justify-between border-b border-gray-400 pb-4">
              {/* left */}
              <div className="">
                  <img src="/assets/images/logo.svg" alt="" />
              </div>
              {/* right */}
              <div className="flex gap-5">
                  <img src="/assets/images/icon-facebook.svg" alt="" />
                  <img src="/assets/images/icon-twitter.svg" alt="" />
                  <img src="/assets/images/icon-pinterest.svg" alt="" />
                  <img src="/assets/images/icon-instagram.svg" alt="" />
              </div>
          </div>
          {/* bottom */}
          <div className="">
              <div className="flex justify-between">
                  {data.map((item, index) => (
                      <div className="pt-8" key={index}>
                          <h2 className='text-gray-500 font-semibold'>{item.title}</h2>
                          <ul className='pt-4'>
                              {item.list.map((item, index) => (
                                  <li className='py-2 hover:underline underline-offset-4' key={index}>
                                      <a href={item.link}>{item.name}</a>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
          {/* copyright and date */}
          <div className=" flex items-center justify-center ">
              <p className='py-4 text-gray-400'>© {year} Insure. All rights reserved</p>
          </div>
    </div>
  )
}

export default Footer
