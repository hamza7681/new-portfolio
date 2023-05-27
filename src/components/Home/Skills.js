import React, { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { FaHtml5, FaServer } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";
import { ProgressBar } from "primereact/progressbar";
import { homeSkills1, homeSkills2, homeSkills3 } from "../../utils/HomeSkills";
import hover from "../../assets/cursor.png";

const MainSkills = ({ scrollRef }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  return (
    <>
      <div className="w-full bg-[#39B54A] py-[30px] sm:py-0 sm:pb-[140px]">
        <div className="sm:block hidden">
          <div className="border-r-[3px] border-white h-[150px] flex justify-end items-baseline relative right-[100px]"></div>
        </div>
        <div
          className="flex justify-center items-center pt-[20px] pb-[60px]"
          ref={scrollRef}
        >
          <h1 className="text-[28px] uppercase tracking-wider border-b-[1px] border-b-white pb-[4px]">
            Skills
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col w-full justify-between gap-2 px-[30px]">
          <div className="sm:w-1/3 w-full">
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={ref1}
            >
              <FrontSide
                style={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  borderWidth: 1,
                  borderColor: "gray",
                }}
                onMouseEnter={() => {
                  ref1.current.toggle();
                }}
              >
                <div className="h-[310px] flex flex-col gap-3 justify-center items-center">
                  <FaHtml5 className="text-[36px]" />
                  <h1 className="font-semibold">Front End Technologies</h1>
                  <div className="flex flex-row items-center">
                    <img src={hover} alt="hover" className="icon w-[25px]" />
                    <p className="text-orange-400 underline italic  sm:block hidden">
                      Hover me
                    </p>
                    <p className="text-orange-400 underline italic  sm:hidden block">
                      Click me
                    </p>
                  </div>
                </div>
              </FrontSide>
              <BackSide
                style={{ backgroundColor: "#175852", borderRadius: "6px" }}
                onMouseLeave={() => ref1.current.toggle()}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-col gap-3 w-full">
                    {homeSkills1.map((val) => {
                      return (
                        <>
                          <div className="flex flex-col">
                            <div className="flex flex-row justify-between items-center">
                              <div className="flex flex-row items-center gap-3">
                                <p className="text-[13px] text-white">
                                  {val.name}
                                </p>
                                <div className="flex flex-row items-center gap-2">
                                  <p className="text-white">{val.icon1}</p>
                                  <p className="text-white">{val.icon2}</p>
                                </div>
                              </div>
                              <p className="text-[13px] text-white">
                                {val.percentage}%
                              </p>
                            </div>
                            <ProgressBar
                              showValue={false}
                              style={{ height: "10px" }}
                              value={val.percentage}
                            ></ProgressBar>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </BackSide>
            </Flippy>
          </div>
          <div className="sm:w-1/3 w-full">
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={ref2}
            >
              <FrontSide
                style={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  borderWidth: 1,
                  borderColor: "gray",
                }}
                onMouseEnter={() => {
                  ref2.current.toggle();
                }}
              >
                <div className="h-[310px] flex flex-col gap-3 justify-center items-center">
                  <FaServer className="text-[36px]" />
                  <h1 className="font-semibold text-center">
                    Back End Technologies
                  </h1>
                  <div className="flex flex-row items-center">
                    <img src={hover} alt="hover" className="icon w-[25px]" />
                    <p className="text-orange-400 underline italic  sm:block hidden">
                      Hover me
                    </p>
                    <p className="text-orange-400 underline italic  sm:hidden block">
                      Click me
                    </p>
                  </div>
                </div>
              </FrontSide>
              <BackSide
                style={{ backgroundColor: "#175852", borderRadius: "6px" }}
                onMouseLeave={() => ref2.current.toggle()}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-col gap-3 w-full">
                    {homeSkills2.map((val) => {
                      return (
                        <>
                          <div className="flex flex-col">
                            <div className="flex flex-row justify-between items-center">
                              <div className="flex flex-row items-center gap-3">
                                <p className="text-[13px] text-white">
                                  {val.name}
                                </p>
                                <p className="text-white">{val.icon1}</p>
                              </div>
                              <p className="text-[13px] text-white">
                                {val.percentage}%
                              </p>
                            </div>
                            <ProgressBar
                              showValue={false}
                              style={{ height: "10px" }}
                              value={val.percentage}
                            ></ProgressBar>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </BackSide>
            </Flippy>
          </div>
          <div className="sm:w-1/3 w-full">
            <Flippy
              flipOnHover={false}
              flipOnClick={true}
              flipDirection="horizontal"
              ref={ref3}
            >
              <FrontSide
                style={{
                  backgroundColor: "white",
                  borderRadius: "6px",
                  borderWidth: 1,
                  borderColor: "gray",
                }}
                onMouseEnter={() => {
                  ref3.current.toggle();
                }}
              >
                <div className="h-[310px] flex flex-col gap-3 justify-center items-center">
                  <BsDatabaseFillGear className="text-[36px]" />
                  <h1 className="font-semibold text-center">Databases</h1>
                  <div className="flex flex-row items-center">
                    <img src={hover} alt="hover" className="icon w-[25px]" />
                    <p className="text-orange-400 underline italic  sm:block hidden">
                      Hover me
                    </p>
                    <p className="text-orange-400 underline italic  sm:hidden block">
                      Click me
                    </p>
                  </div>
                </div>
              </FrontSide>
              <BackSide
                style={{ backgroundColor: "#175852" }}
                onMouseLeave={() => ref3.current.toggle()}
              >
                <div className="flex justify-center items-center w-full h-full">
                  <div className="flex flex-col gap-3 w-full">
                    {homeSkills3.map((val) => {
                      return (
                        <>
                          <div className="flex flex-col">
                            <div className="flex flex-row justify-between items-center">
                              <div className="flex flex-row items-center gap-3">
                                <p className="text-[13px] text-white">
                                  {val.name}
                                </p>
                                <p className="text-white">{val.icon1}</p>
                              </div>
                              <p className="text-[13px] text-white">
                                {val.percentage}%
                              </p>
                            </div>
                            <ProgressBar
                              showValue={false}
                              style={{ height: "10px" }}
                              value={val.percentage}
                            ></ProgressBar>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </BackSide>
            </Flippy>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSkills;
