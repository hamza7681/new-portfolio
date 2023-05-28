import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import SidebarDrawer from "./SidebarDrawer";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className=" flex flex-row justify-between items-center sm:px-[50px] px-[10px] py-[30px]">
        <div>
          <img
            src={logo}
            alt="logo"
            className="relative top-[-8px] w-[150px]"
          />
        </div>
        <div
          className="fixed right-[20px] sm:top-[20px] cursor-pointer z-[10] top-[30px] flex flex-row gap-2 items-center bg-black px-[10px] py-[8px]"
          onClick={() => setShow(true)}
        >
          <p className="text-[#275f31] tracking-wider font-bold text-[13px]">
            MENU
          </p>
          <FaBars className="text-white text-[22px]" />
        </div>
        <SidebarDrawer show={show} setShow={setShow} />
      </nav>
    </>
  );
};

export default Header;
