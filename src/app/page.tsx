import About from "@/components/About/About";
import Home from "@/components/Home/Home";
import Project from "@/components/Projects/Projects";
import Qualification from "@/components/Qualifications/Qualifications";
import Skills from "@/components/Skills/Skills";

export default function Main() {
  return (
    <main>
      <Home />
      <About />
      <Qualification />
      <Skills />
      <Project />
    </main>
  );
}
