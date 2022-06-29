import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
import About from "../About/About";

const Main = () => {
  return (
    <div className="px-24 py-10 w-full text-white">
      <Navbar />
      <Home />
      <Project />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
