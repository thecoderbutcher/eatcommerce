import Hero from "../../pages/Hero";
import Contact from "../../pages/Contact";
import AboutUs from "../../pages/AboutUs";
import Shop from "../../pages/Shop";
export const ROUTES = {
    en:[
        {path:"/", element:<Hero/>, label:"Home"},
        {path:"/about", element:<AboutUs />, label:"About us"},
        {path:"/shop", element:<Shop />, label:"Shop"},
        {path:"/contact", element:<Contact/>, label:"Contact"},
    ],
    es:[
        {path:"/", element:<Hero/>, label:"Home"},
        {path:"/contact", element:<Contact/>, label:"Contacto"},
    ]
}
