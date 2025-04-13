import { MdArrowForward } from "react-icons/md";
import { mostPopular } from "../../../lib/constants/hero";
const Deals = () => {
  return (
    <div className="flex flex-col items-center text-textColor bg-background py-12">
      <h3 className="flex items-center gap-1 text-xl text-primary font-semibold">
        {mostPopular.icon}
        {mostPopular.title}
      </h3>
      <p className="text-3xl font-bold">{mostPopular.subtitle}</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 w-full xl:w-3/4 2xl:w-2/3 px-12">
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
                  {Array.from({ length: 5 - calification }).map((_, index) => (
                    <span key={index} className="text-background-dark/30">
                      {mostPopular.star}
                    </span>
                  ))}
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
    </div>
  );
};

export default Deals;
