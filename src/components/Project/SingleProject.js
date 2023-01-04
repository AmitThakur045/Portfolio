import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./data";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const SingleProject = () => {
  const { slug } = useParams();
  const [value, setValue] = useState(null);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    data.map((project) => {
      if (project.name.toLowerCase() === slug) {
        setValue(project);
        setId(+project.id);
      }
      return 0;
    });
  }, [slug]);

  if (value === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="py-24 px-52 relative text-[#cacaca]">
      <div className="fixed w-[5rem] h-full left-10 top-80 flex flex-row justify-center">
        {id !== 0 && (
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate(`/project/${data[id - 1].name.toLowerCase()}`);
            }}
            className="p-3 rounded-full h-fit hover:bg-[#454e5a] hover:bg-opacity-20 hover:cursor-pointer"
          >
            <MdArrowBackIosNew size={50} />
          </span>
        )}
      </div>
      <div className="fixed w-[5rem] h-full right-10 top-80 flex flex-row justify-center">
        {id !== 5 && (
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate(`/project/${data[id + 1].name.toLowerCase()}`);
            }}
            className="p-3 rounded-full h-fit hover:bg-[#454e5a] hover:bg-opacity-20 hover:cursor-pointer"
          >
            <MdArrowForwardIos size={50} />
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-4 justify-center items-center w-full">
        <h2 className="uppercase text-4xl font-bold tracking-widest text-left w-full">
          {value.name}
        </h2>

        <p className="w-full text-left text-[1.2rem]">
          {value.smallDesc}
        </p>

        <div className="flex flex-row justify-start items-center space-x-4 w-full">
          <a
            href={value.github}
            target="_blank"
            rel="noreferrer"
            className="uppercase w-fit text-gray-300 text-base tracking-widest p-2 px-3 bg-[#009688] font-bold rounded-sm border-b-4 hover:border-b-2 hover:bg-opacity-70 border-[#0b5951] cursor-pointer"
          >
            Source Code
          </a>

          {value.live.length !== 0 && (
            <a
              href={value.live}
              target="_blank"
              rel="noreferrer"
              className="uppercase w-fit text-gray-300 text-base tracking-widest p-2 px-3 bg-[#cc181e] font-bold rounded-sm border-b-4 hover:border-b-2 hover:bg-opacity-70 border-[#660d10] cursor-pointer"
            >
              Live
            </a>
          )}
        </div>

        <div className="my-4 py-5">
          <div className="bg-[#dddddd] text-[#636363] rounded-tl-md rounded-tr-md w-full text-center font-bold p-1 z-20 tracking-[6px]">
            {value.name}
          </div>
          <img
            src={value.image}
            className="w-full aspect-auto rounded-bl-md rounded-br-md"
            alt=""
          />
        </div>

        <div className="my-4 py-5">
          <h2 className="uppercase text-4xl mt-3 font-bold tracking-widest  ">
            About the project
          </h2>
          <div className="my-3 w-[40vw] h-[1px] bg-[#dddddd]"></div>
          {value.description.map((project) => (
            <p className="text-[1.1rem] text-opacity-70">{project}</p>
          ))}
        </div>

        <div className="w-full">
          <h2 className="uppercase text-4xl mt-3 font-bold tracking-widest w-full text-left">
            Technical Sheet
          </h2>
          <p className="  text-xl my-2">
            Code technologies I got involved with while working on this project
          </p>
          <div className="my-3 w-[40vw] h-[1px] bg-[#dddddd]"></div>

          <ul className="text-xl list-disc pl-5">
            {value.tech.map((curr) => (
              <li>{curr}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
