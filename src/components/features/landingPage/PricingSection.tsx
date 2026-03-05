import Image from "next/image";
import PricingCard from "./PricingCard";
import { pricingData } from "@/components/constant/pricingData";


const PricingSection = () => {
  return (
    <section className="bg-secondary">
      <div className="wrapper px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="uppercase text-xl text-gray-400  mb-6">
              Invest Today
            </p>
            <h2 className="text-4xl md:text-5xl font-bold w-[343px]">
              <span className="text-primary">Get</span>{" "}
              <span className="text-tertiary">started</span> with 3trive today!
            </h2>
          </div>

          <p className="text-gray-400 mt-4 md:mt-0">
            Pricing that fits just right.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
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
        </div>
        {/* Bottom CTA Section */}
        <div className="my-16 bg-[#232B33] rounded-2xl p-6 flex flex-col md:flex-row items-center  gap-3 mx-2">
          <div className="flex lg:flex-row flex-col items-center gap-3">
            <Image
              src="/images/slots-image.svg"
              alt="slot-image"
              width={150}
              height={150}
            />
            <p className="text-gray-300 text-base w-[254px] md:w-[685px] leading-8 tracking-[0%]">
              You know exactly what your industry needs. So why isn’t your
              product live yet? You’re not afraid of the project. You’re afraid
              of wasting time and money on something that won’t work. Book
              Clarity Call now!
            </p>
            <p className="text-tertiary font-bold text-[32px] ">
              Only 4 slots left
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection
