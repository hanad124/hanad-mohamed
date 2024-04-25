// ** Third party imports **
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ** Components imports **
import { About, Experience, Projects, Contact } from "./index";
import { useTheme } from "@/components/theme-provide";

//  ** React-icons imports **
import { FaRegUser } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdOutlineContactSupport, MdOutlineWorkOutline } from "react-icons/md";
const HomeTabs = () => {
  const { theme } = useTheme();

  return (
    <Tabs defaultValue="About" className="w-full space-y-5 my-[1rem]">
      <div className="">
        <div className="flex justify-end">
          <TabsList
            className={`${
              theme === "light" ? "bg-[#f9f9f9]" : "bg-[#000000]"
            }  w-full md:w-[76%] gap-4 min-h-[8rem] flex flex-row px-10 rounded-[1rem] dark:border dark:border-[#a6a6a651] shadow-none`}
          >
            <TabsTrigger
              value="About"
              className="w-full flex flex-col gap-y-2 justify-evenly items-center p-2 py-4 rounded-lg"
            >
              <FaRegUser size={16} className=" w-6 h-6" />
              <span>About</span>
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="w-full flex flex-col gap-y-2 justify-evenly items-center p-2 py-4 rounded-lg"
            >
              <MdOutlineWorkOutline size={16} className=" w-6 h-6" />
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="w-full flex flex-col gap-y-2 justify-evenly items-center p-2 py-4 rounded-lg"
            >
              <BsCodeSlash size={18} className=" w-6 h-6" />
              <span>Projects</span>
            </TabsTrigger>
            <TabsTrigger
              value="Contact"
              className="w-full flex flex-col gap-y-2 justify-evenly items-center p-2 py-4 rounded-lg"
            >
              <MdOutlineContactSupport size={18} className=" w-6 h-6" />
              <span>Contact</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </div>
      <TabsContent value="About" className="border-none rounded-[1rem] ">
        <About />
      </TabsContent>
      <TabsContent value="experience">
        <Experience />
      </TabsContent>
      <TabsContent value="projects">
        <Projects />
      </TabsContent>
      <TabsContent value="Contact">
        <Contact />
      </TabsContent>
    </Tabs>
  );
};

export default HomeTabs;
