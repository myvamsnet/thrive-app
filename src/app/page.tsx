import AboutSection from "@/components/features/landingPage/AboutSection";
import Navbar from "@/components/features/landingPage/layouts/Navbar";
import Image from "next/image";
import Link from "next/link";


const page = () => {
  return (
    <main className=" bg-[#172028CC]  text-white">
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
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800">
            <Image
              src="/images/hero-image1.svg"
              alt="Tablet"
              width={501}
              height={406}
              className="object-cover"
            />
          </div>
          <Image
            src="/images/hero-image2.svg"
            alt="Phone"
            width={501}
            height={406}
            className="object-cover"
          />
          <Image
            src="/images/hero-image3.svg"
            alt="Desktop"
            width={501}
            height={406}
            className="object-cover"
          />
          <div className="rounded-xl  shadow-2xl border border-gray-800">
            <Image
              src="/images/hero-image4.svg"
              alt="Desktop"
              width={501}
              height={406}
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Bottom Projects Bar */}
      <div className="bg-[#232B33] border-t border-gray-800 py-6 ">
        <div className="flex gap-12 justify-between text-gray-500 text-2xl ">
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
      <AboutSection/>
    </main>
  );
}

export default page
