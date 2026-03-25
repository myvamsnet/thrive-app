import Image from "next/image";
import {  Bounce,  Fade,  Rotate,} from "react-awesome-reveal";
import WhyUs from "./WhyUs";


const AboutSection = () => {
  const cards = [
    { src: "/images/clarity.svg", alt: "Clarity" },
    { src: "/images/launch.svg", alt: "Launch" },
    { src: "/images/grow.svg", alt: "Grow" },
  ];

  
  return (
    <section
      id="about"
      className="min-h-screen bg-[url('/images/background-image.svg')] bg-cover bg-center bg-no-repeat py-12 md:py-20 px-2 md:px-10"
    >
      <div className="wrapper lg:space-y-39 space-y-17">
        <div className="flex flex-col md:flex-row justifty-center items-center gap-8 px-2">
          <div>
            <div>
              <p className="text-xl uppercase   tracking-[0%] text-gray-400 mb-3">
                About
              </p>
              <Fade direction="down">
                <h1 className="lg:text-[44px] text-[28px]  lg:w-[709px] md:w-[343px] lg:leading-15 md:leading-[130%] font-bold  mb-4">
                  We build <span className="text-primary">profitable</span> tech
                  products for audacious{" "}
                  <span className="text-primary">non-technical</span>{" "}
                  professionals.
                </h1>

                <p className="text-gray-400 lg:w-[778px] md:w-[343px] lg:text-xl text-base leading-8 mb-6">
                  You’ve spent years mastering your field. Solve that problem
                  now, launch the product people have been waiting for. We
                  handle design, development, and launch in 120 days. One team,
                  one roof, one simple investment.
                </p>
              </Fade>
            </div>
            <div className="rounded-2xl border-[#232B33] opacity-80 md:hidden block pb-4">
              <Image
                src="/images/mobile-about-img.svg"
                alt="Team meeting"
                width={343}
                height={327}
              />
            </div>
            {/* Cards */}
            <Bounce>
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
            </Bounce>
          </div>
          <div className="rounded-2xl border-[#232B33] opacity-80 md:block hidden ">
            <Image
              src="/images/about-image.svg"
              alt="Team meeting"
              width={390}
              height={598}
            />
          </div>
        </div>

     <WhyUs/>
      </div>
    </section>
  );
}

export default AboutSection
