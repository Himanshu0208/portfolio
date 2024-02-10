"use client"

export default function Header() {

  return(
    <div className="fixed w-screen z-[--z-navbar] bg-white">
      <div className="flex w-full justify-between py-3 max-w-[1000px] mx-auto">
        <h1 className="md:text-md font-bold text-[#C147E9]">Himanshu</h1>
          <ul className="md:flex w-12/12 justify-between text-md font-semibold hidden md:w-6/12 max-w-[680px]">
            <li className='hover:text-[#C147E9]' onClick={() => console.log("Home")}>Home</li>
            <li className='hover:text-[#C147E9]' onClick={() => console.log("About")}>About</li>
            <li className='hover:text-[#C147E9]' onClick={() => console.log("Skills")}>Skills</li>
            <li className='hover:text-[#C147E9]' onClick={() => console.log("Skills")}>Projects</li>
            <li className='hover:text-[#C147E9]' onClick={() => console.log("Skills")}>Contact Me</li>
            <li className='hover:text-[#C147E9]' onClick={() => console.log("Qualifications")}>Qualification</li>
          </ul>
      </div>
    </div>
  )
}