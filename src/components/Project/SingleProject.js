import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "./Project";

const SingleProject = () => {
  const { slug } = useParams();
  const [value, setValue] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    data.map((project) => {
      if (project.name.toLowerCase() === slug) {
        setValue(project);
      }
      return 0;
    });
  }, [slug]);

  if (value === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-7xl py-24 px-52 space-y-4 text-[#cacaca]">
      <h2 className="uppercase text-4xl font-bold tracking-widest  ">
        {value.name}
      </h2>

      <p className="  text-[1.2rem] lowercase">
        A cryptocurrency website build in React to check crypto news and their
        prices
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
        <p className="  text-xl">{value.description}</p>
      </div>

      <div>
        <h2 className="uppercase text-4xl mt-3 font-bold tracking-widest  ">
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
  );
};

export default SingleProject;
