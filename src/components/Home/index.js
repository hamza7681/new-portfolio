import React, { useEffect, useMemo, useState } from "react";
import hi from "../../assets/hello.png";
import { motion } from "framer-motion";
import { introParagraph } from "../../animations";


const Home = () => {
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
      <div className="flex justify-center flex-col items-center sm:px-[70px] px-[30px]  h-screen">
        <p className="sm:text-[38px] text-[22px] text-white">Here's Hamza Siddique</p>
        <p className="text-white sm:text-[40px] text-[23px]">
          A <span className="text-orange-400">{skills[textIndex]} </span>
          Developer
        </p>
        <motion.div
          variants={introParagraph}
          initial="hidden"
          whileInView="show"
          className="px-[20px] py-[30px] my-[30px] shadow-2xl border-[2px] border-white flex flex-col gap-3"
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
      </div>
    </>
  );
};

export default Home;
