import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const ProfitPortfolio = () => {
  return (
    <section className=" py-12 md:py-38 ">
      <div className="">
        <p className="text-xl   tracking-[0%] text-gray-400 mb-5">PORTFOLIO</p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <h2 className="text-4xl md:text-5xl font-bold w-[343px] md:w-[709px]">
            <span className="text-primary">Profit</span> and
            <span className="text-primary"> 3triving</span> projects.
          </h2>
          <p className="text-gray-300 text-base md:text-xl w-[343px] md:w-[467px] leading-8 tracking-[0%] pt-4 md:pt-0">
            3trive is not another agency, we’re your partner.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8  py-4">
          <Image
            src="/images/hero-image2.svg"
            alt="testimonial"
            width={672}
            height={513}
            className="ml-[55rem] "
          />
          <Image
            src="/images/hero-image3.svg"
            alt="testimonial"
            width={672}
            height={513}
            className=""
          />
        </div>
        <div className="flex items-center gap-5 pt-4">
          <button className="bg-secondary py-3 px-11 rounded-2xl border border-white/10">
            <ArrowLeft />
          </button>
          <button className="bg-secondary py-3 px-11 rounded-2xl border border-white/10">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfitPortfolio
