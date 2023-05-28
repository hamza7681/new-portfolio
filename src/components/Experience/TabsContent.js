import React from "react";
import {
  backendAlayzone,
  backendRaheem,
  databases,
  frontEndRaheem,
  frontendAlayzone,
} from "../../utils/TechnologiesIcons";
import { motion } from "framer-motion";
import { ListAnimate } from "../../animations";

const Raheem = () => {
  return (
    <>
      <div className=" p-[10px] md:p-[30px] contact-card rounded-[15px]">
        <h1 className="bg-transparent text-white text-[22px] md:text-[40px] font-semibold ">
          Raheem Solution (Pvt) Ltd.
        </h1>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Location:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Johar Town, Lahore
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Job Position:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Software Engineer
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Stack:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            Full Stack (JavaScript)
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Duration:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            26 September 2022 - Present
          </p>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Technologies:
          </h1>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Front End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {frontEndRaheem.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Back End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {backendRaheem.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Databases
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {databases.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Experience:
          </h1>
          <motion.ul
            variants={ListAnimate}
            initial="hidden"
            whileInView="show"
            className="bg-transparent "
          >
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Working on Course Management System from Scratch. This project is
              made in MERN Stack with Real-Time Chatting using Web Sockets named
              as Socket IO.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Maintaining Angular Product of Raheem Solutions known as
              "SalesAssist", a Distribution System for different high scale
              companies like Nestle Pakistan
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Maintaining Angular Project of Crowd Funding named as Eureeca.
              Following is the link{" "}
              <a
                className="text-black font-bold underline"
                target="_blank"
                href="https://eureeca.com/home"
                rel="noreferrer"
              >
                https://eureeca.com/home
              </a>
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on Product Management system using Vue as a front end and
              Node JS as a backend using Fastify which is Framework of Node Js
              and Prisma which is ORM used for performing CRUD operation in
              Databases.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Created APIs in NodeJs (ExpressJs) for different functionalities
              in Company Projects
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

const Alayzone = () => {
  return (
    <>
      <div className=" p-[10px] md:p-[30px] contact-card rounded-[15px]">
        <h1 className="bg-transparent text-white text-[22px] md:text-[40px] font-semibold ">
          Alayzone Software House
        </h1>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Location:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Nazimabad, Faisalabad
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Job Position:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] ml-[10px] bg-transparent">
            Junior Software Engineer
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Stack:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            MERN Stack (JavaScript)
          </p>
        </div>
        <div className="bg-transparent mt-[10px]">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent">
            Duration:
          </h1>
          <p className="text-orange-400 text-[16px] md:text-[20px] bg-transparent">
            15 December 2021 - 20 September 2022
          </p>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Technologies:
          </h1>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Front End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {frontendAlayzone.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Back End Technologies
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              {backendAlayzone.map((val, index) => {
                return (
                  <div
                    className="bg-transparent relative cursor-pointer"
                    key={index}
                  >
                    {val.icon}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                    >
                      <p className="text-orange-600 text-[13px] font-bold">
                        {val.name}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-transparent px-[10px]">
            <h1 className="bg-transparent text-orange-400 text-[16px] md:text-[20px] font-semibold  ">
              Databases
            </h1>
            <div className="flex flex-row flex-wrap bg-transparent gap-3 md:gap-10 my-[15px]">
              <div className="bg-transparent relative cursor-pointer">
                {databases[0].icon}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="px-[10px] py-[3px] rounded-[3px] absolute -top-[10px] z-10 left-[10px] cursor-pointer"
                >
                  <p className="text-orange-600 text-[13px] font-bold">
                    {databases[0].name}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent">
          <h1 className="text-white text-[18px] md:text-[24px] font-semibold bg-transparent mt-[10px]">
            Experience:
          </h1>
          <motion.ul
            variants={ListAnimate}
            initial="hidden"
            whileInView="show"
            className="bg-transparent "
          >
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on Role Base Authentication and Two-Way Authentication with
              MERN Development.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Worked on company project. Integrated Firebase in front end to use
              it as Backend Service.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Create Ecommerce Web App using ReactJs. The state management in
              this app done by using Redux and backend for this app is created
              in NodeJs (expressJs) with MongoDB as database. The payment method
              was used in this module using Stripe.
            </li>
            <li className="bg-[rgba(207,207,207,0.3)] p-[10px] rounded-[10px] text-white text-justify mt-[10px]">
              Created APIs in NodeJs (ExpressJs) for different functionalities
              in Company Projects
            </li>
          </motion.ul>
        </div>
      </div>
    </>
  );
};

const ShowTabs = ({ index }) => {
  if (index === 0) {
    return <Raheem />;
  }
  if (index === 1) {
    return <Alayzone />;
  }
};

const TabsContent = ({ index }) => {
  return (
    <>
      <div className="">
        <ShowTabs index={index} />
      </div>
    </>
  );
};

export default TabsContent;
