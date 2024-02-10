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
        className="h-[30px] w-auto max-w-[50px] "
        src={url}
        height={50}
        width={30}
        alt="react icon"
      />
      <span>{name.toUpperCase()}</span>
    </div>

    <div className="w-full h-1 rounded-full bg-[#C147E9]"></div>

  </div>)
    

} 