import React from "react";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import Footer from "../Footer/index";
import Map from "./Map"

const data = [
  {
    id: 1,
    title: "Address",
    description: "P-106A, Sector A, DHA Phase 6, Lahore",
    icon: GoLocation,
  },
  {
    id: 2,
    title: "Phone",
    description: "+92 311 7110211",
    icon: FiPhone,
  },
  {
    id: 1,
    title: "Email",
    description: "hamzambf@gmail.com",
    icon: HiOutlineMail,
  },
];

const Contact = () => {
  return (
    <>
      <div className="w-full flex justify-center content-center">
        <button className="text-white p-6 rounded-sm border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... border-white hover:text-black hover:bg-white">
          Get In Touch
        </button>
      </div>
      <div className="flex lg:flex-row flex-col w-auto mx-10 lg:mx-14 mt-10 gap-3 items-center justify-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="p-8 mb-4 rounded w-full lg:w-1/4 bg-gray-500 h-48 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer"
          >
            <div className="flex items-center justify-center mb-2">
              {React.createElement(item.icon, {
                size: 55,
                className: "text-[#275f31] mr-2",
              })}
            </div>
            <div>
              <h3 className="text-white text-lg font-bold flex text-center justify-center">
                {item.title}
              </h3>
            </div>
            <p className="text-white flex text-center justify-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <Map />
      <Footer />
    </>
  );
};

export default Contact;
