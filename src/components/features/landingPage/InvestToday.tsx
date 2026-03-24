import Image from "next/image";
import PricingCard from "./PricingCard";
import { pricingData } from "@/components/constant/pricingData";
import {  Zoom } from "react-awesome-reveal";


const InvestToday = () => {
  return (
    <section className="bg-secondary">
      <div className="wrapper px-4">
        <p className="uppercase text-xl  text-gray-400  mb-6">
          Invest Today
        </p>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-[28px] lg:text-[44px] font-bold w-85.75 lg:w-177.25 leading-[130%]">
            <span className="text-primary">Get </span>
            <span className="text-tertiary"> started</span> with  <br className="lg:hidden"/>3trive today!
          </h2>
          <p className="text-gray-400 text-xl mt-4 md:mt-0 ">
            Pricing that fits just right.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          <Zoom>
            {pricingData.map((plan, index) => (
              <PricingCard
                key={index}
                image={plan.image}
                title={plan.title}
                price={plan.price}
                features={plan.features}
                highlighted={plan.highlighted}
              />
            ))}
          </Zoom>
        </div>
        {/* Bottom CTA Section */}
        <div className="mt-8 mb-38 bg-[#232B33] rounded-2xl p-6 flex flex-col md:flex-row items-center  gap-3 mx-2 lg:w-300 h-full">
          <div className="flex lg:flex-row flex-col items-center gap-3">
            <Image
              src="/images/slots-image.svg"
              alt="slot-image"
              width={150}
              height={150}
            />
            <p className="text-gray-300 lg:text-left text-center  lg:text-xl text-base w-83.5 md:w-171.25 leading-8 tracking-[0%] lg:p-0 p-8">
              You know exactly what your industry needs. So why isn’t your
              product live yet? You’re not afraid of the project. You’re afraid
              of wasting time and money on something that won’t work. Book
              Clarity Call now!
            </p>
            <p className="text-tertiary font-bold text-[32px] underline">
              Only 4 slots left
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestToday
