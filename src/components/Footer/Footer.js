import React from "react";

import {
  SiCodeforces,
  SiCodechef,
  SiLinkedin,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";

const Footer = ({ color }) => {
  return (
    <div className="w-full h-[15rem] flex flex-col items-center">
      <div className="w-full flex justify-center text-4xl font-extrabold pb-10">
        <h1 style={{ color: color }} className="">
          A
        </h1>
        <h1 className="text-white">MIT</h1>
      </div>
      <div className="flex space-x-5">
        <a
          href="https://www.linkedin.com/in/amit-kumar-thakur-3024b51b7/"
          alt="linkdin"
          className="ease-in flex justify-center items-start bg-[#101118] bg-opacity-80 p-4 rounded-md hover:scale-105 transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer"
        >
          <SiLinkedin fontSize={"1.2rem"} />
        </a>
        <a
          href="https://codeforces.com/profile/Beinglame"
          alt="codeforces"
          className="ease-in flex justify-center items-start bg-[#101118] bg-opacity-80 p-4 rounded-md hover:scale-105 transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer"
        >
          <SiCodeforces fontSize={"1.2rem"} />
        </a>
        <a
          href="https://github.com/AmitThakur045"
          alt="github"
          className="ease-in flex justify-center items-start bg-[#101118] bg-opacity-80 p-4 rounded-md hover:scale-105 transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer"
        >
          <SiGithub fontSize={"1.2rem"} />
        </a>
        <a
          href="https://leetcode.com/beinglame123/"
          alt="leetcode"
          className="ease-in flex justify-center items-start bg-[#101118] bg-opacity-80 p-4 rounded-md hover:scale-105 transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer"
        >
          <SiLeetcode fontSize={"1.2rem"} />
        </a>
        <a
          href="https://www.codechef.com/users/beinglame123"
          alt="codechef"
          className="ease-in flex justify-center items-start bg-[#101118] bg-opacity-80 p-4 rounded-md hover:scale-105 transition-all duration-500 hover:bg-white hover:text-black hover:cursor-pointer"
        >
          <SiCodechef fontSize={"1.2rem"} />
        </a>
      </div>
      <div className="w-full flex justify-center text-sm mt-[2rem]">
        &copy; Amit. All copyrights reserved {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
