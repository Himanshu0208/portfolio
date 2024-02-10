import Skill from "./Skill"

type TSkill = {
  name:string,
  url: string,
  percentage: number
}
export default function Card({
  name,
  skill_set
}:{
  name: string,
  skill_set: TSkill[]
}) {
  return (
    <div className="w-3/12 border-2 border-[--color-purple-dark] rounded-xl shadow-2xl py-6 px-3">
      <h2 className="text-2xl mb-2">{name}</h2>
      <div className="flex flex-col gap-2">
        { skill_set.map((skill) => {
          return <Skill 
            key={skill.name} 
            url={skill.url} name={skill.name} 
            percentage={100}
          />
        }) }
      </div>
    </div>
  )
}