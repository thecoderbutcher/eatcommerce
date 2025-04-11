'use client'
import { motion } from "framer-motion";
import { featureCategory } from "../../../lib/constants/hero"

const FeaturesCategory = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center bg-background text-textColor p-8">
        <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="flex items-center gap-1 text-xl lg:text-lg text-textColor font-bold">
                {featureCategory.icon}
                {featureCategory.title}
            </h2>
            <h3 className="text-6xl lg:text-4xl font-bold">{featureCategory.subtitle}</h3>
        </div>
        <div className="relative overflow-hidden w-full"> 
            <motion.div 
                className="flex w-max"
                initial={{ x:0 }}
                animate={{ x: "-50%" }}
                transition={{ 
                    ease: "linear",    
                    repeat: Infinity, 
                    duration: 10
                }}
                >
                {[...featureCategory.content, ...featureCategory.content].map(({title, subtitle, img}) => (
                    <div className="flex gap-8 items-center py-4 w-full mx-2" key={title}> 
                        <div className="flex flex-col gap-4 w-full group">
                            <img src={img} alt="" className="w-[250px] h-[250px] object-cover group-hover:scale-105 group-hover:rounded-4xl transition-all duration-300 cursor-pointer"/>
                            <div className="flex flex-col gap-1 justify-center items-center w-full">
                                <h4 className="font-semibold text-xl">{title}</h4>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
  )
}

export default FeaturesCategory