"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const ProfitPortfolio = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "/images/portfolio-img.png",
    "/images/portfolio-img.png",
    "/images/portfolio-img.png",
    "/images/portfolio-img.png",
  ];

  
  const scrollAmount = () => {
    if (!scrollRef.current) return 0;
    const firstChild = scrollRef.current.children[0] as HTMLElement;
    return firstChild?.offsetWidth || 0;
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -scrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: scrollAmount(),
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 md:pb-38 wrapper">
      <div className=" px-4">
        <p className="text-xl text-gray-400 mb-5">PORTFOLIO</p>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-[28px] lg:text-[44px] font-bold">
            <span className="text-primary">Profit</span> and
            <span className="text-primary"> 3triving</span> projects.
          </h2>

          <p className="text-gray-300 text-base lg:text-xl pt-4 md:pt-0">
            3trive is not another agency, we&apos;re your partner.
          </p>
        </div>
      </div>

      {/* SCROLL SECTION */}
      <div className="w-full mt-10">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scroll-smooth no-scrollbar px-4 snap-x snap-mandatory "
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="snap-start min-w-full md:min-w-125 lg:min-w-2xl"
            >
              <Image
                src={src}
                alt={`Portfolio ${index + 1}`}
                width={672}
                height={513}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex items-center gap-5 pt-6 wrapper px-4">
          <button
            onClick={scrollLeft}
            className="bg-secondary py-3 px-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={scrollRight}
            className="bg-secondary py-3 px-6 rounded-2xl border border-white/10 hover:scale-105 transition"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfitPortfolio;
