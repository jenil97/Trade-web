import Image from "next/image";
import React, { useState } from "react";
import Eth from "../assets/ethereum.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-black">
      <div className="max-w-[1240px] mx-auto px-4 flex md:justify-center justify-between items-center h-full">
        <div>
          <Image alt="logo" src={Eth} className="w-10 md:w-14" />
        </div>
        <div className="hidden md:flex font-Raleway">
          <ul className="flex text-gray-300 items-center font-normal">
            <li className="p-4 hover:text-white hover:cursor-pointer">
              Platform
            </li>
            <li className="p-4 hover:text-white hover:cursor-pointer">
              Developers
            </li>
            <li className="p-4 hover:text-white hover:cursor-pointer">
              Community
            </li>
            <li className="p-4 hover:text-white hover:cursor-pointer">About</li>
          </ul>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "w-full bg-black text-white absolute top-[90px] left-0 flex font-Raleway justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <li className="text-2xl p-4">Platform</li>
            <li className="text-2xl p-4">Developers</li>
            <li className="text-2xl p-4">Community</li>
            <li className="text-2xl p-4">About</li>
            <button className="m-8 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 text-xl rounded-3xl">
              SignUp
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
