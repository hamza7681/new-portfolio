import React from "react";
import ReactPlayer from "react-player";

import pic6 from "../../assets/react-native/1.png";
import pic7 from "../../assets/react-native/2.jpg";
import pic8 from "../../assets/react-native/3.png";
import pic9 from "../../assets/react-native/4.png";
import pic10 from "../../assets/react-native/5.jpg";
import pic11 from "../../assets/react-native/6.jpg";
import { Accordion, AccordionTab } from "primereact/accordion";

import video3 from "../../assets/react-native/video.mp4";
import MobileModal from "../../reuseAbles/MobileModal";

const Project2 = ({ scrollRef2 }) => {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);

  const handleImage = (pic) => {
    setImage(pic);
    setOpen(true);
  };

  return (
    <div className="h-auto sm:px-[50px] px-[20px]" ref={scrollRef2}>
      <MobileModal open={open} setOpen={setOpen} image={image} />
      <Accordion activeIndex={0}>
        <AccordionTab
          header="Basic E-Commerce App"
          contentClassName="tab-panel"
        >
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <p className="sm:text-[15px] text-[13px] text-white text-justify">
                This is basic React Native app which contain some
                functionalities like User Registration and Authentication. User
                can add course into cart and remove from cart on the basis of
                Mobile local storage.
              </p>
              <a
                href="https://github.com/hamza7681/react-native-RnD.git"
                target="_blank"
                rel="noreferrer"
                className="text-white font-semibold sm:text-[15px] text-[13px]"
              >
                <span>Github:</span>{" "}
                <span className="underline text-orange-500">
                  {" "}
                  https://github.com/hamza7681/react-native-RnD.git
                </span>
              </a>
              <h1 className="sm:text-[22px] text-white font-semibold">
                Technologies
              </h1>
              <div className="flex sm:flex-row flex-col w-full justify-between">
                <div className="sm:w-1/3 w-full">
                  <h1 className="text-white font-semibold sm:text-[15px] text-[13px]">
                    Front End Technologies / Stacks:
                  </h1>
                  <ul className="list-disc list-inside ">
                    <li className="text-white sm:text-[15px] text-[13px]">
                      React Native
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      React Navigation
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Async Storage
                    </li>
                  </ul>
                </div>
                <div className="sm:w-1/3 w-full">
                  <h1 className="text-white font-semibold sm:text-[15px] text-[13px]">
                    Back End Technologies / Stacks:
                  </h1>
                  <ul className="list-disc list-inside ">
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Node Js
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Express Js
                    </li>
                  </ul>
                </div>
                <div className="sm:w-1/3 w-full">
                  <h1 className="text-white font-semibold sm:text-[15px] text-[13px]">
                    Databases:
                  </h1>
                  <ul className="list-disc list-inside ">
                    <li className="text-white sm:text-[15px] text-[13px]">
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>
              <h1 className="sm:text-[22px] font-semibold text-white">
                Media & Gallery
              </h1>
            </div>
            <div className="px-[20px] pt-[20px] flex flex-col gap-3">
              <div className="flex justify-center items-center pt-[20px] pb-[60px]">
                <h1 className="sm:text-[20px] text-[14px] text-white border-b-[3px] border-b-orange-400 pb-[4px]">
                  Videos
                </h1>
              </div>
              <div className="w-full flex justify-center items-center">
                <div className=" border-[1px] h-[300px] sm:h-auto flex justify-center items-center flex-col rounded-[10px] w-full sm:w-[800px] overflow-hidden shadow-2xl">
                  <ReactPlayer
                    url={video3}
                    playing={true}
                    controls={true}
                    width="100%"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center pt-[60px] pb-[60px]">
                  <h1 className="sm:text-[20px] text-white text-[14px] border-b-[3px] border-b-orange-400 pb-[4px]">
                    Gallery
                  </h1>
                </div>
                <div className="flex sm:flex-row flex-col gap-3  justify-between">
                  <div className="sm:w-1/2 w-full gap-3 flex flex-col">
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic10}
                        alt="pic1"
                        className="w-full scale-125"
                      />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic10)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img src={pic7} alt="pic1" className="w-full scale-125" />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic7)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic11}
                        alt="pic1"
                        className="w-full scale-125"
                      />
                      <div
                        onClick={() => handleImage(pic11)}
                        className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black"
                      >
                        <button className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full gap-3 flex flex-col">
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic8}
                        alt="pic1"
                        className="w-full sm:scale-125 scale-150"
                      />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic8)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic9}
                        alt="pic1"
                        className="w-full sm:scale-100 scale-150"
                      />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic9)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic6}
                        alt="pic1"
                        className="w-full sm:scale-125 scale-150"
                      />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic6)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-[40px] flex justify-center items-center">
                  <a
                    className="bg-red-500 text-white px-[15px] py-[8px] rounded-[7px]"
                    href="https://drive.google.com/drive/folders/1gIwCaZTy1sv1mxnYU8uI2X7k9_thJDS-?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More Photos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default Project2;
