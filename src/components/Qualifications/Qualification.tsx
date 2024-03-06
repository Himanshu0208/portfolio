"use client"
import Degree from "./Degree"
import { qualificationData } from "../data/data"
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Qualification() {
  const {ref, inView} = useInView({threshold: 0.50})
  const {setActiveSection} = useActiveSectionContext();

  if(inView) {
    setActiveSection("Qualification");
  }
  
  return (
    <section ref={ref} id="qualification" className="h-screen bg-white dark:bg-[--dark-mode-back-ground]">
      <div className="flex flex-col items-center">
        <div id="heading" className="mt-[100px]">
          <div id="Heading" className="flex flex-col items-center gap-1">
              <h2 className="text-2xl md:text-4xl font-semibold overflow-y-hidden">Qualifications</h2>
              <span className="text-xs md:text-base text-gray-400 ">My Educational Qualifications</span>
          </div>
        </div>

        <div className="w-[80%] max-w-[1000px] mx-auto flex">

            <div className="mx-auto w-full mt-[50px] mb-2 justify-center flex flex-col group">
              { 
                qualificationData.map((details, index) => {
                    return <Degree 
                    key={index}
                    degree={details.degree}
                    university={details.university}
                    city={details.city}
                    from={details.from}
                    to={details.to}
                    index={index}
                />
                })
              }
          </div>
        </div>
      </div>
    </section>
  )
}