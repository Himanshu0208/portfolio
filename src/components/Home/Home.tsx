"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
export default function Home() {
  return(
    <section className="h-screen">
      <div className="flex w-full h-full">
        <div className="w-2/3 flex flex-col justify-center items-start text-4xl pl-20 ml-20">
          <span className="text-6xl">Hi, I&apos;m <span className='font-extrabold text-[#810CA8]'>Himanshu</span></span>
          <span className='mt-5'>
            My Expertise are
            <span className='text-[#C147E9]'>
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
        </div>
        <div >
          <Image 
            className='hidden lg:block fixed z-[-1] bottom-0 right-6 '
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