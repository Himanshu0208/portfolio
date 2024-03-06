import { skillsData } from "../data/data"
import Skill from "./Skill"

type TSkill = {
  name: (typeof skillsData)[number]['name'],
  skill: (typeof skillsData)[number]['skill']
}
export default function Card({
  name,
  skill,
}:TSkill) {

  return (
    <div className="w-[350px] border-2 border-[--color-purple-dark] rounded-xl py-6 px-3 dark:bg-[--color-purple-dark]">
      <h2 className="text-base md:text-xl mb-5">{name}</h2>
      <div className="flex flex-col gap-2">
        { skill.map((s) => {
          return <Skill 
            key={s.name} 
            url={s.url} name={s.name} 
            percentage={100}
          />
        }) }
      </div>
    </div>
  )
}