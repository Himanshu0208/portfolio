import Image from "next/image"

export default function Skill({  
  url,
  name, 
  percentage 
  } : {
    url: string,
    name: string, 
    percentage:number
  }
) {

  return (
  <div className="flex flex-col">
    <div className="flex justify-between items-center mb-1">
      <Image
        className="h-[15px] md:h-[30px] w-auto max-w-[50px] "
        src={url}
        height={50}
        width={30}
        alt="react icon"
      />
      <span className="capitalize text-xs md:text-base">{name}</span>
    </div>

    <div className="w-full h-1 rounded-full bg-[--color-purple-dark] dark:bg-white"></div>

  </div>)
    

} 