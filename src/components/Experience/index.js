import React, { useState } from "react";
import SideMenu from "./SideMenu";
import logo1 from "../../assets/Raheem.png";
import logo2 from "../../assets/Alayzone.PNG";
import TabsContent from "./TabsContent";
import Footer from "../Footer";

const Experience = () => {
  const [show, setShow] = useState(false);
  const [newIndex, setNewIndex] = useState(0);
  const companies = [
    {
      name: "Raheem Solutions (Pvt) Ltd.",
      img: logo1,
    },
    {
      name: "Alayzone Software",
      img: logo2,
    },
  ];
  return (
    <>
      <div className="w-full p-[10px] md:p-[30px] flex flex-col gap-3 md:flex-row">
        <div className={`${show ? "w-[300px]" : " w-full md:w-fit"} h-fit `}>
          <SideMenu
            show={show}
            setShow={setShow}
            companies={companies}
            newIndex={newIndex}
            setNewIndex={setNewIndex}
          />
        </div>
        <div className="w-full">
          <TabsContent index={newIndex} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Experience;
