import React from "react";
import JumbleWord from "../../Utils/JumbleWord";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaReact, FaGithub } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

const data = [
  {
    name: "Competetitive-Coding",
    description:
      "I also do bit of competitive coding. I have attended multiple coding contest in the past and have also gained some good knowledge of DSA. Currently I am 4 Star on Codechef and Pupil on Codeforces and have a rating of 1650+ on leetcode with 12+ badges.",
    achievement: [
      {
        name: "Codechef",
        rank: "Global rankig of 132 in codechef march cookoff 2022",
      },
      {
        name: "Codeforces",
        rank: "Pupil on Codeforces and had solved more than 400+ problems",
      },
      {
        name: "Leetcode",
        rank: "12+ badges and rating of 1650+ on leetcode and had also maintained a streak of 1 year solving daily challenges",
      },
    ],
  },
  {
    name: "Intership",
    description:
      "I am currently interning as a fullstack developer in a startup company called 'Bessalani'. Currently building a web application (Bessalani-lms) from scratch using React, Node, Express, MongoDB, and Mongoose to provide a interactive platform for employees of their respective organization to learn new technologies and skills",
    achievement: [],
  },
];

const skills = [
  {
    name: "React",
    icon: <FaReact size={30} style={{ fill: "#60d9fa" }} />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={30} style={{ fill: "#764abc" }} />,
  },
  {
    name: "TailwindCss",
    icon: <SiTailwindcss size={30} style={{ fill: "#13a7e9" }} />,
  },
  {
    name: "C++",
    icon: <SiCplusplus size={30} style={{ fill: "#6295cb" }} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={30} style={{ fill: "#f4c43d" }} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={30} style={{ fill: "#e8d44d" }} />,
  },
  {
    name: "Node",
    icon: <SiNodedotjs size={30} style={{ fill: "#509941" }} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={30} style={{ fill: "#4caa3d" }} />,
  },
  {
    name: "Git",
    icon: <DiGit size={30} style={{ fill: "#e84e31" }} />,
  },
  {
    name: "Github",
    icon: <FaGithub size={30} />,
  },
];

const About = () => {
  return (
    <>
      <div className="w-full flex flex-col pt-8" id="about">
        <div className="w-full flex justify-center items-center text-[#f30841] text-sm font-semibold mb-4">
          GET TO KNOW
        </div>
        <div className="w-full flex justify-center items-center text-5xl font-bold pb-8">
          <h1 className="text-[#ffffff] flex flex-row justify-center text-[3rem]">
            <JumbleWord word={"About-Me"} color={"#f0023e"} />
          </h1>
        </div>
        <div className="w-full">
          {data.map((item, index) => (
            <Accordion key={index} defaultExpanded={index === 0 ? true : false}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  backgroundColor: "#2d3640",
                  backgroundOpacity: "0.4",
                }}
              >
                <Typography>
                  <h1 className="text-white font-semibold text-[1.2rem] hover:cursor-pointer flex justify-start">
                    <JumbleWord word={item.name} color={"#f0023e"} />
                  </h1>
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "#323d4a",
                  backgroundOpacity: "0.4",
                }}
              >
                <div className="pb-4">
                  <Typography sx={{ color: "#c1cbd6" }}>
                    {item.description}
                  </Typography>
                </div>
                {item.achievement.length !== 0 && (
                  <div className="p-2 rounded-md bg-[#2d3640] bg-opacity-70">
                    {item.achievement?.map((ele, index) => (
                      <ul className="">
                        <li
                          key={index}
                          className="flex flex-row text-sm text-gray-400 py-1"
                        >
                          <p className="font-bold text-[#f30841]">
                            {ele.name}: &nbsp;
                          </p>
                          {ele.rank}
                        </li>
                      </ul>
                    ))}
                  </div>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                backgroundColor: "#2d3640",
                backgroundOpacity: "0.4",
              }}
            >
              <Typography>
                <h1 className="text-white font-semibold text-[1.2rem] hover:cursor-pointer flex justify-start">
                  <JumbleWord word={"Skills"} color={"#f0023e"} />
                </h1>
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#323d4a",
                backgroundOpacity: "0.4",
              }}
            >
              <div className="pb-4 w-full flex flex-wrap text-white">
                {skills.map((item, index) => (
                  <div
                    className="flex w-fit sm:m-4 m-2 sm:mx-6 p-3 rounded-md bg-[#101118] hover:bg-opacity-80 hover:text-[#f30841] hover:cursor-pointer hover:scale-105 duration-200 transition-all"
                    key={index}
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
                    <div className="flex justify-center items-center w-fit">
                      {item.icon}&nbsp;{item.name}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="bg-[#101118] bg-opacity-80 w-full py-[0.1rem] my-12"></div>
    </>
  );
};

export default About;
