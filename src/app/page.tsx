"use client"
import AboutSection from "@/components/features/landingPage/AboutSection";
import Navbar from "@/components/features/landingPage/layouts/Navbar";
import Image from "next/image";
import { heroimages } from "@/components/constant/heroimages";
import Marquee from "react-fast-marquee";
import ProvenModel from "@/components/features/landingPage/ProvenModel";


const page = () => {
  return (
    <main className=" bg-secondary  text-white">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <section className="px-6 md:px-20 pt-10 pb-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Move From Idea to a <span className="text-primary">3triving</span>{" "}
            Business Today!
          </h1>

          <p className="mt-6 text-gray-400 text-sm md:text-base">
            For non-technical professionals, turning expertise into profitable
            Apps.
          </p>
        </div>

        {/* Images */}
        <div className="mt-16  items-center justify-center gap-8">
          <Marquee gradient={false} speed={50}>
            {heroimages.map((image, index) => (
              <div key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={501}
                  height={406}
                  className="object-cover "
                />
              </div>
            ))}
          </Marquee>
         
        </div>
      </section>
      {/* Bottom Projects Bar */}
      <div className="bg-[#232B33] border-t border-gray-800 py-10 slider-container">
        <div className="flex gap-12 justify-between text-gray-500 text-2xl overflow-x-hidden">
          {[
            "MTracker",
            "Mitlas",
            "MyVamsnet",
            "Cozaipay",
            "AngyCare",
            "Mtracker",
            "MyVamsnet",
          ].map((item, i) => (
            <span key={i} className="hover:text-lime-400 cursor-pointer">
              {item}
            </span>
          ))}
        </div>
      </div>
      <AboutSection />
      <ProvenModel/>
    </main>
  );
}

export default page
