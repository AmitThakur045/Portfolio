import React from "react";
import { GoProject } from "react-icons/go";
import JumbleWord from "../../Utils/JumbleWord";
import GithubButton from "./GithubButton";
import LiveButton from "./LiveButton";

const Project = ({ color }) => {
  const data = [
    {
      name: "Bessalani-lms",
      description:
        "A learning management system for Bessalani build with MERN Stack",
      image: "",
      live: "https://bessalani-lms.netlify.app/",
      github: "https://github.com/AmitThakur045/Project1",
      tech: ["React", "Node", "MongoDB", "Express"],
    },
    {
      name: "Shareme",
      description: "A social media website build in React to share photo",
      image: "",
      live: "https://shareme-amitthakur.netlify.app/",
      github: "https://github.com/AmitThakur045/ShareMe-App",
      tech: ["React", "Sanity", "TailwindCSS"],
    },
    {
      name: "Crptoverse",
      description:
        "A cryptocurrency website build in React to check crypto news and their prices",
      image: "",
      live: "https://cryptoverse-amitthakur045.netlify.app/",
      github: "https://github.com/AmitThakur045/CryptoVerse-web-app",
      tech: ["React", "TailwindCSS", "RapidApi"],
    },
    {
      name: "Bessalani-Website",
      description:
        "A website for Bessalani build in React to show their events and courses",
      image: "",
      live: "https://bessalani.com/",
      github: "https://github.com/SHUBHAMTRIPATH/Bessalani_Website",
      tech: ["React", "TailwindCSS", "firebase"],
    },
    {
      name: "Ecommerce",
      description:
        "A ecommerce website build in mern to sell products and buy products",
      image: "",
      live: "https://github.com/AmitThakur045/Ecommerce",
      github: "https://github.com/AmitThakur045/Ecommerce",
      tech: ["React", "Node", "MongoDB", "Express"],
    },
    {
      name: "Weather App",
      description:
        "A weather app built with react and open weather api to check weather",
      image: "",
      live: "https://ncdyh.codesandbox.io/",
      github: "https://github.com/AmitThakur045/weather-app",
      tech: ["React", "OpenWeatherAPI"],
    },
  ];
  return (
    <>
      <div className="flex flex-col pt-10 snap-start" id="project">
        <div
          style={{ color: color }}
          className="w-full flex justify-center items-center text-sm font-semibold"
        >
          MY WORK
        </div>
        <div className="w-full flex justify-center items-center text-5xl font-bold pb-7">
          <h1 className="text-[#ffffff] flex flex-row justify-center text-[3rem]">
            <JumbleWord word={"Projects"} color={color} secondary={"white"} />
          </h1>
        </div>
        <div className="w-full flex flex-wrap pt-6 justify-evenly">
          {data.map((item, i) => (
            <div className="flex flex-row justify-center items-end lg:h-[22rem] lg:w-[22rem] md:w-[20rem] sm:w-[18rem] w-full p-[1rem] duration-300 ease-in">
              <div className="w-full flex flex-col justify-between bg-[#101118] h-full bg-opacity-90 hover:bg-opacity-50 p-[1.2rem] rounded-lg hover:cursor-pointer space-y-4">
                <div className="flex items-center justify-between w-full">
                  <GoProject fill={color} fontSize={"2.4rem"} />
                </div>
                <h1 className="text-2xl flex font-semibold justify-start">
                  <JumbleWord
                    word={item.name}
                    color={color}
                    secondary={"white"}
                  />
                </h1>

                <div className="text-gray-400 w-full">{item.description}</div>
                <div className="w-full flex flex-row space-x-2">
                  {item.tech.map((tech, i) => (
                    <div className="p-[0.2rem] px-2 w-fit border-[0.1px] border-white rounded-md hover:bg-white hover:text-black transition-all duration-200">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex items-end lg:flex-row md:flex-col flex-row md:space-y-2 lg:space-y-0 space-y-0 w-full justify-between md:space-x-0 lg:space-x-2 space-x-2">
                  <GithubButton link={item.github} color={color} />
                  <LiveButton link={item.live} color={color} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#101118] bg-opacity-80 w-full py-[0.1rem] my-12"></div>
    </>
  );
};

export default Project;
