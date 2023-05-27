import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const SocialIcons = () => {
  return (
    <>
      <div className="absolute right-[25px] flex-col gap-4 hidden sm:flex">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hamza-siddique-b90253130/"
          className="border-[1px] border-white p-[10px] rounded-full"
        >
          <BsLinkedin className="text-white text-[18px]" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hamza7681"
          className="border-[1px] border-white p-[10px] rounded-full"
        >
          <BsGithub className="text-white text-[18px]" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.upwork.com/freelancers/~018035b359da09c454"
          className="border-[1px] border-white p-[10px] rounded-full"
        >
          <SiUpwork className="text-white text-[18px]" />
        </a>
      </div>
    </>
  );
};

export default SocialIcons;
