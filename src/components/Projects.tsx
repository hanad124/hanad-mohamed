// ** React imports ***
import { Link } from "react-router-dom";
// ** Third party imports ***
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { FiGithub } from "react-icons/fi";

const Projects = () => {
  return (
    <Card>
      <CardHeader className="px-10">
        <CardTitle className="flex items-center gap-8">
          <span className="font-bold text-xl md:text-3xl  ">Projects</span>
          <div className="bg-blue-600 w-[4rem] md:w-[14rem] rounded-full py-[2px]"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-10">
        <div className="">
          <div className="flex flex-col gap-x-10 md:flex-row justify-start md:justify-between items-start md:items-center">
            <p className=" text-xl font-semibold">Furqan Constructions</p>
            <Link
              to="https://github.com/hanad124/furqan-constructions"
              target="_blank"
            >
              <div className="flex justify-center items-center mt-3 md:mt-0 px-4 py-2 rounded-md cursor-pointer bg-[#f3f6f6] dark:bg-[#2a2a2a]">
                <span>Check it out</span>
                <FiGithub className="ml-2" />
              </div>
            </Link>
          </div>
          <p className="mt-5 font-light leading-7">
            furqan construction management system is a project that helps you
            manage your construction projects. It is a web-based application
            that allows you to manage your projects, clients, employees, and
            suppliers. It also allows you to track your expenses, generate
            reports, and much more. It is designed to be easy to use and
            flexible, so you can customize it to fit your needs. It is built
            using Next.js, React, and MongoDB.
          </p>
        </div>
        <div className="pt-5">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
            <p className=" text-xl font-semibold">Petrol Management System</p>
            <Link
              to="https://github.com/hanad124/reactjs-petrol-system"
              target="_blank"
            >
              <div className="flex justify-center items-center  mt-3 md:mt-0  px-4 py-2 rounded-md cursor-pointer bg-[#f3f6f6] dark:bg-[#2a2a2a]">
                <span>Check it out</span>
                <FiGithub className="ml-2" />
              </div>
            </Link>
          </div>
          <p className="mt-5 font-light leading-7">
            Petrol management system is a system that helps to manage the petrol
            station. It helps to keep track of the petrol sales, stock, and the
            employees. It also helps to keep track of the customers and the
            suppliers. It also helps to keep track of the expenses and the
            income of the petrol station. authentication is also implemented in
            the system. The system is implemented using reactjs, firebase, and
            material-ui.
          </p>
        </div>
        <div className="pt-5">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
            <p className=" text-xl font-semibold">InvoiceFy</p>
            <Link to="https://github.com/hanad124/invoicefy" target="_blank">
              <div className="flex justify-center items-center mt-3 md:mt-0 px-4 py-2 rounded-md cursor-pointer bg-[#f3f6f6] dark:bg-[#2a2a2a]">
                <span>Check it out</span>
                <FiGithub className="ml-2" />
              </div>
            </Link>
          </div>
          <p className="mt-5 font-light leading-7">
            Invoicefy is a web-based application that allows users to create and
            download invoices in PDF format. Users can also view all invoices,
            track the status of invoices, and manage their profile and settings.
            The application is built using React,Typescript, Node.js, Express,
            and MongoDB. The frontend is built using React and Zustand for state
            management, while the backend is built using Node.js and Express.
            MongoDB is used as the database, and Firebase is used for image
            storage. The application also uses shadcn ui for the design.
          </p>
        </div>
        <div className="pt-5">
          <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center">
            <p className=" text-xl font-semibold">Tik-Tok Video Downloader </p>
            <Link
              to="https://github.com/hanad124/tiktok-video-downloader"
              target="_blank"
            >
              <div className="flex justify-center items-center mt-3 md:mt-0 px-4 py-2 rounded-md cursor-pointer bg-[#f3f6f6] dark:bg-[#2a2a2a]">
                <span>Check it out</span>
                <FiGithub className="ml-2" />
              </div>
            </Link>
          </div>
          <p className="mt-5 font-light leading-7">
            I built this project using{" "}
            <span className="font-medium">
              Next.js 14 server actions & Zustand npm
            </span>{" "}
            and <span className="font-medium">Tailwind CSS</span>, designed to
            streamline the process of downloading TikTok videos by providing a
            user-friendly interface. The web application allows users to
            download TikTok videos swiftly and{" "}
            <span className="font-medium ">without watermarks</span>, ensuring a
            seamless and efficient experience. The project is optimized for
            search engines, ensuring that it ranks well on search engine results
            pages.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
