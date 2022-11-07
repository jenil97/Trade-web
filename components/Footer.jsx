import Image from "next/image";
import React from "react";
import Logo from "../assets/ethereum.png";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="md:h-[60vh] bg-black text-white text-center py-16">
      <div className="max-w-[1240px] mx-auto px-4 grid grid-cols-2 lg:grid-cols-4">
        <div className="mt-5">
          <Image
            className="md:w-[4rem] md:ml-[2rem] ml-[4rem]"
            src={Logo}
            alt="logo"
          />
          <p className="font-Raleway text-base mt-4 cursor-default">
            A new way to make the Trading easy , reliable and secure .
          </p>
        </div>
        <div className="cursor-default">
          <h3 className="font-medium font-Raleway text-xl border-b-2 border-[#00d8ff] inline-block mt-4 ">
            Products
          </h3>
          <ul className="mt-2 font-Raleway">
            <li className="p-2">App</li>
            <li className="p-2">Analytics</li>
            <li className="p-2">Token List</li>
            <li className="p-2">Team</li>
          </ul>
        </div>
        <div className="cursor-default mt-4">
          <h3 className="font-medium font-Raleway text-xl border-b-2 border-[#00d8ff] inline-block mt-4">
            Community
          </h3>
          <ul className="mt-2 font-Raleway">
            <li className="p-2">Help Center</li>
            <li className="p-2">Blog</li>
            <li className="p-2">Terms & Services</li>
            <li className="p-2">Partners</li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium font-Raleway text-xl border-b-2 border-[#00d8ff] inline-block md:mt-4 mt-8 cursor-default">
            Connect
          </h3>
          <div className="md:ml-[8.5rem] ml-[4.5rem] md:mt-4 mt-5 space-y-6 cursor-pointer">
            <FiFacebook size={30} />
            <FiLinkedin size={30} />
            <FiTwitter size={30} />
          </div>
        </div>
      </div>
      <p className="mt-10 font-Raleway text-base text-center cursor-default">
        Copyright Ⓒ Designed & Developed by Jenil .
      </p>
    </div>
  );
};

export default Footer;
