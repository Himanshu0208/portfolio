"use client"
import { createContext, useContext, useState } from "react";
import { links } from "@/components/data/data"

type SectionType = (typeof links)[number]["name"];

type ActiveSectionContextType = {
  activeSection: SectionType,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionType>>
}
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [activeSection, setActiveSection] = useState<SectionType>("Home");

  return (
    <ActiveSectionContext.Provider 
      value={{
        activeSection,
        setActiveSection
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);

  if(context == null) {
    throw new Error("useActiveSectionContext must be used within an ActiveSectionContextProvider")
  }
  return context;
}

