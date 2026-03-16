"use client";
import { faqs } from "@/components/constant/faq";
import Image from "next/image";
import { useState } from "react";
import { Bounce, Zoom } from "react-awesome-reveal";

const QuestionAndAnswer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-2 sm:px-6 py-20 sm:py-28 lg:py-[140px]">
      <div className="wrapper">
        <div>
          <p className="text-xl tracking-[0%] text-gray-400 mb-5">
            FREQUENTLY ASKED QUESTIONS
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-12 lg:gap-4">
          {/* FAQ SECTION */}
          <Zoom>
            <div>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-black/10 py-5 sm:py-6"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full text-left cursor-pointer"
                  >
                    <span className="lg:text-[44px] text-[28px] lg:w-177.25 md:w-85.75 lg:leading-15 md:leading-[130%] font-semibold ">
                      {faq.question}
                    </span>
                  </button>
                  {openIndex === index && (
                    <p className="text-gray-400 lg:w-194.5 md:w-85.75 lg:text-xl text-base leading-8 ">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Zoom>
          {/* IMAGE SECTION */}
          <div className="rounded-2xl border-[#232B33] opacity-80">
            <Bounce>
              <Image
                src="/images/question-image.svg"
                alt="Team meeting"
                width={390}
                height={501}
              />
            </Bounce>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionAndAnswer;
