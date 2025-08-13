import React from "react";

const Footer = () => {
  const data = [
    {
      title: "Our company",
      list: [
        { name: "How we work", link: "#" },
        { name: "Why Insure?", link: "#" },
        { name: "View plans", link: "#" },
        { name: "Reviews", link: "#" },
      ],
    },
    {
      title: "Help me",
      list: [
        { name: "FAQ", link: "#" },
        { name: "Terms of use", link: "#" },
        { name: "Privacy policy", link: "#" },
        { name: "Cookies", link: "#" },
      ],
    },
    {
      title: "Contact",
      list: [
        { name: "Sales", link: "#" },
        { name: "Support", link: "#" },
        { name: "Live chat", link: "#" },
      ],
    },
    {
      title: "Others",
      list: [
        { name: "Careers", link: "#" },
        { name: "Press", link: "#" },
        { name: "Licenses", link: "#" },
      ],
    },
  ];

  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-50 px-6 sm:px-12 md:px-24 pb-4 relative overflow-hidden">
      <img
        src="/assets/images/bg-pattern-footer-desktop.svg"
        className="absolute left-0 top-0 opacity-80 w-[300px] sm:w-[400px] md:w-[450px] pointer-events-none"
        alt=""
      />

      {/* top */}
      <div className="pt-12 flex flex-col md:flex-row items-center md:justify-between border-b border-gray-400 pb-6 gap-6 md:gap-0">
        {/* logo */}
        <div>
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>

        {/* social icons */}
        <div className="flex gap-5">
          <img src="/assets/images/icon-facebook.svg" alt="facebook" />
          <img src="/assets/images/icon-twitter.svg" alt="twitter" />
          <img src="/assets/images/icon-pinterest.svg" alt="pinterest" />
          <img src="/assets/images/icon-instagram.svg" alt="instagram" />
        </div>
      </div>

      {/* bottom links */}
      <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((section, idx) => (
          <div key={idx}>
            <h2 className="text-gray-500 font-semibold">{section.title}</h2>
            <ul className="pt-4">
              {section.list.map((link, i) => (
                <li className="py-2 hover:underline underline-offset-4" key={i}>
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* copyright */}
      <div className="flex items-center justify-center">
        <p className="py-4 text-gray-400">
          © {year} Insure. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
