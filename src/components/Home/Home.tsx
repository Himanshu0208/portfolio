"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowCircleRight } from "react-icons/fa"
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/ActiveSectionContext'
import Link from 'next/link'

export default function Home() {
  const {ref, inView} = useInView({threshold: 0.75})
  const {setActiveSection} = useActiveSectionContext();

  if(inView) {
    setActiveSection("Home");
  }
  
  return(
    <section ref={ref} className="h-screen">
      <div className="flex w-full h-full max-w-[1000px] mx-auto">
        <div className="md:w-1/2 flex flex-col justify-center items-start px-4 md:px-0 md:ml-[80px]">
          <span className="text-2xl md:text-4xl font-bold overflow-y-hidden">Hi, I&apos;m <span className='text-[--color-purple-dark] dark:text-[--color-purple-light]'>Himanshu</span></span>
          <span className='mt-2 text-base md:text-xl opacity-70 font-semibold'>
            My Expertise are
            <span className='text-[--color-purple-dark] dark:text-[--color-purple-light]'>
              <TypeAnimation 
                sequence={[
                  " Web Devlopment", 1000,
                  " Machine Learning", 1000,
                  " Data Analysis", 1000,
                ]}
                repeat={Infinity}
                />
            </span>
          </span>
          <span className='text-xs md:text-base mt-4 w-2/3 text-slate-500'>I build Full Stack Web Application, Machine learning and Deep Learning Models for solving real world problems</span>
          <Link href={"#contact"}>
            <button className='flex items-center gap-2 px-2 md:px-4 py-1 md:py-2 text-sm md:text-lg rounded-lg bg-[--color-purple-dark] text-white mt-4 hover:bg-[--color-purple-light]'>Contact Me <FaArrowCircleRight /></button>
          </Link>
        </div>
        <div className='relative'>
          <Image 
            className='hidden lg:block fixed z-[-1] bottom-0 right-10'
            src="/assets/me.png" 
            alt="My Image"
            width={500}
            height={500}
            />
        </div>

      </div>
    </section>
  )
}