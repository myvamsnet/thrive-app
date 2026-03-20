import Image from "next/image";
import { heroimages } from "@/components/constant/heroimages";
import Marquee from "react-fast-marquee";
import { Slide } from "react-awesome-reveal";
const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen bg-[url('/images/hero_image.svg')] bg-cover bg-center bg-no-repeat py-12 md:py-20 px-4 md:px-10">
        <Slide direction="up">
          <div className=" mx-auto pt-18.5">
            <h1 className="text-4xl md:text-6xl font-bold lg:w-202.25 w-81.25 md:text-center  mx-auto lg:leading-21.5 leading-11.5">
              Move From Idea to a <span className="text-primary">3triving</span>{" "}
              Business Today!
            </h1>

            <p className="mt-6 text-gray-400 text-xl font-normal md:text-base text-center mx-auto">
              For non-technical professionals, turning expertise into profitable
              Apps.
            </p>
          </div>
        </Slide>
        {/* Bottons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 lg:hidden   text-center mx-auto px-4">
          {/* Primary Button */}
          <button className="bg-tertiary text-black font-semibold px-8 py-3 rounded-lg w-full">
            Book Clarity Call
          </button>

          {/* Secondary Button */}
          <button className="border border-tertiary text-terborder-tertiary font-semibold px-8 py-3 rounded-lg w-full">
            Chat with support
          </button>
        </div>
        {/* Images */}
        <div className="mt-16  items-center justify-center overflow-x-hidden">
          <Marquee gradient={false} speed={50}>
            {heroimages.map((image, index) => (
              <div key={index} className=" px-2">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={601}
                  height={506}
                  className="object-cover w-full"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
}

export default HeroSection
