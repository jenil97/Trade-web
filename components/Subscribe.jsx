import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full md:h-screen h-[90vh] px-4 py-[14rem] text-white text-center bg-cover bg-fixed bg-[url('../assets/subscribe.jpg')]">
      <h1 className="text-5xl font-Raleway font-bold cursor-default">Join Our Community !</h1>
      <div className="py-5">
        <input
          className="p-3 rounded-3xl mr-4 font-Raleway"
          type="email"
          placeholder="Enter your email"
        />
        <button className="font-Raleway bg-gradient-to-r from-[#6a00ff] to-[#00d8ff] py-3 px-7 font-medium rounded-3xl">Sign Up</button>
      </div>
      <div className="flex items-center justify-center py-2 ">
        <input className="-mt-5 md:mr-3 md:mt-[1px]" type="checkbox" />
        <p className="font-Raleway cursor-default md:mt-1">Yes, I agree to receive email communications from Portal.</p>
      </div>
    </div>
  );
};

export default Subscribe;
