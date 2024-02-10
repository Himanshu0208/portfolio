import {FaFileDownload} from "react-icons/fa"
import Image from "next/image"

export default function About() {
  return (
    <section className="h-screen bg-white">
      <div className="w-full h-full flex">
        <div id="about-written" className="flex flex-col pl-20 ml-10 mt-10 justify-center items-start w-1/2">
          <div id="Heading" className="flex flex-col items-center">
            <h2 className="text-4xl font-semibold">About Me</h2>
            <span className="text-gray-400 ">My Introduction</span>
          </div>
          <div id="content" className="w-full">
            <p className="mt-5 mb-2">
              Hi, I am a consistent learner and a fellow who believes in the practical application of everything that I learn. Currently, I am pursuing my B tech degree from <span className="text-[#810CA8]">JC Bose UST</span>  and have a keen interest in <span className="text-[#810CA8]">Machine Learning,  Data Structures and Algorithms, and Web Development.</span> 
            </p>
            <p className="mb-2">
              As a CS engineer with a good academic record & interest in computers, I&apos;ve worked on several exciting projects that showcase my technical proficiency & creativity.
            </p>
            <p className="mb-2">
              Here are some of the technology that I love to work with : <span className="text-[#EE872B]"> Python, SkLearn, Pandas, SciPy, TensorFlow, ReactJS, JavaScript, CSS 3, NodeJs, C++, </span> 
            </p>
            <p className="mb-2">
              I love to debug and help out people in <span className="text-[#810CA8]">finding bugs</span> in their codes. I love to execute a <span className="text-[#810CA8]">given task with perfection</span> and I&apos;m here to contribute my bit to this world of programming.
            </p>
          </div>
          <button className="mt-4 px-5 py-2 rounded-lg bg-[#810CA8] text-white flex gap-2 items-center">Resume <FaFileDownload/></button>
        </div>
        <div id="image-cointainer" className="hidden md:block">
            <div className="relative left-[70px] top-[150px]">
              <Image
                className="rounded-3xl w-[400px] z[-1]"
                src="/assets/background.jpg"
                width={400}
                height={450}
                alt="background" 
                />
            </div>
            <div className="relative left-[130px] bottom-[250px]">
              <Image
                className="z-[-1]"
                src="/assets/me-about-removebg.png"
                width={300}
                height={350}
                alt="My Image" 
              /> 
            </div>
        </div>
      </div>
    </section>
  )
}