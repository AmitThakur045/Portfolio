import React from "react";
import { GoProject } from "react-icons/go";

const Project = () => {
  const data = [
    {
      name: "Bessalani-lms",
      description:
        "A learning management system for Bessalani build with MERN Stack",
      image: "",
      live: "https://bessalani-lms.netlify.app/",
      github: "https://github.com/AmitThakur045/Project1",
    },
    {
      name: "Shareme",
      description: "A social media website build in React to share photo",
      image: "",
      live: "https://shareme-amitthakur.netlify.app/",
      github: "https://github.com/AmitThakur045/ShareMe-App",
    },
    {
      name: "Crptoverse",
      description:
        "A cryptocurrency website build in React to check crypto news and their prices",
      image: "",
      live: "https://cryptoverse-amitthakur045.netlify.app/",
      github: "https://github.com/AmitThakur045/CryptoVerse-web-app",
    },
    {
      name: "Besslani-website",
      description:
        "A website for Bessalani build in React to show their events and courses",
      image: "",
      live: "https://bessalani.com/",
      github: "https://github.com/SHUBHAMTRIPATH/Bessalani_Website",
    },
    {
      name: "Ecommerce",
      description:
        "A ecommerce website build in mern to sell products and buy products",
      image: "",
      live: "https://github.com/AmitThakur045/Ecommerce",
      github: "https://github.com/AmitThakur045/Ecommerce",
    },
    {
      name: "Weather App",
      description:
        "A weather app built with react and open weather api to check weather",
      image: "",
      live: "https://ncdyh.codesandbox.io/",
      github: "https://github.com/AmitThakur045/weather-app",
    },
  ];
  return (
    <div className="flex flex-col pt-10" id="project">
      <div className="w-full flex justify-center items-center text-[#f30841] text-sm font-semibold">
        MY WORK
      </div>
      <div className="w-full flex justify-center items-center text-5xl font-bold pb-7">
        <h1 className="ease-linear hover:scale-110 duration-300 transition-all hover:text-[#f30841] hover:cursor-pointer">
          Projects
        </h1>
      </div>
      <div className="w-full flex flex-wrap pt-6">
        {data.map((item, i) => (
          <div className="flex justify-center items-center lg:w-[27.7vw] md:w-[25vw] w-full p-[1rem] hover:scale-105 duration-300 ease-in">
            <div className="w-full bg-[#101118] bg-opacity-80 hover:bg-opacity-60 p-[1.2rem] rounded-lg hover:cursor-pointer space-y-4">
              <div className="flex items-center justify-between w-full">
                <GoProject className="text-[#f30841]" fontSize={"2.4rem"} />
                <h1 className="text-2xl hover:text-[#f30841] duration-300 ease-in">
                  {item.name}
                </h1>
              </div>
              <div className="text-gray-400 w-">{item.description}</div>
              <div className="flex w-full justify-between items-center space-x-2">
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
                  className="w-full flex flex-[0.5] bg-[#f30841] rounded-md py-1 justify-center items-center hover:bg-white hover:text-[#f30841] duration-300 ease-in hover:text-semibold"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
