import {FaCalendar} from "react-icons/fa"
export default function Degree({ 
  degree,
  university,
  city,
  from,
  to,
  index
} : {
  degree : string,
  university : string,
  city : string,
  from : string,
  to : string,
  index : number
}) {
  return(
    <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex flex-col w-[45%] ${index % 2 === 0 ? 'items-end' : ''}`}>
        <div>
          <h3 className="text-base md:text-xl font-semibold">{degree}</h3>
          <span className="text-xs md:text-base text-gray-500 max-w-[100px]">{university}</span>
          <br />
          <span className="text-xs md:text-base text-gray-500">{city}</span>
          <br />
          <div className="text-xs md:text-base flex items-center text-gray-600">
            <FaCalendar className="text-[--color-purple-dark] mr-3 dark:text-[--color-purple-light]"/>
            {from}-{to} 
          </div>
        </div>
      </div>

      <div className={`flex flex-col w-[10%]`}>
        <span className="w-[10px] h-[10px] rounded-full bg-[--color-purple-dark] mx-auto"></span>
        <span className={`h-full w-[2px] bg-[--color-purple-dark] mx-auto ${index === 2 ? 'hidden' : 'block'}`}></span>
      </div>

      <div className="flex flex-col w-[45%]"></div>
    </div>
  )
}