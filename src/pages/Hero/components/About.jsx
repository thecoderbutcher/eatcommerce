import { about } from "../../../lib/constants/hero";
const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-center text-textColor gap-4 px-8 xl:px-12 py-12">
      <div className="w-full pr-4">
        <img src={about.img} alt={about.title} className="rounded-br-full rounded-tr-full lg:w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="flex gap-1 items-center text-xl font-bold text-primary">{about.icon} {about.title}</h3>
        <p className="text-4xl font-bold">{about.subtitle}</p>
        <p className="text-lg font-light">{about.description}</p>
      
        <div className="flex flex-col gap-4 ">
          {about.content.map(({icon, title, description}) => (
              <div className="flex gap-2 items-center border-y py-4" key={title}>
                  <span className="text-4xl">{icon}</span>
                  <div className="flex flex-col gap-1">
                      <h4 className="font-semibold">{title}</h4>
                      <p className="text-sm">{description}</p>
                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About