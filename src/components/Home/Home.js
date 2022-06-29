import React from "react";

import myImage from "../../assets/myImage.png";
import {
  SiCodeforces,
  SiCodechef,
  SiLinkedin,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:space-x-3" id="home">
        <div className="md:flex-[0.6] flex flex-col sm:pt-[5rem] w-full">
          <h1 className="text-[1.4rem] font-semibold pb-0">
            Hello, <span>I'm</span>
          </h1>
          <h1 className="text-[3.4rem] font-bold text-[#f30841] hover:scale-110 transition-all duration-300 hover:text-white hover:translate-x-7 hover:cursor-pointer">
            Amit Thakur
          </h1>
          <p className="text-[1.4rem] font-semibold pb-0">
            FullStack Web Developer and Competitive Coder
          </p>
          <p className="text-[1rem] pt-5 text-gray-400 w-full">
            I'm a MERN-Stack Web-Developer. Currently pursuing my Bachelor's in
            Technology in Computer Science and Engineering from Maharaja
            Surajmal Institute of Technology, New Delhi, India. Currently I'm
            doing an internship as FullStack Developer at Bessalani. I also do
            bit of Competitive programming.
          </p>
          <div className="pt-12 space-y-3">
            <h1 className="font-semibold">FIND ME ON</h1>
            <div className="flex sm:space-x-5 space-x-3">
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
          </div>
        </div>
        <div className="md:flex-[0.4] w-full flex flex-row pt-32 md:justify-end justify-center items-center">
          <div
            className="flex justify-end bg-[#101118] bg-opacity-80 rounded-lg h-[22rem] items-end shadow-lg"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                rgba(255, 255, 255, 0.1),
                rgba(255, 255, 255, 0.1) 1px,
                transparent 1px,
                transparent 6px
            )`,
              backgroundSize: "4px 4px",
            }}
          >
            <img src={myImage} className="h-[30rem] rounded-lg" alt="profile" />
          </div>
        </div>
      </div>
      <div className="bg-[#101118] bg-opacity-80 w-full py-[0.1rem] my-12"></div>
    </>
  );
};

export default Home;
