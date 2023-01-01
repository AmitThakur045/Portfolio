import React from "react";
import JumbleWord from "../../Utils/JumbleWord";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FaReact, FaGithub, FaAws } from "react-icons/fa";
import {
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import { motion } from "framer-motion";

const data = [
  {
    name: "Competetitive-Coding",
    description:
      "I also do bit of competitive coding. I have attended multiple coding contest in the past and have also gained some good knowledge of DSA. Currently I am 4 Star on Codechef and Pupil on Codeforces and have a rating of 1650+ on leetcode with 12+ badges.",
    achievement: [
      {
        rank: "Became Specialist on Codeforces with max rating 1503.",
      },
      {
        rank: "Acquired 4 stars on CodeChef with max rating 1911.",
      },
      {
        rank: "Winner at VoidHacks 4.0 and 2nd runner up at HACKCBS 5.0",
      },
      {
        rank: "Secured Rank of 366 out of 2147 at ICPC preliminary 2021.",
      },
      {
        rank: "AIR 697, 752 at Google Kickstart Round G and H 2022",
      },
      {
        rank: "Received Global Rank 138 in CodeChef March Cook-Off 2022(Div 2)",
      },
      {
        rank: "Received 13 badges on LeetCode for being consistent performer",
      },
      {
        rank: "Achieved rank in top 9.24% of Leetoders across the globe with rating of 1752",
      },
      {
        rank: "Solved more than 1000 algorithmic problems based on data structures across various platform.",
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
    icon: <FaReact size={45} style={{ fill: "#60d9fa" }} />,
  },
  {
    name: "Nextjs",
    icon: <TbBrandNextjs size={45} style={{ fill: "#000000" }} />,
  },
  {
    name: "Redux",
    icon: <SiRedux size={45} style={{ fill: "#764abc" }} />,
  },
  {
    name: "TailwindCss",
    icon: <SiTailwindcss size={45} style={{ fill: "#13a7e9" }} />,
  },
  {
    name: "C++",
    icon: <SiCplusplus size={45} style={{ fill: "#6295cb" }} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={45} style={{ fill: "#f4c43d" }} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={45} style={{ fill: "#e8d44d" }} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={45} style={{ fill: "#2f74c0" }} />,
  },
  {
    name: "Node",
    icon: <SiNodedotjs size={45} style={{ fill: "#509941" }} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={45} style={{ fill: "#4caa3d" }} />,
  },
  {
    name: "Git",
    icon: <DiGit size={45} style={{ fill: "#e84e31" }} />,
  },
  {
    name: "Github",
    icon: <FaGithub size={45} />,
  },
  {
    name: "AWS",
    icon: <FaAws size={45} style={{ fill: "#ff9900" }} />,
  },
];

const About = ({ color }) => {
  return (
    <>
      <div className="w-full flex flex-col pt-8 snap-start" id="about">
        <div
          style={{ color: color }}
          className="w-full flex justify-center items-center text-sm font-semibold mb-4 tracking-[10px]"
        >
          GET TO KNOW
        </div>
        <div className="w-full flex justify-center items-center text-5xl font-bold pb-8">
          <h1 className="text-[#ffffff] flex flex-row justify-center sm:text-[3rem] text-[2rem]">
            <JumbleWord word={"About-Me"} color={color} secondary={"white"} />
          </h1>
        </div>
        <div className="w-full">
          {data.map((item, index) => (
            <Accordion key={index} defaultExpanded={true}>
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
                  <h1 className="text-white font-semibold sm:text-[1.2rem] text-[1rem] hover:cursor-pointer flex justify-start">
                    <JumbleWord
                      word={item.name}
                      color={color}
                      secondary={"white"}
                    />
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
                      <ul className="font-semibold ">
                        <motion.li
                          initial={{
                            x: 200,
                            opacity: 0,
                          }}
                          whileInView={{
                            x: 0,
                            opacity: 1,
                          }}
                          transition={{
                            duration: 1.2,
                          }}
                          viewport={{ once: true }}
                          key={index}
                          // style={{ color: color }}
                          className="flex flex-row text-sm text-gray-400 py-1"
                        >
                          ⭐ {ele.rank}
                        </motion.li>
                      </ul>
                    ))}
                  </div>
                )}
              </AccordionDetails>
            </Accordion>
          ))}
          <Accordion defaultExpanded={true}>
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
                  <JumbleWord
                    word={"Skills"}
                    color={color}
                    secondary={"white"}
                  />
                </h1>
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "#323d4a",
                backgroundOpacity: "0.4",
              }}
            >
              <div className="pb-4 w-full flex flex-row overflow-x-scroll text-white">
                {skills.map((item, index) => (
                  <motion.div
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
                    className="flex w-fit sm:m-4 m-2 sm:mx-6 p-3 rounded-md bg-[#313131] border-r-4 border-b-4 hover:border-b-2 hover:border-r-2 hover:bg-opacity-70 border-[#1d1e1f] duration-200"
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
                    <div className="flex justify-center items-center w-fit px-3 font-semibold">
                      {item.icon}&nbsp;{item.name}
                    </div>
                  </motion.div>
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
