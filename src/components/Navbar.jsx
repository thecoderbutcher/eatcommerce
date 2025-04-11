
import { ROUTES } from "../lib/constants/routes";
import { useLang } from "../lib/hooks/useLang"
import { Link } from "react-router-dom"
import { MdShoppingCart, MdArrowForward, MdOutlineLunchDining, MdOutlineSearch } from "react-icons/md"; 
import MenuButton from "./MenuButton";

const Navbar = () => { 
    const { lang } = useLang();
    return (
        <nav className="flex justify-between items-center p-4 bg-primary text-white font-semibold">
            {/* Icon  */}
            <div className="flex justify-center items-end gap-2">
                <span className="text-3xl"><MdOutlineLunchDining /></span>
                <span className="text-xl">EatCommerce</span>

            </div>
            {/* Link */}
            <ul className="hidden lg:flex gap-4 ">
                {ROUTES[lang].map(({ path, label }) => (
                    <li key={label}>
                        <Link to={path}>{label}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-4"> 
                {/* Search */}
                <div className="hidden md:flex items-center gap-2 bg-white/15 border border-white/15 hover:border-white text-white p-2 rounded-lg group transition-all duration-300">
                    <input type="text" placeholder="Search"  className="outline-none" />
                    <MdOutlineSearch className="text-2xl text-white/30 group-hover:text-white" />
                </div>  
                {/* Icons */}
                <button className="p-2 border border-white text-xl rounded-xl hover:scale-110 hover:bg-white hover:text-primary hover:border-white transition-all duration-300 cursor-pointer">
                    <MdShoppingCart />
                </button>
                {/* Order */} 
                <button className="hidden sm:flex justify-center items-center gap-2 p-2 bg-white text-primary rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                    Order Now 
                    <MdArrowForward />
                </button>
                <div className="lg:hidden flex">
                    <MenuButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar