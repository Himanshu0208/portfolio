"use client"

import { useState } from 'react';
import DayNightToggle from 'react-day-and-night-toggle'

export default function Header() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return(
    <div className="flex flex-row w-screen justify-between px-14 py-3 fixed bg-white z-[10]">
      <h1 className="md:text-xl lg:text-xl font-bold text-[#C147E9]">Himanshu</h1>
      <div className="hidden lg:block lg:w-6/12">
        <ul className="flex w-12/12 justify-between text-lg font-semibold">
          <li className='hover:text-[#C147E9]' onClick={() => console.log("Home")}>Home</li>
          <li className='hover:text-[#C147E9]' onClick={() => console.log("About")}>About</li>
          <li className='hover:text-[#C147E9]' onClick={() => console.log("Skills")}>Skills</li>
          <li className='hover:text-[#C147E9]' onClick={() => console.log("Skills")}>Projects</li>
          <li className='hover:text-[#C147E9]' onClick={() => console.log("Skills")}>Contact Me</li>
          <li className='hover:text-[#C147E9]' onClick={() => console.log("Qualifications")}>Qualification</li>
          <li>
            <DayNightToggle 
              onChange={() => setIsDarkMode(!isDarkMode)} 
              checked={isDarkMode}
              size={25}
              />
          </li>
        </ul>
      </div>
    </div>
  )
}