import { useEffect, useState } from "react";
import TagCloud from "TagCloud";

const mySkills = [
  "JavaScript",
  "CSS",
  "HTML",
  "ReactQuery",
  "React",
  "NextJS",
  "AWS S3",
  "AWS EC2",
  "Firebase",
  "NodeJS",
  "Express",
  "MongoDB",
  "Redux",
  "C/C++",
  "Java",
  "Typescript",
  "Git",
  "Bootstrap",
];

const TagSphere = () => {
  const [myTags, setMyTags] = useState(mySkills);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    TagCloud(".tagcloud", myTags, {
      radius: width <= 640 ? 120 : width <= 768 ? 150 : 200,

      maxSpeed: "fast",
      initSpeed: "fast",
      itemClass: "text-[#e50b40] text-xs md:text-xl lg:text-2xl font-bold ",
    });
  }, [myTags]);

  return (
    <div className="tagcloud flex items-center justify-center z-[10]"></div>
  );
};

export default TagSphere;
