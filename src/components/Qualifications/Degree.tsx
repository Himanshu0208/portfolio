import {FaCalendar} from "react-icons/fa"
export default function Degree({ 
  degree,
  university,
  city,
  from,
  to
} : {
  degree : string,
  university : string,
  city : string,
  from : string,
  to : string
}) {
  return(
    <div className="flex flex-col">
      <h3 className="text-xl font-semibold">{degree}</h3>
      <span className="text-gray-500">{university}</span>
      <span className="text-gray-500">{city}</span>
      <div className="flex items-center text-gray-600">
        <FaCalendar className="text-[--color-purple-dark] mr-3"/>
        {from}-{to} 
      </div>
    </div>
  )
}