import { MdOutlineLunchDining, MdArrowForward } from "react-icons/md";  
import { socialLinks, quickLinks, ourMenu, schedules, contact } from "../lib/constants/footer";
const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-background-dark"> 
        <div className="flex flex-col lg:flex-row gap-4 text-start justify-around bg-accent rounded-lg p-8 mx-4 my-4"> 
          {contact.map(({ icon, title, data }) => (
            <div key={title} className="flex items-center gap-4">
                <span className="text-4xl">{icon}</span>
                <div className="flex flex-col gap-1">
                  <p className="text-xl font-semibold">{title}</p>
                  <p className="text-lg ">{data}</p>
                </div>
            </div>
          ))}
        </div>
        {/* Social Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 content-start items-start just">
          <div className="flex flex-col gap-4 py-4 px-2">
            <p className="flex items-center gap-2 text-3xl">
              <MdOutlineLunchDining />
              <span>EatCommerce</span>
            </p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus inventore aperiam dolores odio.</p>
            <div className="flex gap-2 text-2xl">
              {socialLinks.map(({ icon, link }) => (
                <a key={link} href={link}>{icon}</a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col py-4 gap-2">
            <h3 className="text-2xl font-semibold">{quickLinks.title}</h3>
            <ul className="flex flex-col gap-2 font-light">
              {quickLinks.links.map(({ title, link }) => (
                <li key={title}>
                  <a href={link}>{title}</a>
                </li>
              ))} 
            </ul>
          </div>
          {/* Menu Food Links */}
          <div className="flex flex-col py-4 gap-2"> 
            <h3 className="text-2xl font-semibold">{ourMenu.title}</h3>
            <ul className="flex flex-col gap-2 font-light"> 
              {ourMenu.links.map(({ title, link }) => (
                <li key={title}>
                    <a href={link}>{title}</a>
                  </li>
              ))}
            </ul>
          </div>
          {/* Newsletter & Schedules */} 
          <div className="flex flex-col py-4 gap-2"> 
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            {schedules.map(({ days, hours }) => (
              <div key={days} className="flex gap-4">
                <p className="font-semibold text-white/60">{days}</p>
                <p className="font-semibold text-accent/90">{hours}</p>
              </div>
            ))}  
            
            <div className="flex py-4">
              <form action="">
                <div className="bg-white/90  rounded-lg flex items-center gap-2 p-2">
                  <input type="text" placeholder="Your email address" className="text-textColor outline-none" />
                  <span className="text-white bg-accent p-2 rounded-lg font-semibold text-xl"><MdArrowForward /></span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center w-full bg-primary p-4 md:px-12">
          <p className="text-base">© All Copyright 2024 by EatCommerce</p>
          <div className="flex gap-4">
            <a className="border border-white rounded-lg px-4 py-2">Terms & Conditions</a>
            <a className="border border-white rounded-lg px-4 py-2">Privacy Policy</a>
          </div>
        </div>
    </footer>
  )
}

export default Footer