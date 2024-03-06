"use client"
import {FaFileDownload} from "react-icons/fa"
import Image from "next/image"
import  { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from "@/context/ActiveSectionContext"
// import {saveAs} from "file-saver"

export default function About() {
  const { ref, inView } = useInView({threshold: 0.60});
  const {setActiveSection} = useActiveSectionContext();

  if(inView) {
    setActiveSection("About");
  }

  // const savefile = () => {
  //   saveAs("http://localhost:3000/assets/Resume.pdf", "himanshu_resume.pdf")
  // }
  return (
    <section ref={ref} id="about" className="min-h-screen bg-white dark:bg-[--dark-mode-back-ground]">
      <div className="w-full h-full flex flex-col md:flex-row max-w-[1000px] mx-auto justify-center">
        <div id="about-written" className="flex flex-col mt-10 justify-center items-start px-5 md:w-1/2">
          <div id="Heading" className="flex flex-col items-center mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold overflow-y-hidden">About Me</h2>
                <span className="text-gray-400 text-xs md:text-base">My Introduction</span>
          </div>
          <div id="image-cointainer" className="w-screen md:hidden">
            <Image
              className="bg-[--color-purple-dark] my-[10px] rounded-xl mx-auto"
              src="/assets/me2.png"
              width={150}
              height={200}
              alt="My Image" 
            /> 

          </div>

          <div id="content" className="w-full text-xs md:text-base">
            <p className="mt-5 mb-2">
              Hi, I am a consistent learner and a fellow who believes in the practical application of everything that I learn. Currently, I am pursuing my B tech degree from <span className="text-[--color-purple-dark] dark:text-[--color-purple-light]">JC Bose UST</span>  and have a keen interest in <span className="text-[--color-purple-dark] dark:text-[--color-purple-light]">Machine Learning,  Data Structures and Algorithms, and Web Development.</span> 
            </p>
            <p className="mb-2">
              As a CS engineer with a good academic record & interest in computers, I&apos;ve worked on several exciting projects that showcase my technical proficiency & creativity.
            </p>
            <p className="mb-2">
              Here are some of the technology that I love to work with : <span className="text-[#EE872B]"> Python, SkLearn, Pandas, SciPy, TensorFlow, ReactJS, JavaScript, CSS 3, NodeJs, C++, </span> 
            </p>
            <p className="mb-2">
              I love to debug and help out people in <span className="text-[--color-purple-dark] dark:text-[--color-purple-light]">finding bugs</span> in their codes. I love to execute a <span className="text-[--color-purple-dark] dark:text-[--color-purple-light]">given task with perfection</span> and I&apos;m here to contribute my bit to this world of programming.
            </p>
          </div>
          <a href="/assests/resume.pdf" download>
          <button className="mt-4 px-5 py-2 rounded-lg bg-[#810CA8] text-white flex gap-2 items-center hover:bg-[--color-purple-light]">Resume <FaFileDownload/></button>
          </a>
        </div>

        <div id="image-cointainer" className="hidden md:block relative md:h-[475px] ml-10 rounded-2xl my-auto">
              <div className="">
                <Image
                  className="md:z-[-1] bg-[--color-purple-dark] rounded-2xl mt-[50px]"
                  src="/assets/me2.png"
                  width={250}
                  height={300}
                  alt="My Image" 
                /> 
              </div>
        </div>
      </div>
    </section>
  )
}