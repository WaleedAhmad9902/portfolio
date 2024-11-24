"use client";
import Image from "next/image";
import data from "../sections/data"; // Adjust path based on file location

const Skills = () => {
  return (
    <>
      <section className="h-auto w-full lg:w-full md:w-full sm:w-full pb-28 bg-pink-50 ">
      <div className="relative py-8">
  {/* Line and Heading Container */}
  <div className="flex items-center gap-4 ml-10">
    {/* Line */}
    <div className="w-[70px] h-[2px] bg-black"></div>

    {/* Heading */}
    <h2 className="text-3xl font-sans font-bold" id="skills">
      My Skills
    </h2>
  </div>

  {/* Description */}
  <p
    className="mt-6 ml-10 text-gray-600 text-left text-sm md:text-base md:max-w-[500px]"
  >
   As a skilled web developer, I specialize in building dynamic and responsive web applications using HTML, CSS, JavaScript, React, and Tailwind CSS. My expertise lies in creating high-performance, user-centric interfaces while ensuring seamless integration of frontend and backend functionalities. With a focus on modern web practices and responsive design, I strive to deliver scalable solutions that meet both client and industry standards.
  </p>
</div>





{/* Skills Section Images */}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-8">
  {data.map((skill, index) => (
    <div
      key={index}
      className="bg-[#DCDCDC] rounded-lg shadow-md p-6 flex flex-col items-center transition-transform duration-300 hover:scale-110 hover:shadow-xl"
    >
      <Image
        src={skill.image}
        width={130}
        height={130} // Ensure image is proportional
        alt={skill.name} // Dynamic alt text for accessibility
        className="object-contain"
      />
      <p className="mt-4 text-center text-sm font-medium text-[#181818]">
        {skill.name}
      </p>
    </div>
  ))}
</div>





        {/* Education and Experience Section  inside Skills*/}
        <div className="container mt-6 px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Section  */}
            <div>
              <h2 className="text-2xl font-bold border-b-2 border-black inline-block mb-6">
                My Education
              </h2>

              <div className="flex items-start mb-10 group">
                <div className="relative">
                  {/* Top Circle */}
                  <div
                    className="absolute w-3 h-3 ring-2 ring-black bg-black rounded-full mt-2 mr-4
                 group-hover:bg-white transition-colors duration-300"
                  ></div>
                  <div>
                    {/* Vertical Line */}
                    <div className="absolute top-5 left-[6px] w-[2px] h-[121px] bg-gray-400"></div>
                  </div>

                  <div className="ml-8">
                    <h3 className="font-xl font-sans text-gray-600 mb-2">
                      Punjab College - {" "}
                      <span className="text-black opacity-60 font-bold">2020</span>
                    </h3>
                    <h4 className="text-base font-bold">FSC Pre-Engineering</h4>
                    <p className="text-sm text-gray-600">

                      Board of Intermediate & Secondary
                      Education Lahore-Pakistan. Major Course -Pre-Engineering
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-10 group">
                <div className="relative">

                  <div
                    className="absolute w-3 h-3 ring-2 ring-black bg-black rounded-full mt-2 mr-4 
                  group-hover:bg-white transition-colors duration-300"></div>
                  <div>

                    <div>
                      {/* Vertical Line */}
                      <div className="absolute top-5 left-[6px] w-[2px] h-[121px] bg-gray-400"></div>
                    </div>

                    <div className="ml-8">
                      <h3 className="font-xl font-sans text-gray-600 mb-2">
                        Minhaj University Lahore -{" "}
                        <span className="text-black opacity-60 font-bold">2005</span>
                      </h3>
                      <h4 className="text-base font-bold">Bachelor's Degree</h4>
                      <p className="text-sm text-gray-600">
                      I hold a Bachelor's degree in Software Engineering from Minhaj University Lahore, graduating with a commendable CGPA of 3.20.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section inside skills */}
            <div>
              <h2 className="text-2xl font-bold border-b-2 border-black inline-block mb-6">
                My Experience
              </h2>
              <div className="flex items-start mb-10 group">
                <div className="relative">
                  <div
                    className="absolute w-3 h-3 ring-2 ring-black bg-black rounded-full mt-2 mr-4 
            group-hover:bg-white transition-colors duration-300"
                  ></div>
                  <div>

                    <div>
                      {/* Vertical Line */}
                      <div className="absolute top-5 left-[6px] w-[2px] h-[121px] bg-gray-400 "></div>
                    </div>

                    <div className="ml-8">
                      <h3 className="font-xl font-sans text-gray-600 mb-2">
                        POA Solutions -{" "}
                        <span className="text-black opacity-60 font-bold">2024 - Present</span>
                      </h3>
                      <h4 className="text-base font-bold">Front-End Developer</h4>
                      <p className="text-sm text-gray-600">
                      I have been Working as a Front-End Developer at POA Solutions since 2024. I have been working on various projects and have gained a lot of experience in Front-End Development.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start mb-10 group">
                <div className="relative">
                  <div
                    className="absolute w-3 h-3 ring-2 ring-black bg-black rounded-full mt-2 mr-4 
            group-hover:bg-white transition-colors duration-300"
                  ></div>
                  <div>
                    <div>
                      {/* Vertical Line */}
                      <div className="absolute top-5 left-[6px] w-[2px] h-[121px] bg-gray-400"></div>
                    </div>
                    {/* <div className="ml-8">
                      <h3 className="font-xl font-sans text-gray-600 mb-2">
                        ThemeForest -{" "}
                        <span className="text-black opacity-60 font-bold">2015 - 2017</span>
                      </h3>
                      <h4 className="text-base font-bold">UX/UI Designer</h4>
                      <p className="text-sm text-gray-600">
                        Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan
                        a, consectetuer eget, posuere ut, mauris.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Skills;
