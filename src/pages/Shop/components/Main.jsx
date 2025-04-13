import { FaListUl, FaGrip } from "react-icons/fa6";
import FeaturesCategory from "../../Hero/components/FeaturesCategory";
import { MdArrowForward } from "react-icons/md";
import { mostPopular } from "../../../lib/constants/hero";
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
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-12 py-8 text-textColor">
          {mostPopular.deals.map(
            ({ title, price, condition, img, calification }) => (
              <div key={title} className="flex flex-col w-full items-center ">
                <img
                  src={img}
                  alt={title}
                  className="w-[200px] h-[200px] object-cover relative top-8 border-dashed border-2 border-primary rounded-full shadow-lg shadow-background-dark/50"
                />
                <div className="flex flex-col w-full items-center gap-1 mt-2 text-center bg-white px-12 py-8 rounded-lg shadow-xl">
                  <p className="text-xl font-semibold">{title}</p>
                  <div className="flex">
                    {Array.from({ length: calification }).map((_, index) => (
                      <span key={index} className="text-accent">
                        {mostPopular.star}
                      </span>
                    ))}
                    {Array.from({ length: 5 - calification }).map(
                      (_, index) => (
                        <span key={index} className="text-background-dark/30">
                          {mostPopular.star}
                        </span>
                      )
                    )}
                  </div>
                  <p className="text-2xl font-semibold">{price}</p>
                  <p className="text-base font-light">{condition}</p>
                  <button className="hidden sm:flex justify-center items-center gap-2 p-2 bg-primary text-white rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Order Now
                    <MdArrowForward />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <FeaturesCategory />
      </div>
    </div>
  );
};

export default Main;
