import React, { useState } from "react";
import Amit_Thakur_Resume from "../../assets/Resume/Amit_Thakur_Resume.pdf";
import { SingleTag } from "./SingleTag";

const Navbar = ({ color }) => {
  const [hoverButton, setHoverButton] = useState(false);

  return (
    <div className="m-0 p-0 sm:block hidden">
      <div className="w-full grid-cols-6 flex">
        <div className="col-span-2 w-full flex justify-start text-4xl font-extrabold">
          <h1 style={{ color: color }} className="">
            A
          </h1>
          <h1 className="text-white">MIT</h1>
        </div>
        <div className="col-span-2 flex w-full space-x-6 text-gray-200 text-[0.8rem] font-semibold">
          <SingleTag name={"HOME"} color={color} />
          <SingleTag name={"PROJECT"} color={color} />
          <SingleTag name={"ABOUT"} color={color} />
          <SingleTag name={"CONTACT"} color={color} />
        </div>
        <div className="col-span-2 w-full flex justify-end">
          <a href={Amit_Thakur_Resume} download>
            <button
              style={{
                color: hoverButton ? color : "white",
                backgroundColor: hoverButton ? "white" : color,
              }}
              onMouseEnter={() => setHoverButton(true)}
              onMouseLeave={() => setHoverButton(false)}
              className="animate-bounce px-4 py-[0.3rem] rounded-3xl text-sm hover:cursor-pointer hover:scale-105 duration-300 transition-all"
            >
              DOWNLOAD CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
