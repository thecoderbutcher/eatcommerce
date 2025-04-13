import Hero from "../../pages/Hero";
import Contact from "../../pages/Contact";
import AboutUs from "../../pages/AboutUs";
import Shop from "../../pages/Shop";
export const ROUTES = {
    en:[
        {path:"/eatcommerce", element:<Hero/>, label:"Home"},
        {path:"/eatcommerce/about", element:<AboutUs />, label:"About us"},
        {path:"/eatcommerce/shop", element:<Shop />, label:"Shop"},
        {path:"/eatcommerce/contact", element:<Contact/>, label:"Contact"},
    ], 
}
