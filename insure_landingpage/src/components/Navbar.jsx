import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative px-6 md:px-24 flex items-center justify-between font-semibold uppercase py-6 bg-white shadow-sm z-50">
      {/* Logo */}
      <div>
        <img src="/assets/images/logo.svg" alt="logo" className="h-6 md:h-8" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-5 text-gray-700">
        <li className="hover:text-gray-950">
          <a href="#about">How we work</a>
        </li>
        <li className="hover:text-gray-950">
          <a href="#blog">Blog</a>
        </li>
        <li className="hover:text-gray-950">
          <a href="#account">Account</a>
        </li>
        <li className="outline outline-2 outline-gray-950 px-5 py-2 text-gray-950 hover:bg-gray-950 hover:text-white transition-colors">
          <a href="#plans">View plans</a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1 z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-[2px] bg-gray-800"></span>
        <span className="block w-6 h-[2px] bg-gray-800"></span>
        <span className="block w-6 h-[2px] bg-gray-800"></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-5 py-6 text-gray-700">
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                How we work
              </a>
            </li>
            <li>
              <a href="#blog" onClick={() => setMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="#account" onClick={() => setMenuOpen(false)}>
                Account
              </a>
            </li>
            <li className=" outline-2 outline-gray-950 px-5 py-2 text-gray-950 hover:bg-gray-950 hover:text-white transition-colors">
              <a href="#plans" onClick={() => setMenuOpen(false)}>
                View plans
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
