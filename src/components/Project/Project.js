import React, { useEffect, useState } from "react";
import JumbleWord from "../../Utils/JumbleWord";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Project = ({ color }) => {
  const data = [
    {
      id: 1,
      name: "CodeBuddies",
      description:
        "Codebuddies a mern web app build with web sockets to provide a virtual environment for multiple users to code (IDE & Editor) and have a chat together.",
      image: "/codebuddies.JPG",
      live: "https://codebuddies.netlify.app/",
      github: "https://github.com/AmitThakur045/Code-Buddy",
      tech: [
        "React",
        "RecoilJs",
        "Tailwind",
        "Socket",
        "Node",
        "MongoDB",
        "Express",
      ],
    },
    {
      id: 2,
      name: "Bessalani-lms",
      description:
        "It an educative platform build to integrate traditional learning mechanism in a virtual environment where big organization can teach employee new cutting edge technologies.",
      image:
        "https://raw.githubusercontent.com/AmitThakur045/LMS/main/Docs-Images/Student_Course.JPG",
      live: "https://bessalani-lms.netlify.app/",
      github: "https://github.com/AmitThakur045/Project1",
      tech: ["React", "Redux", "Tailwind", "Node", "MongoDB", "Express", "AWS"],
    },
    {
      id: 3,
      name: "Podcast",
      description:
        "Podcast is a voice chat platform build for people, where like-minded individuals can create rooms, engage in conversation, and share/express their ideas.",
      image: "/podcast.JPG",
      live: "",
      github: "https://github.com/AmitThakur045/podcast",
      tech: [
        "React",
        "Redux-Toolkit",
        "Socket",
        "WebRTC",
        "Node",
        "MongoDB",
        "Express",
      ],
    },
    {
      id: 4,
      name: "Parivesh",
      description:
        "Parivesh is a three tier solution for the problem of healthcare waste management working on stages from waste production to waste disposal.",
      image: "/parivesh.JPG",
      live: "https://parivesh.vercel.app/",
      github: "https://github.com/gaganvats-05/parivesh",
      tech: [
        "React",
        "Tailwind",
        "Auth0",
        "ML Model",
        "Node",
        "MongoDB",
        "Express",
      ],
    },
    {
      id: 5,
      name: "Shareme",
      description:
        "A social media website build in React to share photo. Authentication is done using the google api. Users are permitted to save, like and upload images.",
      image: "/shareme.JPG",
      live: "https://shareme-amitthakur.netlify.app/",
      github: "https://github.com/AmitThakur045/ShareMe-App",
      tech: ["React", "Sanity", "Tailwind", "Redux-Toolkit", "Google-api"],
    },
    {
      id: 6,
      name: "Crptoverse",
      description:
        "A cryptocurrency website build in React to check crypto news and their prices",
      image: "/cryptoverse.JPG",
      live: "https://cryptoverse-amitthakur045.netlify.app/",
      github: "https://github.com/AmitThakur045/CryptoVerse-web-app",
      tech: ["React", "Tailwind", "RapidApi"],
    },
    // {
    //   id: 7,
    //   name: "Bessalani-Website",
    //   description:
    //     "A website for Bessalani build in React to show their events and courses",
    //   image: "",
    //   live: "https://bessalani.com/",
    //   github: "https://github.com/SHUBHAMTRIPATH/Bessalani_Website",
    //   tech: ["React", "Tailwind", "firebase", "Bootstrap"],
    // },
    // {
    //   id: 8,
    //   name: "Weather App",
    //   description:
    //     "A weather app built with react and open weather api to check weather",
    //   image: "",
    //   live: "https://ncdyh.codesandbox.io/",
    //   github: "https://github.com/AmitThakur045/weather-app",
    //   tech: ["React", "OpenWeatherAPI"],
    // },
  ];

  const techList = [
    {
      id: 1,
      name: "Show All",
    },
    {
      id: 2,
      name: "React",
    },
    {
      id: 3,
      name: "Redux",
    },
    {
      id: 4,
      name: "Redux-Toolkit",
    },
    {
      id: 5,
      name: "Tailwind",
    },
    {
      id: 6,
      name: "Node",
    },
    {
      id: 7,
      name: "Express",
    },
    {
      id: 8,
      name: "FireBase",
    },
    {
      id: 10,
      name: "MongoDB",
    },
    {
      id: 11,
      name: "Sanity",
    },
    {
      id: 12,
      name: "Aws",
    },
    {
      id: 13,
      name: "Socket",
    },
  ];

  const inActive = `ease-in my-3 flex justify-center items-start bg-[#101118] bg-opacity-80 p-4 px-6 rounded-md hover:scale-105 transition duration-200 hover:bg-white hover:text-black hover:cursor-pointer hover:font-bold uppercase`;

  const Active = `ease-out my-3 flex justify-center items-start p-4 px-6 rounded-md scale-105 bg-white text-black hover:cursor-pointer font-bold uppercase`;

  const [currTech, setCurrTech] = useState("Show All");
  const [projectList, setProjectList] = useState(data);

  useEffect(() => {
    if (currTech.toLowerCase() === "show all") {
      setProjectList(data);
    } else {
      const currProjectList = [];
      data.map((project) => {
        const index = project.tech.findIndex((element) => {
          return element.toLowerCase() === currTech.toLowerCase();
        });

        if (index !== -1) {
          currProjectList.push(project);
        }

        // this line has no significance it is return because arrow function always required a return type
        return 0;
      });

      setProjectList(currProjectList);
    }
  }, [currTech]);

  console.log(projectList);

  return (
    <>
      <div className="flex flex-col pt-10 snap-start" id="project">
        <div
          style={{ color: color }}
          className="w-full flex justify-center items-center text-sm font-semibold tracking-[10px]"
        >
          MY WORK
        </div>

        <div className="w-full flex justify-center items-center text-5xl font-bold pb-7">
          <h1 className="text-[#ffffff] flex flex-row justify-center sm:text-[3rem] text-[2rem]">
            <JumbleWord word={"Projects"} color={color} secondary={"white"} />
          </h1>
        </div>

        <div className="flex flex-wrap space-x-3 justify-center lg:px-20">
          {techList.map((tech) => (
            <motion.button
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              viewport={{ once: true }}
              key={tech.id}
              className={
                tech.name.toUpperCase() === currTech.toUpperCase()
                  ? Active
                  : inActive
              }
              onClick={() => setCurrTech(tech.name)}
            >
              {tech.name}
            </motion.button>
          ))}
        </div>

        <div className="w-full flex flex-wrap pt-6 justify-evenly h-fit">
          {projectList.map((item, i) => (
            <ProjectCard project={item} />
          ))}
        </div>
      </div>
      <div className="bg-[#101118] bg-opacity-80 w-full py-[0.1rem] my-12"></div>
    </>
  );
};

export default Project;
