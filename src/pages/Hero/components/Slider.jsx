import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { principalHero } from "../../../lib/constants/hero";
import PropTypes from 'prop-types';
import { MdArrowForward } from "react-icons/md";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === principalHero.content.length - 1 ? 0 : prevIndex + 1
            );
        }, 8000); // Cambia cada 8 segundos

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, []);

    return (
        <div style={{backgroundImage: `url(${principalHero.backgroundImage})`}}> 
            <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-background-dark/70">
                <AnimatePresence >
                    <motion.div
                        key={principalHero.content[currentIndex].menu}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="absolute w-full h-full flex items-center justify-around" 
                        >
                        <div className="flex flex-col items-start gap-8 px-4" >
                            <h1 className="text-3xl font-extrabold text-accent">{principalHero.title}</h1>
                            <h2 className="text-8xl font-bold text-white">
                                {principalHero.content[currentIndex].menu}
                            </h2>
                            <button className="flex justify-center items-center gap-2 p-2 text-lg bg-white text-primary font-semibold rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                                Order Now 
                                <MdArrowForward />
                            </button>
                        </div>
                        <img
                            src={principalHero.content[currentIndex].img}
                            alt={principalHero.content[currentIndex].menu}
                            className=" object-contain rounded-lg shadow-lg hidden sm:block"
                            />
                        
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

Slider.propTypes = {
    sliderData: PropTypes.arrayOf(
        PropTypes.shape({
            menu: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired
        })
    ).isRequired
};

export default Slider;