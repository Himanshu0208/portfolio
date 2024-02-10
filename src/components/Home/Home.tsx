"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { FaArrowCircleRight } from "react-icons/fa"
export default function Home() {
  return(
    <section className="h-screen">
      <div className="flex w-full h-full max-w-[1000px] mx-auto">
        <div className="w-1/2 flex flex-col justify-center items-start ml-[80px]">
          <span className="text-4xl font-bold">Hi, I&apos;m <span className='text-[--color-purple-dark]'>Himanshu</span></span>
          <span className='mt-2 text-xl opacity-70 font-semibold'>
            My Expertise are
            <span className='text-[--color-purple-dark]'>
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
          <span className='mt-4 w-2/3 text-slate-500'>I build Full Stack Web Application, Machine learning and Deep Learning Models for solving real world problems</span>
          <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[--color-purple-dark] text-white mt-4 hover:bg-[--color-purple-light]'>Contact Me <FaArrowCircleRight /></button>
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