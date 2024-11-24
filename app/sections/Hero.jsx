import Image from 'next/image';

import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { RiFacebookCircleFill } from "react-icons/ri";
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section className="h-auto w-full mb-32 pb-10 pt-24 flex flex-col items-center relative px-4 sm:px-8 md:px-16">
        <div id="Home" className="text-center">
          <Image
            src="/images/profilepic.png"
            width={140}
            height={140}
            alt="Profile"
            className="mt-20 rounded-full border-[#F9004D] border-2 mx-auto transition-all duration-300 hover:shadow-2xl hover:shadow-[#F9004D]"
          />
        </div>
        <br />
        <div className="text-center mt-2">
          <h3 className="opacity-60 font-palanquin text-lg sm:text-xl md:text-2xl">
            <b>Welcome To My Portfolio!</b>
          </h3>
          <h1 className="text-3xl sm:text-4xl font-bold">Hi, I'm Waleed Ahmad</h1>
          <h2 className="text-[#F9004D] text-2xl sm:text-3xl font-bold pt-2">MERN Stack Developer</h2>
          <br />
          <p className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            MERN Stack Developer | Next.js. I'm always learning and creating new
            projects. Check out my work to see what I’ve been building!
          </p>
          <br />
          <div className="flex space-x-4 text-center justify-center mt-6">
            <a href="https://www.linkedin.com/in/waleed-ahmad-54abab26b/" className="hover:text-[#F9004D]">
              <FaLinkedin className="bg-gray-400 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center text-white hover:bg-[#F9004D] hover:text-white transition duration-300 p-2" />
            </a>
            <a href="https://www.facebook.com/waleedahmad.waleedahmad.524" className="hover:text-[#F9004D]">
              <RiFacebookCircleFill className="bg-gray-400 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center text-white hover:bg-[#F9004D] hover:text-white transition duration-300 p-2" />
            </a>
            <a href="https://github.com/WaleedAhmad9902" className="hover:text-[#F9004D]">
              <FaGithub className="bg-gray-400 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex justify-center items-center text-white hover:bg-[#F9004D] hover:text-white transition duration-300 p-2" />
            </a>
          </div>
          <br />
          <div>
            <a href="/">
              <button className="bg-[#F9004D] hover:bg-black text-white relative w-40 h-12 rounded-md mt-6 sm:w-48 lg:w-56">
                <b>
                  Contact Me <ChevronRight className="inline" />
                </b>
              </button>
            </a>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Hero;
