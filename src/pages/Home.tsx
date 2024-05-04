// ** React imports ***

// ** Components Imports **
import Sidebar from "@/components/Sidebar";
import { HomeTabs } from "../components/index";
import Header from "@/components/Header";
import lightBg from "../assets/bg-light.svg";
import darkBg from "../assets/bg-dark.svg";
import { useTheme } from "@/components/theme-provide";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div
      className="px-[.5rem] md:px-[3rem] 
    bg-cover bg-top bg-no-repeat
    "
      style={{
        backgroundImage: `url(${theme === "light" ? lightBg : darkBg})`,
      }}
    >
      <Header />
      <div className="w-full flex flex-col md:flex-row gap-6 mt-6">
        <Sidebar />
        <HomeTabs />
      </div>
    </div>
  );
};

export default Home;
