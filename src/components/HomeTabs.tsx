// ** Third party imports **
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ** Components imports **
import { About, Resume, Work, Contact } from "./index";

//  ** React-icons imports **
import { FaRegFileAlt, FaRegUser } from "react-icons/fa";
import { MdOutlineContactSupport, MdOutlineWorkOutline } from "react-icons/md";
const HomeTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px] space-y-5">
      <TabsList className="grid w-full  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <TabsTrigger
          value="About"
          className="w-full flex flex-row justify-evenly items-center p-2"
        >
          <FaRegUser size={16} className="text-blue-800" />
          <span>About</span>
        </TabsTrigger>
        <TabsTrigger
          value="Resume"
          className="w-full flex flex-row justify-evenly items-center p-2"
        >
          <FaRegFileAlt size={16} className="text-blue-800" />
          <span>Resume</span>
        </TabsTrigger>
        <TabsTrigger
          value="Work"
          className="w-full flex flex-row justify-evenly items-center p-2"
        >
          <MdOutlineWorkOutline size={18} className="text-blue-800" />
          <span>Work</span>
        </TabsTrigger>
        <TabsTrigger
          value="Contact"
          className="w-full flex flex-row justify-evenly items-center p-2"
        >
          <MdOutlineContactSupport size={18} className="text-blue-800" />
          <span>Contact</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="About">
        <About />
      </TabsContent>
      <TabsContent value="Resume">
        <Resume />
      </TabsContent>
      <TabsContent value="Work">
        <Work />
      </TabsContent>
      <TabsContent value="Contact">
        <Contact />
      </TabsContent>
    </Tabs>
  );
};

export default HomeTabs;
