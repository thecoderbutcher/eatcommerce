import { FaListUl, FaGrip } from "react-icons/fa6";
import FeaturesCategory from "../../Hero/components/FeaturesCategory";
const Main = () => {
  return (
    <div className="w-3/4 flex flex-col mx-auto px-10 py-10 bg-accent-dark/10">
      <div className="flex justify-between items-center">
        <p className="text-textColor/50">Showing 1- 12 of 30 results</p>
        <div className="flex gap-2 items-center text-textColor">
          <FaListUl className="text-primary" />
          <FaGrip />
        </div>
      </div>
      <div className="flex flex-col">
        <FeaturesCategory />
      </div>
    </div>
  );
};

export default Main;
