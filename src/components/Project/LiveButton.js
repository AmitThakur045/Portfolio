import React from "react";

const LiveButton = ({ color, link }) => {
  const [isLive, setIsLive] = React.useState(false);
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsLive(true)}
        onMouseLeave={() => setIsLive(false)}
        style={{
          borderColor: "white",
          backgroundColor: isLive ? "white" : color,
          color: isLive ? color : "white",
        }}
        className="w-full flex flex-[0.5] bg-[#f30841] border-[0.1rem] rounded-md py-1 justify-center items-center hover:bg-white hover:text-[#f30841] duration-300 ease-in hover:text-semibold"
      >
        Live Demo
      </a>
    </>
  );
};

export default LiveButton;
