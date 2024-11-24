" use client "
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


export default function Portfolio() {
  return (
    <main className="relative">
     <Nav />
    <section 
    className="">
      <Hero  />
    </section>
    <section className="">
      <Skills />
    </section>
    <section className="">
      <Projects /> 
    </section>
    <section className="">
      <Testimonials />
    </section>
    <section className="">
      <Contact /> 
    </section>
    <section className="">
      <Footer /> 
    </section>
    </main>
  );
}
