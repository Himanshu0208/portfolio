"use client";

import { useInView } from "react-intersection-observer";
import SubmitButton from "./SubmitButton"
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { sendEmail } from "@/actions/sendEmail";
// import { ToastContainer, toast } from "react-toastify";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({"senderEmail": "", "message": ""});
  const {ref, inView} = useInView({threshold: 0.60})
  const {setActiveSection} = useActiveSectionContext();

  if(inView) {
    setActiveSection("Contact");
  }
  
  return (
    <section ref={ref} id="contact" className="h-screen bg-white dark:bg-[--dark-mode-back-ground]">
      <div className="flex flex-col items-center">
        <div id="heading" className="mt-[100px]">
          <div id="Heading" className="flex flex-col items-center">
              <h2 className="text-2xl md:text-4xl font-semibold overflow-y-hidden">Contact Me</h2>
              <span className="text-gray-400 text-xs md:text-base">Want to connect? My inbox is always open!</span>
          </div>
        </div>

        <section className="w-full flex flex-wrap gap-20 max-w-[1000px] justify-center">
          <div className="text-xs md:text-base md:w-[30%] mt-10 px-5 md:ml-[80px] flex flex-col gap-3"> 
            <p><span className="text-[--color-purple-dark]">Thank you so much</span> for taking out your precious time to visit my portfolio!</p>
            <p>If you have any questions or would like <span className="text-[#EE872B]">to connect with me, please feel free to reach out</span> I&apos;ll do my best to get back to you as soon as possible.</p>
            <p>I&apos;m always interested in new opportunities and collaborations, so <span className="text-[--color-purple-dark]">don&apos;t hesitate to get in touch!</span></p>
          </div>

          <form 
            className="mt-5 md:mt-10 flex flex-col dark:text-black dark:bg-[--dark-mode-back-ground]" 
            action={async (formData) => {
              console.log("Running on client");
              try {
                setForm({"senderEmail": "", "message": ""});
                toast.promise(sendEmail(formData), {
                  loading: "sending Email", 
                  success: "Email Sent", 
                  error: "an error occured"
                })
                formData.set("senderEmail", "");
                formData.set("message", "");
              } catch (error: unknown) {
                toast.error(error as string); 
              }
            }}
          >
            <input
              className="h-14 px-4 rounded-lg borderBlack border-2 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
              onChange={(e) => setForm({...form, "senderEmail": e.target.value})}
              value={form["senderEmail"]}
            />
            <textarea
              className="h-52 my-3 rounded-lg borderBlack border-2 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
              onChange={(e) => setForm({...form, "message": e.target.value})}
              value={form["message"]}
            />
            <SubmitButton />
          </form>
        </section>
      </div>
    </section>
  )
}