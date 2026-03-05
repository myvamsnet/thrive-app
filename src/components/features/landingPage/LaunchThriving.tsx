

const LaunchThriving = () => {
  return (
    <section className=" py-24 px-4">
      {/* Background Card */}
      <div className="wrapper rounded-2xl  border-4 border-white/10 bg-gradient-to-br from-[#1f2a2e] via-[#1b3532] to-[#102022] shadow-2xl">
        {/* Radial Pattern Overlay */}
        <div className=" opacity-20 bg-[radial-gradient(circle_at_center,_rgba(132,204,22,0.4)_0%,_transparent_70%)]" />

        {/* Content */}
        <div className="text-center py-20 px-6 md:px-16">
          {/* Heading */}
          <h1 className="text-[28px] md:text-[44px] font-bold text-white leading-[90px">
            Launch a <span className="text-tertiary">3triving</span> Product
            Today!
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-gray-300 text-base md:text-xl mx-auto leading-8 w-[279px] md:w-[631px]">
            You have the expertise. You have the vision. We have the engine to
            turn it into a thriving digital product, in few months.
            <br className="hidden md:block" />
            Let’s build together.
          </p>
          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <button className="bg-tertiary text-black font-semibold px-8 py-3 rounded-lg shadow-lg">
              Book Clarity Call
            </button>

            {/* Secondary Button */}
            <button className="border border-tertiary text-terborder-tertiary font-semibold px-8 py-3 rounded-lg hover:bg-terborder-tertiary hover:text-black transition duration-300">
              Chat with support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LaunchThriving
