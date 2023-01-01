import React from "react";
import { motion } from "framer-motion";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdAddIcCall } from "react-icons/md";

const data = [
  {
    icon: <AiFillHome size={30} />,
    refr: "#home",
  },
  {
    icon: <AiFillProject size={30} />,
    refr: "#project",
  },
  {
    icon: <BsFillPersonFill size={30} />,
    refr: "#about",
  },
  {
    icon: <MdAddIcCall size={30} />,
    refr: "#contact",
  },
];

const Downbar = ({ color }) => {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1
      }}
      className="sm:hidden bottom-6 fixed h-[5.2rem] w-full bg-opacity-0 flex justify-center p-3 z-30"
    >
      <div
        style={{ borderColor: color }}
        className="w-[70vw] px-6 border-2 bg-[#23282e] bg-opacity-80 rounded-full flex justify-between items-center"
      >
        {data.map((item, index) => (
          <a
            style={{ borderColor: color }}
            className="rounded-full border-2 w-[2.5rem] h-[2.5rem] text-black bg-white flex items-center justify-center"
            href={item.refr}
            key={index}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default Downbar;
