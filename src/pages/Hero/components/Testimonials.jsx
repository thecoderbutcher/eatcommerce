'use client'
import { motion } from "framer-motion";
import { testimonials } from "../../../lib/constants/hero"
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev +1) % testimonials.testimonial.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center items-center px-10 py-8 bg-background">
      <div className="order-1 lg:order-2">
        <img src={testimonials.image} alt={testimonials.title} className="rounded-full border-accent border-4 border-dashed"/>
      </div>
      <div className="order-2 lg:order-1 text-textColor flex flex-col gap-4">
        <h2 className="flex gap-1 items-center text-2xl font-bold">
          {testimonials.icon}
          {testimonials.title}
        </h2>
        <p className="text-4xl font-bold capitalize">{testimonials.subtitle}</p>
        <div className="relative w-full max-w-lg mx-auto text-center overflow-hidden"> 
          <motion.div 
            key={testimonials.testimonial[index].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 justify-center items-center p-8 bg-gray-100/40 rounded-2xl shadow-2xl"
          >
            <p className="font-light">{testimonials.testimonial[index].text}</p>
            <img src={testimonials.testimonial[index].img} alt="" className="w-[100px] h-[100px] object-contain rounded-full"/>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials