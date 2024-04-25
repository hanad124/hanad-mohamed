// ** React imports ***

// ** Third party imports ***
import { BsBookFill, BsStack } from "react-icons/bs";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card>
      <CardHeader className="px-10">
        <CardTitle className="flex items-center gap-8">
          <span className="font-bold text-3xl ">About</span>
          <div className="bg-blue-600 w-[4rem] md:w-[14rem] rounded-full py-[2px]"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-10">
        <p className="font-mono leading-8">
          I'm Hanad Mohamed Dahir, a passionate MERN stack developer driven by a
          desire to create intuitive and impactful web experiences. My technical
          expertise is complemented by a strong work ethic, meticulous attention
          to detail, and a collaborative spirit.
        </p>
        {/* Education */}
        <div className="pt-[1rem]">
          <span className="flex items-center gap-2">
            <BsBookFill className="w-5 h-5" />
            <span className="font-bold text-lg">Education:</span>
          </span>
          <div className="flex flex-col gap-y-2 md:flex-row mt-5 border-b border-[#a6a6a651] pb-5 m:pb-3 font-light">
            <div className="md:border-r pb-[1rem] md:pb-0 border-[#a6a6a651] pr-3">
              <div className="flex justify-between items-center">
                <p>Jubba Primary School</p>
                <p className="font-medium">2013 - 2018</p>
              </div>
              <p className="mt-3">
                This transformative period of my life marked a pivotal juncture
                where I laid the groundwork for my technological prowess
              </p>
            </div>
            <div className="md:pl-3">
              <div className="flex justify-between items-center">
                <p>Jabir Bin-Hayan</p>
                <p className="font-medium">2018 - 2020</p>
              </div>
              <p className="mt-3">
                This crucial phase of my life was instrumental in shaping my
                technological proficiency. It was a time of intensive
                skill-building.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p>Jamhuriya University of Science and Technology</p>
              <p className="font-medium">2020 - 2024</p>
            </div>
            <p className="mt-3 font-light">
              My university education served as a pivotal foundation, where I
              not only built a robust set of technological skills but also
              cultivated a deep-seated fascination with the ever-evolving
              digital landscape.
            </p>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="py-[1rem]">
          <span className="flex items-center gap-2">
            <BsStack className="w-5 h-5" />
            <span className="font-bold text-lg">Tech Stack:</span>
          </span>
          <div className="mt-7 flex flex-wrap gap-10">
            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
            </div>
            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
            </div>
            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
            </div>

            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" />
            </div>
            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            </div>
            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
            </div>
            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
            </div>
            <div className=" w-[3rem]">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
            </div>
          </div>
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

export default About;
