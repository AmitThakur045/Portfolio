import React from "react";
import Amit_Resume from "../../assets/Resume/Amit_Resume.pdf";

const Navbar = () => {
  return (
    <div className="w-full grid-cols-6 flex">
      <div className="col-span-2 w-full flex justify-start text-4xl font-extrabold">
        <h1 className="text-[#f30841] hover:text-white duration-300 transition-all hover:cursor-pointer">
          A
        </h1>
        <h1 className="text-white hover:text-[#f30841] duration-300 transition-all hover:cursor-pointer">
          MIT
        </h1>
      </div>
      <div className="col-span-2 flex w-full space-x-6 text-gray-200 text-[0.8rem] font-semibold">
        <div className="hover:text-[#f30841] duration-300 transition-all hover:cursor-pointer">
          <a href="#home">HOME</a>
        </div>
        <div className="hover:text-[#f30841] duration-300 transition-all hover:cursor-pointer">
          <a href="#project">PROJECT</a>
        </div>
        <div className="hover:text-[#f30841] duration-300 transition-all hover:cursor-pointer">
          <a href="#about">ABOUT</a>
        </div>
        <div className="hover:text-[#f30841] duration-300 transition-all hover:cursor-pointer">
          <a href="#contact">CONTACT</a>
        </div>
      </div>
      <div className="col-span-2 w-full flex justify-end">
        <a href={Amit_Resume} download>
          <button className="animate-bounce bg-[#f30841] px-4 py-[0.3rem] rounded-3xl text-sm hover:cursor-pointer hover:scale-105 hover:bg-white hover:text-[#f30841] duration-300 transition-all">
            DOWNLOAD CV
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
