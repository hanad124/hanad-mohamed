// ** React imports ***

// ** Components Imports **
import Sidebar from "@/components/Sidebar";
import { HomeTabs } from "../components/index";
import Header from "@/components/Header";
import lightBg from "../assets/page-bg-1.jpeg";
import darkBg from "../assets/page-bg-dark-1.jpeg";
import { useTheme } from "@/components/theme-provide";

const Home = () => {
  const { theme } = useTheme();

  return (
    <div
      className="px-[.5rem] md:px-[3rem] 
    bg-cover bg-center bg-no-repeat
    "
      style={{
        backgroundImage: `url(${theme === "light" ? lightBg : darkBg})`,
      }}
    >
      <Header />
      <div className="w-full flex flex-col md:flex-row gap-6">
        <Sidebar />
        <HomeTabs />
      </div>
    </div>
  );
};

export default Home;
