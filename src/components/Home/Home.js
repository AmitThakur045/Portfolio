import React, { useEffect, useRef } from "react";
import JumbleWord from "../../Utils/JumbleWord";
import Typed from "typed.js";
import myImage from "../../assets/myImage.jpeg";
import {
  SiCodeforces,
  SiCodechef,
  SiLinkedin,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";
import { motion } from "framer-motion";

const Home = ({ color }) => {
  const title = useRef(null);

  useEffect(() => {
    const typed = new Typed(title.current, {
      strings: [
        "Frontend Developer",
        "Backend Developer",
        "Competitive Programmer",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="flex lg:flex-row flex-col md:space-x-3 snap-start"
        id="home"
      >
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
          }}
          viewport={{ once: true }}
          className="md:flex-[0.6] flex flex-col sm:pt-[5rem] w-full"
        >
          <h1 className="text-[1.4rem] font-semibold pb-0">
            Hello, <span>I'm</span>
          </h1>
          <div
            style={{ color: color }}
            className={`sm:text-[5rem] text-[3rem] font-extrabold flex flex-row justify-start`}
          >
            <JumbleWord
              word={"Amit-Thakur"}
              color={color}
              secondary={"white"}
            />
          </div>
          <p className="text-[1.4rem] font-semibold pb-0">
            I am{" "}
            <span
              style={{ color: color }}
              className={`font-bold`}
              ref={title}
            ></span>
          </p>
          <p className="text-[1rem] pt-5 text-gray-400 w-full">
            I am a Computer Science student with a strong interest in
            competitive coding and development. I have had the opportunity to
            participate in several hackathons and coding challenges, including
            winning India's largest run Hackathon, HACKCBS. In my work, I
            specialize in using technologies like ReactJS, NextJS, NodeJS, and
            MongoDB to build frontend and backend web applications. I am always
            looking for new ways to challenge myself and improve my skills as a
            developer.
          </p>
          <div className="pt-12 space-y-3">
            <h1 className="font-semibold w-full md:text-left text-center tracking-[10px] uppercase">
              Socials
            </h1>
            <div className="flex sm:space-x-5 space-x-3 w-full justify-center md:justify-start">
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
        </motion.div>

        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
          }}
          viewport={{ once: true }}
          className="md:flex-[0.4] w-full flex flex-row pt-32 lg:justify-end justify-center items-center"
        >
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
            <img
              src={myImage}
              className="md:h-[26rem] md:w-[20rem] h-[25rem] w-[20rem] object-cover rounded-lg"
              alt="profile"
            />
          </div>
        </motion.div>
      </div>
      <div className="bg-[#101118] bg-opacity-80 w-full py-[0.1rem] my-12"></div>
    </>
  );
};

export default Home;
