import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "./data";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { ImHome } from "react-icons/im";
import { Helmet } from "react-helmet";
import Transition from "../Transition/Transition";
import SingleProjectCard from "./SingleProjectCard";

const SingleProject = () => {
  const { slug } = useParams();
  const [value, setValue] = useState(null);
  const [id, setId] = useState(null);
  const [isReloaded, setIsReloaded] = useState(true);
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
    <>
      <Transition />
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
                // e.preventDefault();
                navigate(`/project/${data[id - 1].name.toLowerCase()}`);
                setIsReloaded(false);
                window.location.reload(false);
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
                // e.preventDefault();
                navigate(`/project/${data[id + 1].name.toLowerCase()}`);
                setIsReloaded(false);
                window.location.reload(false);
              }}
              className="p-3 rounded-full h-fit hover:bg-[#454e5a] hover:bg-opacity-20 hover:cursor-pointer"
            >
              <MdArrowForwardIos size={30} />
            </span>
          )}
        </div>

        {isReloaded && <SingleProjectCard value={value} />}
      </div>
    </>
  );
};

export default SingleProject;
