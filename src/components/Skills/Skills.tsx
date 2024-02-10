import Skill from "./Skill";
import Card from "./Card";

export default function Skills() {
  const skills = [
    {
      name: "Web Devlopment",
      skill: [
        { name: "next", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" },
        { name: "vite", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
        { name: "Type Script", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
        { name: "react", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
        { name: "tailwind", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      ]
    },
    {
      name: "Machine Learning",
      skill: [
        { name: "Python", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
        { name: "Flask", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
        { name: "TensorFlow", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/TensorFlow_logo.svg" },
        { name: "SkLearn", percentage: 100, url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "SciPy", percentage: 100, url: "" },
      ]
    },
    {
      name: "Data Base",
      skill: [
        { name: "Mongo DB", percentage: 100, url: "/assets/MongoDB_Logomark_SpringGreen.png" },
        { name: "My SQL", percentage: 100, url: "https://labs.mysql.com/common/logos/mysql-logo.svg" },
      ]
    }
]
  return(
    <section className="h-screen bg-white">
      <div className="flex flex-col items-center">
        <div id="heading" className="mt-[100px]">
          <div id="Heading" className="flex flex-col items-center">
              <h2 className="text-4xl font-semibold">Skills</h2>
              <span className="text-gray-400 ">My Expertise</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly mt-10">
        {
          skills.map((data) => {
            return <Card 
              key={data.name}
              name={data.name}
              skill_set={data.skill}
            />
          })
        }
      </div>
    </section>
  )
}