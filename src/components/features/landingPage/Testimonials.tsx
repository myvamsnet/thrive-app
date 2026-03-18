
"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuestionAndAnswer from "./QuestionsAndAnswers";
import { testimonials } from "@/components/constant/testimonialData";
import { useRef } from "react";
import Image from "next/image";

const Testimonials = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollByAmount = 320;

  const handleScrollLeft = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    if (!scrollContainerRef.current) return;
    scrollContainerRef.current.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen bg-[url('/images/background-image.svg')] bg-cover bg-center bg-no-repeat py-12 md:py-38 px-4 md:px-10">
      <div className="wrapper">
        <p className="text-sm md:text-xl tracking-[0%] text-gray-400 mb-5">
          TESTIMONIALS
        </p>
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#1F272E] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 rounded-3xl min-w-[85%] sm:min-w-[80%] md:min-w-[1117px] p-4 md:p-8 snap-start"
            >
              <div className="w-full md:w-auto flex justify-center md:justify-start">
                <Image
                  src={item.image}
                  alt="testimonial"
                  width={280}
                  height={320}
                  className="rounded-2xl object-cover w-full max-w-70 md:max-w-none"
                />
              </div>

              <div className="space-y-3 md:space-y-4 w-full">
                <h2 className="text-lg sm:text-2xl lg:text-[44px] font-bold leading-snug sm:leading-snug lg:leading-[60px]">
                  {item.title.split("3triving")[0]}
                  <span className="text-primary">3triving</span>
                  {item.title.split("3triving")[1]}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 md:gap-5 pt-4">
          <button
            type="button"
            onClick={handleScrollLeft}
            className="bg-secondary py-2 px-6 md:py-3 md:px-11 rounded-2xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            type="button"
            onClick={handleScrollRight}
            className="bg-secondary py-2 px-6 md:py-3 md:px-11 rounded-2xl border border-white/10"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
        <QuestionAndAnswer />
      </div>
    </section>
  );
};

export default Testimonials;
