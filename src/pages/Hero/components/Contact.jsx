import { contact } from "../../../lib/constants/hero"
const Contact = () => {
  return (
    <div style={{backgroundImage: `url(${contact.img})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="w-full h-full flex justify-center items-center  py-10">
        <div className="flex flex-col justify-center  gap-4 bg-primary rounded-br-full rounded-tr-full p-10 w-full lg:w-1/2">
            <h2 className="flex items-center gap-1 text-xl font-bold">
                {contact.icon}
                {contact.title}
            </h2>
            <p className="text-4xl font-bold">{contact.subtitle}</p>
            <form action="" className="flex flex-col gap-4 w-full pr-20 py-8">
                <div className="flex flex-col lg:flex-row gap-4 text-lg justify-between">
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="date">Select date *</label>
                        <input type="date" name="date" id="" className="bg-white rounded-md text-textColor p-1"/>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="datetime">Select time *</label>
                        <input type="time" name="datetime" id="" className="bg-white rounded-md text-textColor p-1"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="service">Type Of Service *</label>
                    <input type="text" name="service" placeholder="Guest" className="bg-white rounded-md text-textColor p-1"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="message">Your Message</label>
                    <textarea name="message" id="" placeholder="Write your message" className="bg-white rounded-md text-textColor p-1"></textarea>
                </div>
            </form>
        </div>
        <div></div>
        
    </div>
  )
}

export default Contact