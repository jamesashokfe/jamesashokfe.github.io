import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

export default function Portfolio() {
  return (
    <div className="antialiased text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 flex flex-col md:flex-row">
      <LeftPane />
      <RightPane />
    </div>
  );
}
