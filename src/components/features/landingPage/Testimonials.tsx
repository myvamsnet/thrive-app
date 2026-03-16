import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import QuestionAndAnswer from "./QuestionsAndAnswers";


const Testimonials = () => {
  return (
    <section className="min-h-screen bg-[url('/images/background-image.svg')] bg-cover bg-center bg-no-repeat py-12 md:py-38 px-4 md:px-10">
      <div className="wrapper">
        <p className="text-xl   tracking-[0%] text-gray-400 mb-5">
          TESTIMONIALS
        </p>
        <div className=" flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="bg-secondary flex justify-between items-center gap-8 rounded-3xl  w-[1117px]">
            <Image
              src="/images/testimonial-1.svg"
              alt="testimonial"
              width={335}
              height={377}
            />
            <div>
              <h2 className="text-[28px] lg:text-[44px] font-bold w-[343px] md:w-[675px] leading-[90px]cd">
                Start a <span className="text-primary">3triving</span> business
                today!
              </h2>
              <p className="text-gray-300 text-base w-[254px] lg:w-167.5 leading-8 ">
                You know exactly what your industry needs. So why isn’t your
                product live yet? You’re not afraid of the project. You’re
                afraid of wasting time and money on something that won’t work.
                Book Clarity Call now!
              </p>
            </div>
            <Image
              src="/images/testimonial-2.svg"
              alt="testimonial"
              width={335}
              height={377}
              className="pl-[62px] "
            />
          </div>
        </div>
        <div className="flex items-center gap-5 pt-4">
          <button className="bg-secondary py-3 px-11 rounded-2xl border border-white/10">
            <ArrowLeft />
          </button>
          <button className="bg-secondary py-3 px-11 rounded-2xl border border-white/10">
            <ArrowRight />
          </button>
        </div>
      <QuestionAndAnswer/>
      </div>
    </section>
  );
}

export default Testimonials
