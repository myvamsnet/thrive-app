import Image from "next/image";


const AboutSection = () => {
  const cards = [
    { src: "/images/clarity.svg", alt: "Clarity" },
    { src: "/images/launch.svg", alt: "Launch" },
    { src: "/images/grow.svg", alt: "Grow" },
  ];

  const whyUsCards = [
    { src: "/images/activation.svg", alt: "Activation illustration" },
    { src: "/images/retention.svg", alt: "Retention illustration" },
    { src: "/images/revenue.svg", alt: "Revenue illustration" },
  ];
  return (
    <section className="min-h-screen bg-[url('/images/background-image.svg')] bg-cover bg-center bg-no-repeat py-12 md:py-20 px-4 md:px-10">
      <div className="wrapper space-y-39">
        <div className="flex justifty-center  items-center">
          <div>
            <div>
              <p className="text-xl uppercase leadding-32  tracking-[0%] text-gray-400 mb-6">
                About
              </p>

              <h1 className="lg:text-[44px] md:text-[28px]  lg:w-[709px] md:w-[343px] lg:leading-16 md:leading-[130%] font-semibold  mb-6">
                We build <span className="text-primary">profitable</span> tech
                products for audacious{" "}
                <span className="text-primary">non-technical</span>{" "}
                professionals.
              </h1>

              <p className="text-gray-400 lg:w-[778px] text-xl leading-8 mb-10">
                You’ve spent years mastering your field. Solve that problem now,
                launch the product people have been waiting for. We handle
                design, development, and launch in 120 days. One team, one roof,
                one simple investment.
              </p>
            </div>

            {/* Cards */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {cards.map((card) => (
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
          <div className="rounded-2xl border-[#232B33] opacity-80  ">
            <Image
              src="/images/about-image.svg"
              alt="Team meeting"
              width={390}
              height={568}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="rounded-2xl border-[#232B33] opacity-80">
            <Image
              src="/images/whyus-image.svg"
              alt="Building"
              width={390}
              height={568}
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              Why Us?
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold  mb-6">
              We don’t just build products,
              <br />
              we build <span className="text-lime-400">Striving</span>{" "}
              businesses.
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              You know exactly what your industry needs. So why isn’t your
              product live yet? We’re not just a service provider; it’s the
              catalytic force that transforms ideas into thriving digital
              ecosystems. We build profit-generating machines. We focus on the
              metrics that determine whether a product thrives.
            </p>

            {/* Cards */}
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
      </div>
    </section>
  );
}

export default AboutSection
