import React, { useEffect, useRef, useState } from "react";
import Project1 from "./Project1";
import Footer from "../Footer";
import Project2 from "./Project2";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Portfolio = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const screenHeight = window.innerHeight;

      if (scrollTop >= screenHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center py-[30px]"
        ref={scrollRef3}
      >
        <h1 className="text-[22px] sm:text-[28px]  text-white uppercase tracking-wider border-b-[1px] border-b-white pb-[4px]">
          Portfolio
        </h1>
      </div>
      <div className="sm:px-[50px] px-[20px]">
        <h1 className="text-white text-[22px] font-semibold">Projects List</h1>
        <ul className="list-inside list-disc pl-[10px] py-[20px] flex flex-col  gap-3">
          <li
            className="text-white cursor-pointer "
            onClick={() => {
              scrollRef1.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Infinity Institute
          </li>
          <li
            className="text-white cursor-pointer"
            onClick={() => {
              scrollRef2.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Basic E-Commerce App
          </li>
        </ul>
      </div>
      <div className="h-[2px] bg-gray-800 sm:mx-[50px] mx-[20px]"></div>
      <div className="py-[30px]">
        <Project1 scrollRef1={scrollRef1} />
        <Project2 scrollRef2={scrollRef2} />
      </div>
      <Footer />
      {showButton && (
        <BsFillArrowUpCircleFill
          className="text-white text-[32px] fixed bottom-[30px] right-[30px] z-[10] cursor-pointer"
          onClick={() => {
            scrollRef3.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
      )}
    </>
  );
};

export default Portfolio;
