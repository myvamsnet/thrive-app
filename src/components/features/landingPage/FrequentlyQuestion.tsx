"use client"

// import Image from "next/image"

import { useState } from "react";

// import { Bounce, Zoom } from "react-awesome-reveal";
export type faq = {
  id: number;
  question: string;
  answer: string;
};

type FAQsProps = {
  faqs: faq[];
  title: string;
  subTitle: string;
};


const FrequentlyQuestion = ({ faqs, title, subTitle }: FAQsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    // <div className="wrapper flex  flex-col-reverse md:flex-row justifty-center items-center gap-8 px-2 pt-38">
    //   <div>
    //     <div>
    //       <p className="text-xl   tracking-[0%] text-gray-400 mb-5">
    //         FREQUENTLY ASKED QUESTIONS
    //       </p>
    //       <Zoom>
    //         <h1 className="lg:text-[44px] md:text-[28px]  lg:w-[709px] md:w-[343px] lg:leading-15 md:leading-[130%] font-semibold  mb-5">
    //           How do I get started?
    //         </h1>

    //         <p className="text-gray-400 lg:w-[778px] md:w-[343px] lg:text-xl text-base leading-8 mb-6">
    //           3trive is not another agency, we your extended business success
    //           partner. What are the meetings MyVamsnet should be having to
    //           achieve collaborative success in alignment with the mission and
    //           vision? When? Why? Processes.
    //         </p>
    //         <div className="lg:text-[44px] md:text-[28px] font-bold leading-22">
    //           <p>Can I request a business idea?</p>
    //           <p>Development & Milestone Testing?</p>
    //           <p>Final Testing & Handover?</p>
    //         </div>
    //       </Zoom>
    //     </div>

    //     {/* Cards */}
    //   </div>
    //   <div className="rounded-2xl border-[#232B33] opacity-80  ">
    //     <Bounce>
    //       <Image
    //         src="/images/question-image.svg"
    //         alt="Team meeting"
    //         width={390}
    //         height={598}
    //       />
    //     </Bounce>
    //   </div>
    // </div>
    <section className=" px-4 sm:px-6 py-20 sm:py-28 lg:py-[140px] bg-white text-black">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h2 className="text-[40px] sm:text-[48px] lg:text-[64px] leading-[1.1]">
              <p className="italic font-normal font-empowerserif">{title}?</p>
              <p className="font-extrabold font-abcgravity">{subTitle}.</p>
            </h2>
          </div>

          {/* RIGHT */}
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
                  className="w-full flex items-start justify-between gap-4 text-left"
                >
                  <span className="text-[16px] sm:text-[18px] font-medium  text-xl font-gtamerica leading-7">
                    {faq.question}
                  </span>

                  <span className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-black text-white text-lg sm:text-xl">
                    {openIndex === index ? "–" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-black/70 max-w-[640px] ">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestion
