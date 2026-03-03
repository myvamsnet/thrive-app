import Image from "next/image";


const AboutSection = () => {
  return (
    <section className="relative bg-[#0B0F14] text-white min-h-screen px-6 md:px-16 py-20 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.08),_transparent_40%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-28">
        {/* ========== TOP SECTION ========== */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              About
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              We build <span className="text-lime-400">profitable</span> tech
              <br />
              products for audacious{" "}
              <span className="text-lime-400">non-technical</span>{" "}
              professionals.
            </h1>

            <p className="text-gray-400 max-w-xl mb-10">
              You’ve spent years mastering your field. Solve that problem now,
              launch the product people have been waiting for. We handle design,
              development, and launch in 120 days. One team, one roof, one
              simple investment.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-4">
              {["Clarify", "Launch", "Grow"].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl h-28 flex items-center justify-center text-gray-200 font-medium hover:border-lime-400 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Team meeting"
              width={390}
              height={568}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ========== BOTTOM SECTION ========== */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left Image */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Building"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              Why Us?
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              We don’t just build products,
              <br />
              we build <span className="text-lime-400">Striving</span>{" "}
              businesses.
            </h2>

            <p className="text-gray-400 max-w-xl mb-10">
              You know exactly what your industry needs. So why isn’t your
              product live yet? We’re not just a service provider; it’s the
              catalytic force that transforms ideas into thriving digital
              ecosystems. We build profit-generating machines. We focus on the
              metrics that determine whether a product thrives.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-4">
              {["Activation", "Retention", "Revenue"].map((item) => (
                <div
                  key={item}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl h-28 flex items-center justify-center text-gray-200 font-medium hover:border-lime-400 transition-all duration-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
