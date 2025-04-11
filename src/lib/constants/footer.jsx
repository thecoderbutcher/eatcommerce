import { FaSquareFacebook, FaSquareTwitter, FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6"; 
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
export const socialLinks = [
    {
        icon: <FaSquareFacebook />,
        link: "https://www.facebook.com/",
    },
    {
        icon: <FaSquareTwitter />,
        link: "https://twitter.com/",
    },
    {
        icon: <FaSquareInstagram />,
        link: "https://www.instagram.com/",
    },
    {
        icon: <FaSquareYoutube />,
        link: "https://www.youtube.com/",
    },
]

export const quickLinks = {
    title: "Quick Links",
    links:[
        {
            title: "About Us",
            link: "/",
        },
        {
            title: "Our Gallery",
            link: "/",
        },
        {
            title: "Our Blog",
            link: "/",
        },
        {
            title: "FAQ'S",
            link: "/",
        },
        {
            title: "Contact Us",
            link: "/",
        },
    ]
}

export const ourMenu = {
    title: "Out Menu",
    links: [
        {
            title: "Pizza Taste",
            link: "/",
        },
        {
            title: "Burger Taste",
            link: "/",
        },
        {
            title: "French Taste",
            link: "/",
        },
        {
            title: "Desserts Taste",
            link: "/",
        },
    ]
}

export const schedules = [
    {days: "Monday - Friday", hours:"8:00 am - 16:00 pm"},
    {days: "Saturday", hours:"8:00 am - 12:00 am"},
]

export const contact = [
    { icon: <MdLocationOn />, title:"Location", data:"1234 Fake Address, Fake Country" },
    { icon: <MdEmail />, title:"Send Email", data:"info@emailexample.com" },
    { icon: <MdPhone />, title:"Call Emergency", data:"+00 1234 567 890"},
]