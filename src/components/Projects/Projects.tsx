import Project from "./Project"
import { projectData } from "../data/data"
import React from "react"

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="h-full w-full max-w[1000px] mx-auto">
        <div id="Heading" className="flex flex-col items-center pt-[100px]">
          <h2 className="text-4xl font-semibold">Projects</h2>
          <span className="text-gray-400">My Most Recent Work</span>
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