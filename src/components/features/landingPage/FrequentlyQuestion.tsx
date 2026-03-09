import Image from "next/image"
import { Bounce, Zoom } from "react-awesome-reveal";


const FrequentlyQuestion = () => {
  return (
    <div className="wrapper flex  flex-col-reverse md:flex-row justifty-center items-center gap-8 px-2 pt-38">
      <div>
        <div>
          <p className="text-xl   tracking-[0%] text-gray-400 mb-5">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <Zoom>
            <h1 className="lg:text-[44px] md:text-[28px]  lg:w-[709px] md:w-[343px] lg:leading-15 md:leading-[130%] font-semibold  mb-5">
              How do I get started?
            </h1>

            <p className="text-gray-400 lg:w-[778px] md:w-[343px] lg:text-xl text-base leading-8 mb-6">
              3trive is not another agency, we your extended business success
              partner. What are the meetings MyVamsnet should be having to
              achieve collaborative success in alignment with the mission and
              vision? When? Why? Processes.
            </p>
            <div className="lg:text-[44px] md:text-[28px] font-bold leading-22">
              <p>Can I request a business idea?</p>
              <p>Development & Milestone Testing?</p>
              <p>Final Testing & Handover?</p>
            </div>
          </Zoom>
        </div>

        {/* Cards */}
      </div>
      <div className="rounded-2xl border-[#232B33] opacity-80  ">
        <Bounce>
          <Image
            src="/images/question-image.svg"
            alt="Team meeting"
            width={390}
            height={598}
          />
        </Bounce>
      </div>
    </div>
  );
}

export default FrequentlyQuestion
