import React from "react";
import hanad from "../assets/4.jpg";
import {
  FiGithub,
  FiFacebook,
  FiTwitter,
  FiSmartphone,
  FiMail,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="relative flex gap-5">
      <div className="sticky top-0 left-0 bg-[#000000] w-fit h-fit rounded-[1rem] overflow-hidden p-4">
        <div className="w-[14rem] max-w-[27rem] h-[15rem] mx-auto mt-5">
          <img
            src={hanad}
            alt="hanad-mohamed"
            // width={250}
            // height={10}
            className="rounded-[1.5rem] w-full h-full object-cover"
          />
        </div>
        <h1 className="text-white text-center mt-2 text-xl font-bold">
          Hanad Mohamed
        </h1>
        <div className="mt-2 flex justify-center ">
          <span className="text-sm bg-[#2a2a2a]  rounded-md py-1 px-2 text-white font-mono font-medium">
            MERN stack Dev
          </span>
        </div>
        <div className="flex justify-center items-center gap-3 mt-5">
          <div className="bg-[#2a2a2a] rounded-md p-3 cursor-pointer">
            <FiGithub className="text-white" />
          </div>
          <div className="bg-[#2a2a2a] rounded-md p-3 cursor-pointer">
            <FiFacebook className="text-blue-600" />
          </div>
          <div className="bg-[#2a2a2a] rounded-md p-3 cursor-pointer">
            <FiTwitter className="text-blue-400" />
          </div>
        </div>
        <div className="w-full bg-[#1d1d1d] min-w-[20rem] mt-8 py-10 px-2 rounded-[1rem]">
          <div className="flex items-center gap-2 border-b border-[#a6a6a654] pb-3">
            <div className="bg-[#000000] p-2 rounded-lg">
              <FiSmartphone className="text-red-400 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#a6a6a6] text-sm">phone</p>
              <p className="text-white text-sm">252 614488101</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b border-[#a6a6a654] mt-3 pb-3 ">
            <div className="bg-[#000000] p-2 rounded-lg">
              <FiMail className="text-green-400 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#a6a6a6] text-sm">Email</p>
              <p className="text-white text-sm">hanaddaahir124@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b mt-3 border-[#a6a6a654] pb-3">
            <div className="bg-[#000000] p-2 rounded-lg">
              <FiMapPin className="text-pink-400 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[#a6a6a6] text-sm">Location</p>
              <p className="text-white text-sm">Mogadishu, Somalia</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-5">
          <div className="flex justify-center items-center px-10 py-4 rounded-md cursor-pointer gap-2 bg-blue-500">
            <FiDownload className="text-white w-5 h-5" />
            <p>
              {" "}
              <a
                href="https://drive.google.com/file/d/1H6J0rQb4g9jLZQ3x3iKjH3b8H1O2fzL9/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                Download CV
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
