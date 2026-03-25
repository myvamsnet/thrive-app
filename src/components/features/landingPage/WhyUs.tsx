import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';


const WhyUs = () => {
    const whyUsCards = [
      { src: "/images/activation.svg", alt: "Activation illustration" },
      { src: "/images/retention.svg", alt: "Retention illustration" },
      { src: "/images/revenue.svg", alt: "Revenue illustration" },
    ];
  return (
    <div className="flex  flex-col-reverse md:flex-row justifty-center items-center gap-8 px-2">
      {/* Left Image */}

      <div className="rounded-2xl border-[#232B33] opacity-80 md:block hidden">
        <Image
          src="/images/whyus-image.svg"
          alt="Building"
          width={390}
          height={568}
          className="w-full"
        />
      </div>
      {/* Right Content */}
      <div id="Why Us">
        <p className="text-xl uppercase  text-gray-400 mb-3">Why Us?</p>
        <Fade direction="down">
          <h2 className="lg:text-[44px] text-[28px]  lg:w-[778px] w-[343px] lg:leading-15 md:leading-[130%] font-semibold  mb-2">
            We don’t just build products, we build{" "}
            <span className="text-primary">3triving</span> businesses.
          </h2>

          <p className="text-gray-400 md:w-85.75 lg:text-xl text-base  lg:w-[778px] font-normal leading-8 mb-4">
            You know exactly what your industry needs. So why isn’t your product
            live yet? We’re not just a service provider; it’s the catalytic
            force that transforms ideas into thriving digital ecosystems. We
            build profit-generating machines. We focus on the metrics that
            determine whether a product thrives.
          </p>
        </Fade>
        {/* Cards */}
        <div className="rounded-2xl border-[#232B33] opacity-80 md:hidden block pb-4">
          <Image
            src="/images/whyus-mobile-img.svg"
            alt="Team meeting"
            width={343}
            height={327}
          />
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {whyUsCards.map((card) => (
            <Image
              key={card.src}
              src={card.src}
              alt={card.alt}
              width={248}
              height={220}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs
