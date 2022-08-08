import React from "react";

const GithubButton = ({ color, link }) => {
  const [isGithub, setIsGithub] = React.useState(false);
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsGithub(true)}
        onMouseLeave={() => setIsGithub(false)}
        style={{
            borderColor: isGithub ? "white" : color,
            backgroundColor: isGithub ? "white" : "transparent",
            color: isGithub ? color : "white",
          }}
        className="w-full flex flex-[0.5] border-[0.1rem] duration-300 ease-in hover:text-semibold py-1 rounded-md justify-center items-center"
      >
        Github
      </a>
    </>
  );
};

export default GithubButton;
