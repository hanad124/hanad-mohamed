import { Link } from "react-router-dom";
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
      <div className="sticky top-0 left-0 bg-white dark:bg-[#000000]  dark:border dark:border-[#f6f1f120] w-full md:w-fit h-fit rounded-[1rem] overflow-hidden p-4 mb-10">
        <div className="w-full md:w-[14rem] md:max-w-[27rem] h-[15rem] mx-auto mt-5">
          <img
            src={hanad}
            alt="hanad-mohamed"
            className="rounded-[1rem] w-[14rem] mx-auto max-w-[15rem] md:w-full h-full object-cover"
          />
        </div>
        <h1 className="text-slate-600 dark:text-white text-center mt-2 text-xl tracking-widest font-bold">
          Hanad Mohamed
        </h1>
        <div className="mt-2 flex justify-center ">
          <span className="text-sm bg-[#f3f6f6] dark:bg-[#2a2a2a]  rounded-md py-2 px-4 text-slate-600 dark:text-white font-mono font-medium">
            MERN stack Dev
          </span>
        </div>
        <div className="flex justify-center items-center gap-3 mt-5">
          <Link to="https://github.com/hanad124" target="_blank">
            <div className="bg-[#f3f6f6] dark:bg-[#2a2a2a] rounded-md p-3 cursor-pointer">
              <FiGithub className="text-slate-700 dark:text-white" />
            </div>
          </Link>
          <Link to="https://www.facebook.com/hanad.faaruuq" target="_blank">
            <div className="bg-[#f3f6f6] dark:bg-[#2a2a2a] rounded-md p-3 cursor-pointer">
              <FiFacebook className="text-blue-600" />
            </div>
          </Link>
          <Link to="#" target="_blank">
            <div className="bg-[#f3f6f6] dark:bg-[#2a2a2a] rounded-md p-3 cursor-pointer">
              <FiTwitter className="text-blue-400" />
            </div>
          </Link>
        </div>
        <div className="w-full bg-[#f3f6f6] dark:bg-[#1d1d1d] min-w-[20rem] mt-8 py-10 px-2 rounded-[1rem]">
          <div className="flex items-center gap-2 border-b border-[#a6a6a654] pb-3">
            <div className="bg-[#fff] dark:bg-[#000000] shadow dark:shadow-none p-2 rounded-lg">
              <FiSmartphone className="text-red-400 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-400 dark:text-[#a6a6a6] text-sm">
                phone
              </p>
              <p className="text-slate-600 dark:text-white text-sm">
                252 614488101
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b border-[#a6a6a654] mt-3 pb-3 ">
            <div className="bg-[#fff] dark:bg-[#000000] shadow dark:shadow-none p-2 rounded-lg">
              <FiMail className="text-green-400 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-400 dark:text-[#a6a6a6] text-sm">
                Email
              </p>
              <p className="text-slate-600 dark:text-white text-sm">
                hanaddaahir124@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-b mt-3 border-[#a6a6a654] pb-3">
            <div className="bg-[#fff] dark:bg-[#000000] shadow dark:shadow-none  p-2 rounded-lg">
              <FiMapPin className="text-pink-400 w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-400 dark:text-[#a6a6a6] text-sm">
                Location
              </p>
              <p className="text-slate-600 dark:text-white text-sm">
                Mogadishu, Somalia
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 mb-5">
          <Link
            to={"/hanad.pdf"}
            target="_blank"
            download={true}
            className="text-white"
          >
            <div className="flex justify-center items-center px-10 py-4 rounded-md cursor-pointer gap-2 bg-blue-500">
              <FiDownload className="text-white w-5 h-5" />
              <p> Download CV</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
