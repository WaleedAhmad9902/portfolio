"use client";
import { useEffect } from "react";
import Image from "next/image";
import projectdata from "../sections/projectdata";

import AOS from "aos"; // Import AOS library 
import "aos/dist/aos.css"; // Import AOS CSS

const Projects = () => {
  useEffect(() => {
    // Initialize AOS on page load
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: false, // Animates only once
    });
  }, []);

  return (
    <>
      <section className="h-auto w-full pb-28">
        <h1 className="text-4xl font-sans font-bold mt-12 text-center" id="projects">
          My All Projects
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-12 mx-10">
          {projectdata.map((proj, ind) => (
            <div
              key={ind}
              className="fp-project-item"
              data-aos="fade-up" // AOS fade-up effect
              data-aos-duration="1000"
              data-aos-delay={ind * 200} // Dynamic delay for each project
            >
             <div style={{ position: 'relative', width: '100%', height: '300px' }}>
  <Image
    src={proj.image}
    alt="projectImg"
    layout="fill"  // Fills the entire container
    objectFit="cover"  // Ensures the image maintains aspect ratio
    className="rounded-xl"
  />
</div>

              <h2 className="font-sans font-bold text-2xl mt-4">{proj.title}</h2>
            </div>
          ))}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Projects;
