"use client"

import Card from "./Card";
import { skillsData } from "../data/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Skills() {
  const {ref, inView} = useInView({threshold: 0.50})
  const {setActiveSection} = useActiveSectionContext();

  if(inView) {
    setActiveSection("Skills");
  }
  
  return(
    <section ref={ref} id="skills"  className="min-h-screen bg-white dark:bg-[--dark-mode-back-ground] text-xs md:text-base ">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="flex flex-col items-center">
          <div id="heading" className="mt-[100px]">
            <div id="Heading" className="flex flex-col items-center">
                <h2 className="text-2xl md:text-4xl font-semibold overflow-y-hidden">Skills</h2>
                <span className="text-gray-400 ">My Expertise</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-10 mx-[40px] md:mx-[80px] gap-10 justify-center">
          {
            skillsData.map((data, index) => {
              return <Card 
              key={index}
              name={data.name}
              skill={data.skill}
              />
            })
          }
        </div>
      </div>
    </section>
  )
}

function useSectionInView(arg0: string): { ref: any; } {
  throw new Error("Function not implemented.");
}
