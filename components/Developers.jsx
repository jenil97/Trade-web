import Image from "next/image";
import React from "react";
import terminal from "../assets/terminal.png";

const Developers = () => {
  return (
    <div className="w-full md:h-[95vh] text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div>
          <h1 className="text-4xl font-Raleway font-semibold mt-[4rem] text-center md:text-left cursor-default">
            Superpowers for Developers .
          </h1>
          <p className="text-xl font-Raleway mt-[2rem] text-center md:text-left cursor-default">
            Checkout the <span className="text-[#00d8ff]">documentation</span> ,
            the <span className="text-[#00d8ff]">quick start</span> or a guide
            belows to integrate <br /> your project with thousands of tokens and
            billions of liquidity. As a developer you don&apos;t need to know
            much about the EVM other than it exists and that it reliably powers
            all applications on Ethereum without downtime .
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
          <Image
            className="max-w-[280px] shadow-lg shadow-cyan-500/50"
            src={terminal}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Developers;
