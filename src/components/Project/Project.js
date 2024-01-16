import React, { useEffect, useState } from "react";
import JumbleWord from "../../Utils/JumbleWord";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { data } from "./data";

const Project = ({ color }) => {
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
    {
      id: 14,
      name: "Django"
    },
    {
      id: 15,
      name: "Spring Boot"
    }
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
