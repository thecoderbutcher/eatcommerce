 import { MdArrowForward } from "react-icons/md"
import { offers } from "../../../lib/constants/hero"

const Offers = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-8 py-12 lg:gap-4 lg:px-4 xl:px-12 text-textColor bg-background">
        {offers.map(({price, condition, title, img}) => (
            <div key={title} className="flex items-center justify-between odd:bg-primary even:bg-accent p-4 rounded-2xl">
                <div className="flex flex-col gap-2 px-0 2xl:px-1">
                    <p className="text-xl lg:text-lg font-semibold">{price}</p>
                    <p className="text-2xl lg:text-xl font-bold">{title}</p>
                    <p className="text-sm">{condition}</p>
                    <button className="flex justify-center items-center gap-2 p-2 text-lg lg:text-base bg-white text-primary font-semibold rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                        Order Now
                        <MdArrowForward />
                    </button>
                </div> 
                <img src={img} alt={title}  className="w-1/2 object-cover"/>
            </div>
        ))}
    </div>
  )
}

export default Offers