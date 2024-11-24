


"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false); // Close menu after click
  };


  return (
    <header className="fixed bg-white shadow-xl px-5 py-5 z-30 w-full">
      <nav className="flex items-center justify-center h-16 ">
        {/* Logo
        <a href="/">
          <Image
            src="/images/logodesign.png"
            width={150}
            height={40}
            alt="logo"
          />
        </a> */}

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center lg:w-auto lg:gap-5 lg:justify-start lg:ml-4 font-semibold text-[#181818] transform ">
          <li>
            <Link href="#" onClick={() => handleClick("Home")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#skills" onClick={() => handleClick("skills")}>
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" onClick={() => handleClick("projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => handleClick("contact")}>
              Contact
            </Link>
          </li>
          <li>
            <a
              href="/"
              className="relative text-[#F9004D] border-[1px] border-[#F9004D] w-30 h-10 p-2 rounded-3xl text-center block group"
            >
              <b>Get Started</b>
              <div className="absolute inset-0 mx-auto w-full bg-[#F9004D] group-hover:w-0 rounded-3xl duration-700 flex justify-center items-center overflow-hidden text-white font-bold text-nowrap">
                Get Started
              </div>
            </a>
          </li>
        </ul>

        {/* Mobile Menu (Vertical) */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-5 bg-white shadow-lg rounded-lg p-5 flex flex-col gap-4 z-40 w-[150px] text-center font-semibold text-[#181818]">
            <li>
              <Link href="#" onClick={() => handleClick("Home")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => handleClick("skills")}>
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => handleClick("projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => handleClick("contact")}>
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/"
                className="relative text-[#F9004D] border-[1px] border-[#F9004D] w-full py-2 rounded-3xl text-center block group"
              >
                <b>Get Started</b>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
