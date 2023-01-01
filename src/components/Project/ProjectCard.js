import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      initial={{
        y: 200,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{ once: true }}
      className="flex w-fit mx-auto"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="sm:w-[25rem] w-[20rem] flex flex-col my-2">
        <div className="bg-[#dddddd] text-[#636363] rounded-tl-md rounded-tr-md w-full text-center font-bold p-1 z-20 tracking-[6px]">
          {project.name}
        </div>
        <img
          className={`sm:w-[25rem] w-[20rem] sm:h-[12.5rem] h-[10rem] relative rounded-bl-md rounded-br-md z-10`}
          src={project.image}
          alt=""
        />
      </div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className={`absolute ${
          isHover ? "inline-block" : "hidden"
        } sm:w-[25rem] w-[20rem] sm:h-[12.5rem] h-[10rem] flex flex-col aspect-auto bg-[#14161c]/90 z-20 mt-10 rounded-bl-md rounded-br-md`}
      >
        <div className="sm:w-[25rem] w-[20rem] my-auto">
          <div className="flex flex-wrap justify-evenly mt-2 sm:p-3 sm:px-8 w-full h-auto">
            {project.tech.map((data) => (
              <span className="mt-1 uppercase text-gray-300 text-xs p-2 bg-[#313131] sm:font-bold rounded border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 hover:bg-opacity-70 border-[#1d1e1f]">
                {data}
              </span>
            ))}
          </div>
          <div className="mx-auto uppercase w-fit text-gray-300 text-xs p-2 bg-[#313131] font-bold rounded border-b-4 border-r-4 hover:border-b-2 hover:border-r-2 hover:bg-opacity-70 border-[#1d1e1f] cursor-pointer">
            more..
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
