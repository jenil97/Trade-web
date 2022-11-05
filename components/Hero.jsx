import React from "react";
import HeroVid from "../assets/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px]">
      <video
        className="object-cover h-full w-full absolute -z-10"
        src={HeroVid}
        autoPlay
        loop
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-white px-4 text-center font-Raleway">
        <h1 className="text-4xl font-normal cursor-default">Decentralized</h1>
        <h1 className="py-2 text-4xl font-normal cursor-default">
          <span className="text-[#00d8ff] font-medium">Trading</span> Protocol
        </h1>
        <p className="text-xl py-4 cursor-default">
          Guaranteed Liquidity Trading for Millions of Users and Top Ethereum
          Applications.
        </p>
        <div>
          <button className="m-2 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 text-xl rounded-3xl">
            About
          </button>
          <button className="m-2 bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 text-xl rounded-3xl">
            FAQ
          </button>
        </div>
      </div>
      <div>
        <p className="text-center text-white text-2xl font-semibold font-Raleway cursor-default">
          Total Volume Secured: $42,104,783,662.47
        </p>
      </div>
    </div>
  );
};

export default Hero;
