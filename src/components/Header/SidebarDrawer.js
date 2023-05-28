import React from "react";
import { Sidebar } from "primereact/sidebar";
import logo from "../../assets/logo.png";
import pic from "../../assets/pic.jpeg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { FaTimes } from "react-icons/fa";

const SidebarDrawer = ({ show, setShow }) => {
  const { pathname } = useLocation();
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <Sidebar
        visible={show}
        position="right"
        onHide={() => setShow(false)}
        style={{ backgroundColor: "black" }}
        showCloseIcon={false}
      >
        <div className="sidebar-div">
          <div
            className="absolute top-[10px] right-[10px] cursor-pointer"
            onClick={() => setShow(false)}
          >
            <FaTimes className="text-white" />
          </div>
          <div className="flex justify-center items-center my-[20px]">
            <img src={logo} alt="logo" className="w-[200px]" />
          </div>
          <div className="flex flex-col gap-6 justify-center items-center py-[30px]">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-[150px] h-[150px] overflow-hidden rounded-full border-[5px] border-white"
            >
              <img src={pic} alt="dp" />
            </motion.div>
            <div className="flex flex-col gap-2 justify-center items-center">
              {routes.map((val, index) => {
                return (
                  <Link
                    className={` w-[200px] font-semibold transition ease-in-out duration-500 hover:bg-white hover:text-black px-[15px] py-[10px] rounded-[3px] ${
                      pathname === val.path
                        ? "bg-white text-black"
                        : "text-white"
                    }`}
                    key={index}
                    to={val.path}
                    onClick={() => setShow(false)}
                  >
                    {val.name}
                  </Link>
                );
              })}
            </div>
            <div className=" flex justify-center items-center bg-[rgba(97,97,97,0.3)] py-[15px] w-full mt-[20px]">
              <div className="flex flex-row gap-5">
                <a
                  whileHover={{ scale: 1.2 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/hamza-siddique-b90253130/"
                >
                  <BsLinkedin className="text-white text-[24px]" />
                </a>
                <a
                  whileHover={{ scale: 1.2 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/hamza7681"
                >
                  <BsGithub className="text-white text-[24px]" />
                </a>
                <a
                  whileHover={{ scale: 1.2 }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.upwork.com/freelancers/~018035b359da09c454"
                >
                  <SiUpwork className="text-white text-[24px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
};

export default SidebarDrawer;
