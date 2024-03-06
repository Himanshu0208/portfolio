"use client"
import {motion} from "framer-motion"
import  { links } from "@/components/data/data"
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import clsx from "clsx"
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

export default function Header() {
  const {activeSection, setActiveSection} = useActiveSectionContext();
  const {setTheme, theme} = useTheme();

  return(
    <header className="fixed w-screen z-[--z-navbar] bg-white dark:bg-[--dark-mode-back-ground] bg-opacity-80  backdrop-blur-[0.5rem]">
      <motion.div className="flex w-full justify-between py-3 max-w-[1000px] mx-auto" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <h1 className="text-sm px-1 md:text-base font-bold text-[#C147E9]"><Link href="#home">Himanshu</Link></h1>
          <ul className="md:flex w-12/12 justify-between text-md font-semibold md:w-6/12 max-w-[680px]">
            {
              links.map(link => (
                <li key={link.hash} className={clsx(
                  "hover:text-[--color-purple-light] hidden md:inline-block",
                  {
                    "text-[--color-purple-light]" : activeSection === link.name
                  }
                  )}
                  
                  onClick={() => setActiveSection(link.name)}
                >

                  <Link href={link.hash}>
                    {link.name}
                  </Link>
                </li>
              ))
            }
            {
              theme === "light" ? <li onClick={() => setTheme("dark")} className="w-[25px] hover:text-[--color-purple-light] block"><FiMoon size={24}/></li> : <li onClick={() => setTheme("light")} className="w-[25px] hover:text-[--color-purple-light] block"><FiSun size={24}/></li>
            }
            
          </ul>
      </motion.div>
    </header>
  )
}