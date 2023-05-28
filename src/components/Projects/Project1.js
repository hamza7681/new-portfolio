import React from "react";
import ReactPlayer from "react-player";
import pic1 from "../../assets/Client/Student/Home.png";
import pic2 from "../../assets/Client/Student/register.png";
import pic3 from "../../assets/Client/Student/chating.png";
import pic4 from "../../assets/Client/Student/courses.png";
import pic5 from "../../assets/Client/Tutor/add.png";
import pic6 from "../../assets/Admin-Panel/dashboard.png";
import pic7 from "../../assets/Admin-Panel/Categories - Infinity Institute.png";
import pic8 from "../../assets/Admin-Panel/Contacts - Infinity Institute.png";
import pic9 from "../../assets/Admin-Panel/Notifications - Infinity Institute.png";
import pic10 from "../../assets/Admin-Panel/Feedbacks - Infinity Institute.png";
import pic11 from "../../assets/Admin-Panel/Students - Infinity Institute.png";
import GlobalModal from "../../reuseAbles/GlobalModal";
import { Accordion, AccordionTab } from "primereact/accordion";
import video1 from "../../assets/Client/Student/Vedio.mp4";
import video2 from "../../assets/Client/Tutor/Vedio.mp4";
import video3 from "../../assets/Admin-Panel/Vedio.mp4";

const Project1 = ({ scrollRef1 }) => {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState(null);

  const handleImage = (pic) => {
    setImage(pic);
    setOpen(true);
  };

  return (
    <div className="h-auto sm:px-[50px] px-[20px]" ref={scrollRef1}>
      <GlobalModal open={open} setOpen={setOpen} image={image} />
      <Accordion activeIndex={0}>
        <AccordionTab header="Infinity Institute" contentClassName="tab-panel">
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <p className="sm:text-[15px] text-[13px] text-white text-justify">
                Infinity is a website which will make students to enhance their
                skills. Our vision is to provide education irrespective of
                boundaries. Our vision is to provide an accessible, flexible,
                and high-quality education to students of all ages and
                backgrounds, regardless of their location or schedule. Our goal
                is to provide wider range of courses at one platform.This
                project contain two User interfaces, One for Visiting Users and
                other one is for Admin which is known as Admin Panel.
              </p>
              <a
                href="https://github.com/hamza7681/FYP-infinity"
                target="_blank"
                rel="noreferrer"
                className="text-white font-semibold sm:text-[15px] text-[13px]"
              >
                <span>Github:</span>{" "}
                <span className="underline text-orange-500">
                  {" "}
                  https://github.com/hamza7681/FYP-infinity
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
                      ReactJs
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      React Routing
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Tailwind CSS
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Material UI
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Framer Motion
                    </li>
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Redux
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
                    <li className="text-white sm:text-[15px] text-[13px]">
                      Socket IO (Web Sockets)
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
              <p className="sm:text-[15px] text-[13px] text-white">
                This project contain 2 User Interfaces, User Interface for
                Visitors or Register Users and User Interface for Admin
              </p>
            </div>
            <div className="px-[20px] pt-[20px] flex flex-col gap-3">
              <ul className="list-disc list-inside">
                <li className="font-semibold text-white">User Visiting Side</li>
              </ul>
              <div className="flex justify-center items-center pt-[20px] pb-[60px]">
                <h1 className="sm:text-[20px] text-white text-[14px] border-b-[3px] border-b-orange-400 pb-[4px]">
                  Videos
                </h1>
              </div>
              <div className="w-full flex sm:flex-row flex-col justify-around gap-3">
                <div className="sm:w-1/2 w-full rounded-[10px] border-[1px] h-[300px] sm:h-auto flex justify-center items-center flex-col overflow-hidden shadow-2xl">
                  <ReactPlayer
                    url={video1}
                    playing={true}
                    controls={true}
                    width="100%"
                  />
                  <h1 className="text-center sm:py-[20px] font-semibold sm:text-[16px] text-[14px] py-[15px]">
                    Login as Student
                  </h1>
                </div>
                <div className="sm:w-1/2 w-full rounded-[10px] border-[1px] h-[300px] sm:h-auto flex justify-center items-center flex-col overflow-hidden shadow-2xl">
                  <ReactPlayer
                    url={video2}
                    playing={true}
                    controls={true}
                    width="100%"
                  />
                  <h1 className="text-center sm:py-[20px] font-semibold sm:text-[16px] text-[14px] py-[15px]">
                    Login as Tutor
                  </h1>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center pt-[60px] pb-[60px]">
                  <h1 className="sm:text-[20px] text-[14px] border-b-[3px] text-white border-b-orange-400 pb-[4px]">
                    Gallery
                  </h1>
                </div>
                <div className="flex sm:flex-row flex-col gap-3  justify-between">
                  <div className="sm:w-1/2 w-full gap-3 flex flex-col">
                    <div className="parent relative h-[200px] sm:h-[306px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img src={pic1} alt="pic1" className="w-full scale-125" />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] sm:h-[306px] bg-black">
                        <button
                          onClick={() => handleImage(pic1)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="parent relative h-[200px] sm:h-[306px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img src={pic5} alt="pic1" className="w-full scale-125" />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] sm:h-[306px] bg-black">
                        <button
                          onClick={() => handleImage(pic5)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="sm:w-1/2 w-full gap-3 flex flex-col">
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic2}
                        alt="pic1"
                        className="w-full sm:scale-125 scale-150"
                      />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic2)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic3}
                        alt="pic1"
                        className="w-full sm:scale-100 scale-150"
                      />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic3)}
                          className="border-[2px] border-white px-[14px] rounded-[2px] py-[5px] transition ease-in-out duration-500 hover:bg-white hover:text-black text-white"
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="parent relative h-[200px] w-full overflow-hidden shadow-2xl border-[1px] rounded-[7px]">
                      <img
                        src={pic4}
                        alt="pic1"
                        className="w-full sm:scale-125 scale-150"
                      />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic4)}
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
                    href="https://drive.google.com/drive/folders/1dMFyKJtuzyav2KOjWKCrjUixNpPTfwz2?usp=share_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    More Photos
                  </a>
                </div>
              </div>
              <ul className="list-disc list-inside">
                <li className="font-semibold text-white">Admin Panel Side</li>
              </ul>
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
                      <img src={pic6} alt="pic1" className="w-full scale-125" />
                      <div className="absolute child top-0 w-full flex justify-center items-center h-[200px] bg-black">
                        <button
                          onClick={() => handleImage(pic6)}
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
                        src={pic10}
                        alt="pic1"
                        className="w-full sm:scale-125 scale-150"
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
                  </div>
                </div>
                <div className="py-[40px] flex justify-center items-center">
                  <a
                    className="bg-red-500 text-white px-[15px] py-[8px] rounded-[7px]"
                    href="https://drive.google.com/drive/folders/1dXlEOjIdRpGAG6tiYZltDh62jaF1kebc?usp=share_link"
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

export default Project1;
