import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

const ProfitPortfolio = () => {
  const images = [
    "/images/hero-image2.svg",
    "/images/hero-image3.svg",
    "/images/hero-image2.svg",
    "/images/hero-image3.svg",
  ];

  return (
    <section className="py-12 md:py-38 wrapper">
      <p className="text-xl tracking-[0%] text-gray-400 mb-5">PORTFOLIO</p>

      <div className="flex flex-col justify-between md:flex-row items-center">
        <h2 className="text-4xl md:text-5xl font-bold w-full lg:w-177.25">
          <span className="text-primary">Profit</span> and
          <span className="text-primary"> 3triving</span> projects.
        </h2>
        <p className="text-gray-300 text-base md:text-xl w-85.75 md:w-116.75 leading-8 tracking-[0%] pt-4 md:pt-0">
          3trive is not another agency, we&apos;re your partner.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 py-4">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Portfolio ${index + 1}`}
            width={672}
            height={513}
            className="w-full"
          />
        ))}
      </div>

      <div className="wrapper flex items-center gap-5 pt-4">
        <button className="bg-secondary py-3 px-11 rounded-2xl border border-white/10">
          <ArrowLeft />
        </button>
        <button className="bg-secondary py-3 px-11 rounded-2xl border border-white/10">
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProfitPortfolio;
