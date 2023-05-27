import React, { useEffect, useMemo, useRef, useState } from "react";
import hi from "../../assets/hello.png";
import { motion } from "framer-motion";
import { introParagraph } from "../../animations";
import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import { BsChevronDown } from "react-icons/bs";
import MainSkills from "./Skills";
import Footer from "../Footer";

const Home = () => {
  const scrollRef = useRef(null);
  const skills = useMemo(
    () => [
      "JavaScript",
      "React",
      "NodeJs",
      "MERN Stack",
      "React Native",
      "NextJs",
    ],
    []
  );
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((textIndex + 1) % skills.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [textIndex, skills]);
  return (
    <>
      <div className="flex justify-center flex-col items-center sm:px-[70px] px-[30px] ">
        <p className="sm:text-[38px] text-[22px] text-white">
          Here's Hamza Siddique
        </p>
        <p className="text-white sm:text-[40px] text-[23px]">
          A <span className="text-orange-400">{skills[textIndex]} </span>
          Developer
        </p>
        <motion.div
          variants={introParagraph}
          initial="hidden"
          whileInView="show"
          className="sm:pr-[50px] py-[30px] my-[30px] shadow-2xl  flex flex-col gap-3"
        >
          <div className="flex flex-row items-center gap-3">
            <p className="sm:text-[28px] text-[24px] text-white">Hi Guys! </p>
            <img src={hi} alt="hi" className="w-[28px] icon" />
          </div>
          <p className="sm:text-[20px] text-[18px] text-justify text-white">
            Here's Hamza Siddique, Full Stack Developer, working since 2018 but
            professional Career was started from December 2021 and currently
            working as a Software Engineer. I worked with my full innovative
            mind, with my interpersonal skills, try to take proper decisions for
            problem solution that can be simple or complex and try to make
            everything optimized so that applications should work in smooth
            behavior.
          </p>
        </motion.div>
        <SocialIcons />
      </div>
      <div className="flex flex-row items-center gap-4 sm:px-[70px] px-[30px] sm:pb-0 pb-[30px]">
        <Link
          to="/portfolio"
          className="sm:px-[25xpx] sm:py-[10px] px-[18px] py-[8px] border-[2px] text-white transition ease-in-out duration-500 hover:bg-white hover:text-[#275f31] font-semibold"
        >
          Portfolio
        </Link>
        <Link
          to="/experience"
          className="sm:px-[25xpx] sm:py-[10px] px-[18px] py-[8px] border-[2px] text-white transition ease-in-out duration-500 hover:bg-white hover:text-[#275f31] font-semibold"
        >
          Experience
        </Link>
      </div>
      <div className="sm:block hidden">
        <div className="border-r-[3px] border-[#39B54A] h-[150px] flex justify-end items-baseline relative right-[100px]">
          <div
            className="flex flex-row items-center gap-3 pr-[20px]"
            onClick={() => {
              scrollRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <BsChevronDown className="text-white text-[15px]" />
            <span className="text-white text-[12px]">SCROLL DOWN</span>
          </div>
        </div>
      </div>
      <MainSkills scrollRef={scrollRef} />
      <Footer />
    </>
  );
};

export default Home;
