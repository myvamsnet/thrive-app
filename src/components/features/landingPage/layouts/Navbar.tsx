"use client"
import { navLink } from "@/components/constant/navLinks";
import { X } from "lucide-react";
import Image from "next/image"
import { useState } from "react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};



const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    }
  return (
    <header className=" bg-[#232B33]">
      <div className="wrapper flex items-center justify-between gap-10 opacity-[88%] py-6">
        {/* Logo */}
        <Image src="/images/logo.svg" alt="logo" width={142} height={50} />
        {/* Mobile toggle */}
        <button onClick={toggleMenu} className="lg:hidden">
          {isOpen ? (
            <X size={22} />
          ) : (
            <Image
              src="/images/menu-icon.svg"
              alt="menu-icon"
              width={32}
              height={32}
            />
          )}
        </button>

        {/* Links */}
        <nav className="hidden md:flex gap-10 text-lg text-gray-300 ">
          {navLink.map((link) => (
            <li key={link.name} className="list-none">
              <button
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                {link.name}
              </button>
            </li>
          ))}
        </nav>
        {/* Button */}
        <button className="bg-[#C6FF00] text-[#172028] px-5 py-3 rounded-md text-lg font-bold lg:block md:hidden">
          Chat Support
        </button>
        {/* Moblie Nav */}
      </div>
      {isOpen && (
        <div className=" bg-[#141B22]  border-2 rounded-4xl px-4 pt-8 w-full -mt-5  block lg:hidden">
          <div className="flex flex-col text-center gap-8">
            {navLink.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => {
                  scrollToSection(link.href);
                  toggleMenu();
                }}
                className="hover:opacity-80 transition-opacity"
              >
                {link.name}
              </button>
            ))}
          </div>

          <button className="text-black text-base font-bold  bg-[#C6FF00] py-2 px-3 rounded-xl w-[219px] text-center mx-auto">
            Chat with Support
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar
