import { chefes } from "../../../lib/constants/hero"

const OurChef = () => {
  return (
    <div className="flex flex-col text-textColor justify-center items-center gap-4 py-10">
        <h2 className="flex gap-2 items-center text-xl font-bold">
            {chefes.icon}
            {chefes.title}
        </h2>
        <p className="text-4xl font-bold">{chefes.subtitle}</p>
        <div className="flex flex-col lg:flex-row lg:gap-40 ">
            {chefes.chefes.map(({img, name, position}) => (
                <div key={name} className="flex flex-col gap-2 justify-center items-center py-8 ">
                    <img src={img} alt={name} className="w-[250px] shadow-lg shadow-background-dark/50 rounded-full"/>
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-xl font-light">{position}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OurChef