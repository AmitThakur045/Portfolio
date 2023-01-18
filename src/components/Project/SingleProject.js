import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./data";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { Helmet } from "react-helmet";

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
    <div className="md:py-24 md:px-52 relative text-[#cacaca]">
      <Helmet>
        <title>
          Project | {value.name} - {`${value.tech.map((curr) => curr)}`}
        </title>
        <meta name="description" content={value.smallDesc} />
        <meta
          name="keywords"
          content={`Portfolio, ${value.name}, Amitthakur045, Beinglame, Amit Thakur`}
        />
      </Helmet>
      <div className="fixed w-fit h-fit p-2 md:left-14 md:top-10 left-4 top-4">
        <ImHome
          onClick={() => navigate("/")}
          className="cursor-pointer"
          size={30}
        />
      </div>
      <div className="fixed w-[5rem] h-full md:left-10 top-64 flex flex-row justify-center">
        {id !== 0 && (
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate(`/project/${data[id - 1].name.toLowerCase()}`);
            }}
            className="p-3 rounded-full h-fit hover:bg-[#454e5a] hover:bg-opacity-20 hover:cursor-pointer"
          >
            <MdArrowBackIosNew size={30} />
          </span>
        )}
      </div>
      <div className="fixed w-[5rem] h-full right-0 md:right-10 top-64 flex flex-row justify-center">
        {id !== 5 && (
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate(`/project/${data[id + 1].name.toLowerCase()}`);
            }}
            className="p-3 rounded-full h-fit hover:bg-[#454e5a] hover:bg-opacity-20 hover:cursor-pointer"
          >
            <MdArrowForwardIos size={30} />
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-4 justify-center items-center w-full p-4 pt-8 md:p-0">
        <h2 className="uppercase md:text-4xl text-2xl font-bold tracking-widest md:text-left text-center w-full">
          {value.name}
        </h2>

        <p className="w-full text-left text-[1.2rem]">{value.smallDesc}</p>

        <div className="flex flex-row justify-start items-center space-x-4 w-full">
          <a
            href={value.github}
            target="_blank"
            rel="noreferrer"
            className="uppercase text-center sm:w-fit w-full text-gray-300 text-base tracking-widest p-2 px-3 bg-[#009688] font-bold rounded-md border-b-4 hover:border-b-2 hover:bg-opacity-70 border-[#0b5951] cursor-pointer"
          >
            Source Code
          </a>

          {value.live.length !== 0 && (
            <a
              href={value.live}
              target="_blank"
              rel="noreferrer"
              className="uppercase text-center sm:w-fit w-full text-gray-300 text-base tracking-widest p-2 px-3 bg-[#cc181e] font-bold rounded-md border-b-4 hover:border-b-2 hover:bg-opacity-70 border-[#660d10] cursor-pointer"
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
          <h2 className="uppercase md:text-4xl text-2xl only:mt-3 font-bold tracking-widest w-full md:text-left text-center">
            About the project
          </h2>
          <div className="my-3 w-full md:w-[40vw] h-[1px] bg-[#dddddd]"></div>
          {value.description.map((project) => (
            <p className="text-[1.1rem] text-opacity-70">{project}</p>
          ))}
        </div>

        <div className="w-full">
          <h2 className="uppercase md:text-4xl text-2xl mt-3 font-bold tracking-widest w-full md:text-left text-center">
            Technical Sheet
          </h2>
          <p className="  text-xl my-2">
            Code technologies I got involved with while working on this project
          </p>
          <div className="my-3 w-full md:w-[40vw] h-[1px] bg-[#dddddd]"></div>

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
