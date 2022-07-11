import React from "react";

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

const Downbar = () => {
  return (
    <div className="sm:hidden bottom-6 fixed h-[5.2rem] w-full bg-opacity-0 flex justify-center p-3">
      <div className="w-[70vw] px-6 border-2 border-[#f30841] bg-[#23282e] bg-opacity-80 rounded-full flex justify-between items-center">
        {data.map((item, index) => (
          <a
            className="rounded-full border-2 border-[#f30841] w-[2.5rem] h-[2.5rem] text-black bg-white flex items-center justify-center hover:text-[#f30841]"
            href={item.refr}
            key={index}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Downbar;