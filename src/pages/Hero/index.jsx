import About from "./components/About";
import Deals from "./components/Deals";
import FeaturesCategory from "./components/FeaturesCategory";
import Offers from "./components/Offers";
import Slider from "./components/Slider";
import SpecialFood from "./components/SpecialFood";
import OurChef from "./components/OurChef";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Slider /> 
      <Offers /> 
      <About />
      <Deals />
      <SpecialFood />
      <FeaturesCategory/> 
      <OurChef />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Hero