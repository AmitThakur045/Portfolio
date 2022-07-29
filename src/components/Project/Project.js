import React from "react";
import { GoProject } from "react-icons/go";
import JumbleWord from "../../Utils/JumbleWord";

const Project = () => {
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
      <div className="flex flex-col pt-10" id="project">
        <div className="w-full flex justify-center items-center text-[#f30841] text-sm font-semibold">
          MY WORK
        </div>
        <div className="w-full flex justify-center items-center text-5xl font-bold pb-7">
          <h1 className="text-[#ffffff] flex flex-row justify-center text-[3rem]">
            <JumbleWord word={"Projects"} color={"#f0023e"} />
          </h1>
        </div>
        <div className="w-full flex flex-wrap pt-6 justify-evenly">
          {data.map((item, i) => (
            <div className="flex flex-row justify-center items-end lg:h-[22rem] lg:w-[22rem] md:w-[20rem] sm:w-[18rem] w-full p-[1rem] hover:scale-105 duration-300 ease-in">
              <div className="w-full flex flex-col justify-between bg-[#101118] h-full bg-opacity-80 hover:bg-opacity-60 p-[1.2rem] rounded-lg hover:cursor-pointer space-y-4">
                <div className="flex items-center justify-between w-full">
                  <GoProject className="text-[#f30841]" fontSize={"2.4rem"} />
                </div>
                <h1 className="text-2xl flex font-semibold justify-start">
                  <JumbleWord word={item.name} color={"#f0023e"} />
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
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex flex-[0.5] border-[#f30841] border-[0.1rem] hover:bg-white hover:border-white hover:text-[#f30841] duration-300 ease-in hover:text-semibold py-1 rounded-md justify-center items-center"
                  >
                    Github
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex flex-[0.5] bg-[#f30841] border-[0.1rem] rounded-md py-1 justify-center items-center hover:bg-white hover:text-[#f30841] duration-300 ease-in hover:text-semibold"
                  >
                    Live Demo
                  </a>
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
