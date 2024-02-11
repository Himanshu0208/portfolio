"use client";

import { useScroll, motion, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

export default function Project({    
  title,
  description, 
  imageUrl,
  tags 
} : {
  title: string,
  description: string, 
  imageUrl : StaticImageData,
  tags : string[] 
}) {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  })

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale:scaleProgess,
        opacity: opacityProgess
      }}   
      className="group"
    >
    <section className="bg-gray-100 max-w-[42rem] h-[20rem] border border-black/5 mx-auto mb-3 sm:mb-10 last:mb-0 first:mt-10 overflow-hidden relative hover:bg-gray-200 transition">
      <div className="pt-4 pb-7 px-5 h-full sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col group-even:ml-[23rem] group-odd:mr-[23rem]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-[14px] text-gray-800">{description}</p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {
              tags.map((tag, index) => (
                <li key={index} className="bg-black/[0.7] text-[0.7rem] uppercase text-white px-3 py-1 rounded-full">{tag}</li>
              )) 
            }
          </ul>
        </div>
        <Image src={imageUrl} alt={title} className="absolute top-8 right-[-17rem] w-[35rem] rounded-lg shadow-2xl transition group-even:right-[initial group-even:-left-[17rem] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-[1.05] group-hover:-rotate-3 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"/>
    </section>
    </motion.div>
  )
}