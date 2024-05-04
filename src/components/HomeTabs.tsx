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
  return (
    <Tabs defaultValue="About" className="w-full space-y-5 mb-[1rem]">
      <div className="">
        <div className="flex justify-end">
          <TabsList
            className={`bg-background w-full md:w-[76%]  gap-2 md:gap-4 min-h-[6rem] flex flex-row px-10 rounded-[1rem]  border border-slate-100/80 dark:border dark:border-[#f6f1f120] shadow-none`}
          >
            <TabsTrigger
              value="About"
              className="w-full flex gap-3 items-center px-2 py-4 rounded-lg "
            >
              <FaRegUser size={16} className=" md:w-4 md:h-4" />
              <span>About</span>
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="w-full flex gap-3 items-center px-2 py-4 rounded-lg"
            >
              <MdOutlineWorkOutline size={16} className=" md:w-6 md:h-6" />
              <span>Experience</span>
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="w-full flex gap-2 items-center px-2 py-4 rounded-lg"
            >
              <BsCodeSlash size={18} className=" md:w-6 md:h-6" />
              <span className="text-xs">Projects</span>
            </TabsTrigger>
            <TabsTrigger
              value="Contact"
              className="w-full flex gap-2 items-center px-2 py-4 rounded-lg"
            >
              <MdOutlineContactSupport size={18} className=" md:w-6 md:h-6" />
              <span className="text-xs">Contact</span>
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
