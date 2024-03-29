import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Project from "../Project/Project";
import Experience from "../Experience/Experience";
import Downbar from "../Navbar/Downbar";
// import ColorPicker from "../../Utils/ColorPicker";
import { ColorState } from "../../context/ColorProvider";
import Transition from "../Transition/Transition";

const Main = () => {
  const { color, setColor } = ColorState();
  return (
    <>
      <Transition />
      {/* <ColorPicker color={color} setColor={setColor} /> */}
      <div className="lg:px-24 md:px-12 px-4 py-10 w-full text-white snap-y snap-mandatory xl:mx-auto">
        <Navbar color={color} />
        <Home color={color} />
        <Project color={color} />
        <Experience color={color} />
        <Contact color={color} />
        <Footer color={color} />
      </div>
      <Downbar color={color} />
    </>
  );
};

export default Main;
