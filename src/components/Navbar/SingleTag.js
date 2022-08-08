import React from "react";

export const SingleTag = ({ name, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color: isHovered ? color : "white" }}
      className="duration-300 transition-all hover:cursor-pointer"
    >
      <a href={`#${name.toLowerCase()}`}>{name}</a>
    </div>
  );
};
