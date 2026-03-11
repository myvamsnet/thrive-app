"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfitPortfolio = () => {
  const sliderRef = useRef<Slider | null>(null);

  const images = [
    "/images/hero-image2.svg",
    "/images/hero-image3.svg",
    "/images/hero-image2.svg",
    "/images/hero-image3.svg",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="py-12 md:py-38">
      <div className="wrapper px-4">
        <p className="text-xl text-gray-400 mb-5">PORTFOLIO</p>

        <div className="flex flex-col md:flex-row justify-between  items-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Profit</span> and
            <span className="text-primary"> 3triving</span> projects.
          </h2>

          <p className="text-gray-300 text-base md:text-xl pt-4 md:pt-0">
            3trive is not another agency, we&apos;re your partner.
          </p>
        </div>
      </div>
      <div className="py-4 lg:pl-84">
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Portfolio ${index + 1}`}
              width={672}
              height={513}
              className="w-full  lg:px-4 px-1"
            />
          ))}
        </Slider>
      </div>

      <div className="flex items-center gap-5 pt-4 wrapper">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="bg-secondary py-3 px-11 rounded-2xl border border-white/10"
        >
          <ArrowLeft />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="bg-secondary py-3 px-11 rounded-2xl border border-white/10"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};

export default ProfitPortfolio;
