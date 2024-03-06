"use client"

import Project from "./Project"
import { projectData } from "../data/data"
import React from "react"
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";

export default function Projects() {
  const {ref, inView} = useInView({threshold: 0.35})
  const {setActiveSection} = useActiveSectionContext();

  if(inView) {
    setActiveSection("Projects");
  }
  
  return (
    <section ref={ref} id="projects" className="bg-white dark:bg-[--dark-mode-back-ground]">
      <div className="h-full w-full max-w[1000px] mx-auto text-xs md:text-base">
        <div id="Heading" className="flex flex-col items-center pt-[100px]">
          <h2 className="text-2xl md:text-4xl font-semibold overflow-y-hidden">Projects</h2>
          <span className="text-gray-400 mt-2">My Most Recent Work</span>
        </div>
        <div className="mx-auto w-full max-w-[1000px] overflow-hidden">
        {
          projectData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
        </div>
      </div>
    </section>
  )
}