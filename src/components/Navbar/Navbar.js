import React, { useState } from "react";
import { SingleTag } from "./SingleTag";
import { motion } from "framer-motion";

const Navbar = ({ color }) => {
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div className="m-0 p-0 sm:block hidden">
      <div className="w-full grid-cols-6 flex">
        <motion.div
          initial={{
            x: -100,
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
          className="col-span-2 w-full flex justify-start items-center text-4xl font-extrabold"
        >
          <span style={{ color: color }} className="">
            A
          </span>
          <span className="text-white">MIT</span>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          viewport={{ once: true }}
          className="col-span-2 flex w-full justify-center items-center space-x-6 text-gray-200 text-[1rem] font-semibold"
        >
          <SingleTag name={"HOME"} color={color} />
          <SingleTag name={"PROJECT"} color={color} />
          <SingleTag name={"WORK"} color={color} />
          <SingleTag name={"CONTACT"} color={color} />
        </motion.div>

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
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="col-span-2 w-full flex justify-end items-center"
        >
          <a
            href="https://drive.google.com/file/d/13EvGnn7tkWz6WKc-6qLz3z5YqPpCb0Ub/view"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{
                color: hoverButton ? color : "white",
                backgroundColor: hoverButton ? "white" : color,
              }}
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              className="animate-pulse px-4 py-[0.3rem] rounded-3xl text-sm hover:cursor-pointer hover:scale-105 duration-300 transition-all"
            >
              DOWNLOAD CV
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
