// ** React imports ***

// ** Third party imports ***
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiFacebook,
  FiTwitter,
  FiChevronRight,
} from "react-icons/fi";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const Experience = () => {
  return (
    <Card>
      <CardHeader className="px-10">
        <CardTitle className="flex items-center gap-8">
          <span className="font-bold text-xl md:text-3xl  ">
            Work Experience
          </span>
          <div className="bg-blue-600 w-[4rem] md:w-[14rem] rounded-full py-[2px]"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-10">
        <div className="">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
            <p className=" text-lg">Mentor/Assistant</p>
            <p className="font-medium  text-lg">
              <Link to="https://www.dugsiiye.so/" target="_blank">
                Dugsiiye Platform
              </Link>
            </p>
            <p className=" text-lg">Feb, 2024 - Current</p>
          </div>
          <p className="mt-5 font-light leading-7">
            As a mentor and guide at the Dugsiiye platform, I have the privilege
            of supporting students on their educational and personal growth
            journeys. Dugsiiye is a vibrant community dedicated to empowering
            learners through personalized mentorship, skill-building workshops,
            and a nurturing environment. In this role, I leverage my knowledge
            and life experiences to provide tailored assistance to the students
            I work with. I take the time to understand each mentee's unique
            aspirations, challenges, and learning preferences.
          </p>
        </div>
        <div className="pt-7">
          <div className="flex flex-col md:flex-row  justify-start md:justify-between items-start md:items-center">
            <p className="text-lg">MERN Stack Developer</p>
            <p className="font-medium text-lg">Freelance</p>
            <p className="text-lg">Apr, 2023 - Current</p>
          </div>
          <p className="mt-5 font-light flex items-center gap-2">
            <FiChevronRight className="w-7 h-7" />
            <span className=" leading-7">
              Partnered with a diverse range of clients, from small startups to
              established enterprises, to design and develop responsive,
              feature-rich web applications.
            </span>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FiChevronRight className="w-7 h-7" />
            <span className=" leading-7 font-light">
              {" "}
              Leveraged the MERN (MongoDB, Express.js, React, Node.js) stack to
              build scalable and high-performing backend systems coupled with
              intuitive user interfaces.
            </span>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FiChevronRight className="w-7 h-7" />
            <span className=" leading-7 font-light">
              Collaborated closely with clients to understand their
              requirements, translate them into technical specifications, and
              deliver solutions that exceeded their expectations.
            </span>
          </p>
        </div>
        <div className="pt-7 pb-5 flex items-center justify-center gap-7">
          <FiFacebook className="text-bue-white w-6 h-6 cursor-pointer" />
          <FiTwitter className="text-bue-white w-6 h-6 cursor-pointer" />
          <FiGithub className="text-bue-white w-6 h-6 cursor-pointer" />
        </div>
        <div className="border-t border-[#a6a6a651] w-full pt-5">
          <p className="text-center text-slate-400">
            <span>© 2024 All Rights Reserved by</span>
            <Link
              to="https://github.com/hanad124"
              target="_blank"
              className="ml-1 font-bold"
            >
              Hanad Mohamed Dahir
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
