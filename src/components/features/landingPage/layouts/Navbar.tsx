"use client";
import { navLink } from "@/components/constant/navLinks";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[#232B33] transition-transform duration-300 
        "
    >
      <div className="wrapper flex items-center justify-between gap-10 opacity-88 py-6 mx-6 lg:px-0 px-4">
        {/* Logo */}
        <Link href="/" >
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={142}
            height={50}
            className="lg:block hidden"
          />
        </Link>

        <Image
          src="/images/logo.svg"
          alt="logo"
          width={82}
          height={28}
          className="lg:hidden block"
        />

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

        <nav className="lg:flex  items-center gap-8 hidden ">
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
        <button className="bg-[#C6FF00] text-[#172028] px-5 py-3 rounded-md text-lg font-bold lg:block hidden">
          Chat Support
        </button>
      </div>
      {/* Moblie Nav */}
      {isOpen && (
        <div className="px-2">
          <div className="wrapper text-center gap-8 lg:gap-3 mx-5 w-full mt-2  justify-between items-center text-lg text-gray-300 rounded-3xl bg-[#232B33] p-8 border-4 border-white/10">
            <div className="flex flex-col text-center gap-12 ">
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

            <div className="text-center mx-auto pt-8">
              <button className="text-black text-base font-bold bg-tertiary  px-8 py-3 rounded-lg w-full">
                Chat with Support
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
