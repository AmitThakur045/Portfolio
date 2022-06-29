import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { GrMail } from "react-icons/gr";
import { RiWhatsappFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";

const contactOptionsList = [
  {
    logo: GrMail,
    link: "mailto:amitthakur.techgeek@gmail.com",
    name: "Email",
    text: "Send a Mail",
    color: "#C14438",
  },
  {
    logo: SiLinkedin,
    link: "https://www.linkedin.com/in/amit-kumar-thakur-3024b51b7/",
    name: "Messenger",
    text: "Send a Message",
    color: "#006AFF",
  },
  {
    logo: RiWhatsappFill,
    link: "https://wa.me/918800541938?text=Hello%20Amit%20Thakur",
    name: "WhatsApp",
    text: "Send a Message",
    color: "#25D366",
  },
  //   {
  //     logo: MdCall,
  //     link: "tel:+918800541938",
  //     name: "+91 8800541938",
  //     text: "Call Me",
  //     color: "#128C7E",
  //   },
];

const Contact = () => {
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form", form.current);

    emailjs
      .sendForm(
        "service_sdm8x4o",
        "template_5x8e7as",
        form.current,
        "mVa2A4FwheGJ3K4Xi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <div className="flex flex-col pt-10" id="contact">
        <div className="w-full flex justify-center items-center text-[#f30841] text-sm font-semibold">
          GET IN TOUCH
        </div>
        <div className="w-full flex justify-center items-center text-5xl font-bold pb-7">
          <h1 className="ease-linear hover:scale-110 duration-300 transition-all hover:text-[#f30841] hover:cursor-pointer">
            Contact Me
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 justify-center space-x-4 mt-14">
          <div className="flex-[0.3] flex flex-col items-center space-y-5">
            {contactOptionsList.map((contactOption) => {
              const Icon = contactOption.logo;
              return (
                <div className="flex flex-col items-center bg-[#111218] bg-opacity-80 w-[12rem] py-4 rounded-lg hover:scale-105 duration-300 transition-all ease-in hover:bg-opacity-60">
                  <a
                    href={contactOption.link}
                    className="space-y-3 w-full"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="flex w-full justify-evenly items-center px-5">
                        <Icon
                          className="text-[2rem]"
                          style={{ color: contactOption.color }}
                        />
                        <h1 className="hover:text-[#f30841] ease-in duration-300">
                          {contactOption.name}
                        </h1>
                      </div>
                      <p className="hover:text-[#f30841] ease-in duration-300">
                        {contactOption.text}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="flex-[0.7] flex justify-center">
            <form
              ref={form}
              onSubmit={submitHandler}
              className="flex flex-col space-y-5 lg:w-[40rem] md:w-[30rem] sm:w-[26rem] w-full"
            >
              <div className="flex w-full md:flex-row items-start flex-col md:space-x-2 space-y-5 md:space-y-0">
                <input
                  className="pl-2 w-full border-1 rounded-md h-[3rem] text-[#f30841] bg-opacity-100 bg-white"
                  type="text"
                  name="username"
                  placeholder="Name"
                />
                <input
                  className="pl-2 w-full border-1 rounded-md h-[3rem] text-[#f30841] bg-opacity-100 bg-white"
                  type="type"
                  name="company"
                  placeholder="Current Organization"
                />
              </div>
              <div className="w-full">
                <input
                  className="pl-2 w-full border-1 rounded-md h-[3rem] text-[#f30841] bg-opacity-100 bg-white"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="w-full items-center">
                <textarea
                  className="pl-2 pt-2 w-full border-1 rounded-md  text-[#f30841] bg-opacity-100 bg-white"
                  rows="5"
                  name="query"
                  placeholder="Write to us!"
                />
              </div>
              <div className="flex w-full space-x-3 sm:justify-end justify-center">
                <button
                  type="submit"
                  className="sm:w-[8rem] w-full flex border-[#f30841] border-[0.1rem] hover:bg-white hover:border-white hover:text-[#f30841] duration-300 ease-in hover:text-semibold py-1 rounded-md justify-center items-center"
                >
                  Clear
                </button>
                <button
                  type="submit"
                  className="sm:w-[8rem] w-full flex bg-[#f30841] rounded-md py-1 justify-center items-center hover:bg-white hover:text-[#f30841] duration-300 ease-in hover:text-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-[#101118] bg-opacity-80 w-full py-[0.1rem] mt-14 my-12"></div>
    </>
  );
};

export default Contact;
