import React from "react";
import Project1 from "./Project1";
import Footer from "../Footer";

const Portfolio = () => {
  return (
    <>
      <div className="flex justify-center items-center py-[30px]">
        <h1 className="text-[22px] sm:text-[28px]  text-white uppercase tracking-wider border-b-[1px] border-b-white pb-[4px]">
          Portfolio
        </h1>
      </div>
      <div className="py-[30px]">
        <Project1 />
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
