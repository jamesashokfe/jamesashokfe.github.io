import ThemeToggle from "./ThemeToggle";
import Navigation from "./Navigation";
import MiniProfile from "./MiniProfile";

const LeftPane = () => {
  return (
    <div className="md:w-1/3 md:fixed md:h-screen bg-gray-100 dark:bg-gray-800 px-8 py-12 flex flex-col lg:justify-center items-center text-center">
      <MiniProfile />
      <Navigation />
      <ThemeToggle />
    </div>
  );
};

export default LeftPane;
