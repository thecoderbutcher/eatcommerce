import { MdArrowForward } from "react-icons/md"
import { specialFood } from "../../../lib/constants/hero" 
const SpecialFood = () => {
  return (
    <div style={{backgroundImage: `url(${specialFood.background})`}}> 
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:justify-between px-8 xl:justify-around 2xl:justify-center  text-textColor bg-background-dark/80 py-8" >
            <div className="relative 2xl:pr-10">
                <img src={specialFood.img} alt="SpecialFood"/>
                <p className="flex justify-center items-center text-4xl text-center text-white font-bold   absolute -top-4 -left-10 bg-accent rounded-full w-30 h-30">
                    40% OFF
                </p>
            </div> 
            <div className="flex flex-col gap-4 ">
                <h3 className="text-3xl text-primary font-semibold">{specialFood.title}</h3>
                <p className="text-5xl text-white font-extrabold">{specialFood.subtitle}</p>
                <p className="text-2xl text-accent-dark font-semibold">{specialFood.condition}</p>
                <button className="hidden sm:flex justify-center items-center gap-2 p-2 bg-primary text-white rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Order Now
                    <MdArrowForward />
                </button>
            </div>
        </div>
    </div>
  )
}

export default SpecialFood