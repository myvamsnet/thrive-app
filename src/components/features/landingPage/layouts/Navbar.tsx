"use client";

import { navLink } from "@/components/constant/navLinks";
import { X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false); // scrolling down → hide
      } else {
        setShowNav(true); // scrolling up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#232B33] transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="wrapper flex items-center justify-between gap-10 opacity-88 py-6 mx-6 lg:px-0 px-4">
        {/* Logo */}
        <Image src="/images/logo.svg" alt="logo" width={142} height={50} className="lg:block hidden"/>
        <Image src="/images/logo.svg" alt="logo" width={82} height={28} />

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

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-10 text-lg text-gray-300">
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

        {/* Desktop Button */}
        <button className="bg-[#C6FF00] text-[#172028] px-5 py-3 rounded-md text-lg font-bold lg:block hidden">
          Chat Support
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="wrapper text-center gap-8 lg:gap-3 pt-8 w-full -mt-5 justify-between items-center text-lg text-gray-300 rounded-3xl bg-[#232B33] p-8 border-4 border-white/10">
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

          <div className="text-center mx-auto pt-8">
            <button className="text-black text-base font-bold bg-tertiary py-2 px-3 rounded-xl w-[219px]">
              Chat with Support
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
