import React, { useEffect, useRef, useState } from "react";
import JumbleWord from "../../Utils/JumbleWord";
import { motion } from "framer-motion";
import TagSphere from "../../Utils/TagSphere";

const workData = {
  work: [
    {
      title: "Full-Stack Web Developer Intern",
      company: "WappStudio",
      date: "Jan 2023 – Mar 2023",
      description: [
        "Successfully developed a company portfolio website using MERN and Framer Motion, demonstrating expertise in these technologies.",
        "Utilized AWS EC2 to host the backend and implemented an SSL certificate for the frontend host provider, showcasing a strong understanding of web application deployment and security.",
        "Developed a website for managing staff and salary associates that is currently being used by multiple local institutes, highlighting the practical application of your web development skills.",
        "Demonstrated proficiency in the MERN stack, a popular technology stack for building web applications, which is a valuable skill in the current job market.",
        "Displayed expertise in utilizing AWS services for web application deployment, which is a sought-after skill in the industry.",
      ],
    },
    {
      title: "Full-Stack Web Developer Intern",
      company: "Bessalani",
      date: "May 2022 – July 2022",
      description: [
        "I developed a full-stack educational platform that provided an online learning platform for employees of various organizations, demonstrating my proficiency in both front-end and back-end web development",
        "I utilized technologies such as React, Tailwind CSS, Syncfusion, Node.js, and MongoDB to build a robust and scalable system, allowing employees to access high-quality training resources online.",
        "I implemented complex CRUD operations, including scheduling classes, marking attendance, uploading courses, and more, ensuring the platform's functionality was comprehensive and user-friendly.",
        "I prioritized security by integrating two-factor authentication, a proven method for enhancing the security of user accounts and sensitive information.",
        "I utilized AWS S3 service to store data, ensuring the platform had the scalability and high availability necessary for handling large volumes of data and users.",
      ],
    },
  ],
};

const Experience = ({ color }) => {
  const [workIndex, setWorkIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef?.current?.scrollTo(0, 0);
  }, [workIndex]);

  return (
    <>
      <div className="w-full flex flex-col pt-8 snap-start" id="about">
        <div
          style={{ color: color }}
          className="w-full flex justify-center items-center text-sm font-semibold mb-4 tracking-[10px]"
        >
          EXPERIENCE
        </div>
        <div className="w-full flex justify-center items-center text-5xl font-bold pb-8">
          <h1 className="text-[#ffffff] flex flex-row justify-center sm:text-[3rem] text-[2rem]">
            <JumbleWord word={"Work"} color={color} secondary={"white"} />
          </h1>
        </div>
        <div className="w-full mx-auto flex md:flex-row flex-col justify-center items-center">
          <div className="w-full lg:w-[60%] flex lg:flex-row flex-col lg:space-x-5 space-y-10 lg:space-y-0 ">
            <div className="lg:flex-[0.2] flex flex-row lg:flex-col border-b-[1px] lg:border-l-[1px] lg:border-t-[1px] w-full border-[#e50b40] lg:h-[22rem]">
              {workData.work.map((work, idx) => (
                <div
                  onClick={() => setWorkIndex(idx)}
                  key={idx}
                  className={`${
                    workIndex === idx
                      ? "border-b-[2px] lg:border-b-0 lg:border-l-[2px] border-[#e50b40] bg-[#e50b40]/20 text-[#e50b40]"
                      : "text-white/70 border-b-[2px] lg:border-b-0 lg:border-l-[2px] border-transparent"
                  } px-5 py-2 cursor-pointer transition-all duration-150 border-b-[2px] lg:border-b-0 lg:border-l-[2px]`}
                >
                  {work.company}
                </div>
              ))}
            </div>
            <div className="lg:flex-[0.8] flex flex-col space-y-5 ml-6 lg:ml-0">
              <div className="space-y-2">
                <div className="text-[16px] md:text-[24px] flex md:space-x-3">
                  <h3 className="text-white">
                    {workData.work[workIndex].title}
                  </h3>
                  <h3 className="text-[#e50b40]">
                    @ {workData.work[workIndex].company}
                  </h3>
                </div>
                <p className="text-white/70 text-[13px]">
                  {workData.work[workIndex].date}
                </p>
              </div>
              <div
                ref={scrollRef}
                className="w-full flex flex-col space-y-5 mt-6 py-5 max-h-[16rem] overflow-y-auto scrollbar-thin scrollbar-thumb-[#e50b40] scrollbar-track-transparent"
              >
                {workData.work[workIndex].description.map((desc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ translateX: "-10%", opacity: 0 }}
                    whileInView={{
                      translateX: "0",
                      opacity: 1,
                      transition: {
                        delay: idx * 0.1,
                        duration: 1,
                      },
                    }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center space-x-6"
                  >
                    <span className="bg-white rounded-full h-1 w-1 bg-transparent border-t-[10px] border-t-transparent border-l-[10px] border-l-[#e50b40] border-b-[10px] border-b-transparent"></span>
                    <p className="text-white font-[100] text-[15px]">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full">
            <TagSphere />
          </div>
        </div>
      </div>
      <div className="bg-[#101118] bg-opacity-80 w-full py-[0.1rem] my-12"></div>
    </>
  );
};

export default Experience;
