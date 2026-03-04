import Image from "next/image";
import { heroimages } from "@/components/constant/heroimages";
import Marquee from "react-fast-marquee";
const HeroSection = () => {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-20 pt-10 pb-20">
        <div className="text-center mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold w-[809px] text-center mx-auto">
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
    </>
  );
}

export default HeroSection
