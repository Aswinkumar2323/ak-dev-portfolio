import { useEffect } from "react";
//import CustomCursor from "@/components/CustomCursor";
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

const Index = () => {
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="relative min-h-screen">
   {/*   <CustomCursor /> */}
      <ParticleBackground />
      <Navigation />
      <main id="home">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <AboutMe />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
